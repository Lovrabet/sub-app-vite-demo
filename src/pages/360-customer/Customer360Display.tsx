import React, { useState, useEffect, useMemo } from 'react';
import { message } from 'antd';
import { EditOutlined, ReloadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { PageHeader, type PageHeaderAction } from '@/components';
import AdminLayout from '@/components/layout/gridLayout';
import Customer360Wrapper from './Customer360Wrapper';
import CompanyList from './components/CompanyList';
import CustomerInfo from './components/CustomerInfo';
import SalesManagement from './components/SalesManagement';
import DetailPanel from './components/DetailPanel';

// 引入共享的布局配置
import { 
  defaultInitialLayouts,
  ensureAllBreakpoints,
  STORAGE_KEYS
} from '@/configs/layoutConfigs';

const STORAGE_KEY = STORAGE_KEYS.CONFIG_LAYOUT;

/**
 * 客户360展示页面
 * 纯展示模式，不包含编辑功能
 * 性能优化，快速加载
 */
const Customer360Display: React.FC = () => {
  const navigate = useNavigate();
  const [layoutConfig, setLayoutConfig] = useState<any>(defaultInitialLayouts);

  // 加载保存的布局配置
  useEffect(() => {
    try {
      const savedConfig = localStorage.getItem(STORAGE_KEY);
      if (savedConfig) {
        const config = JSON.parse(savedConfig);
        if (config.layouts) {
          // 确保加载的配置包含所有断点
          const completeLayouts = ensureAllBreakpoints(config.layouts);
          setLayoutConfig(completeLayouts);
          console.log('已加载自定义布局配置，包含断点:', Object.keys(completeLayouts));
        }
      } else {
        // 没有保存的配置时，使用默认配置并确保所有断点
        const defaultLayouts = ensureAllBreakpoints(defaultInitialLayouts);
        setLayoutConfig(defaultLayouts);
        console.log('使用默认布局配置，包含断点:', Object.keys(defaultLayouts));
      }
    } catch (error) {
      console.error('加载布局配置失败:', error);
      // 加载失败时使用默认配置
      const defaultLayouts = ensureAllBreakpoints(defaultInitialLayouts);
      setLayoutConfig(defaultLayouts);
    }
  }, []);

  // 刷新数据
  const handleRefresh = () => {
    message.info('数据刷新中...');
    // TODO: 实际的数据刷新逻辑
    setTimeout(() => {
      message.success('数据已刷新');
    }, 1000);
  };

  // 跳转到配置页面
  const navigateToConfig = () => {
    navigate('/customer360/config');
  };

  // 页面操作按钮
  const pageHeaderActions: PageHeaderAction[] = [
    {
      icon: ReloadOutlined,
      text: '刷新数据',
      handler: handleRefresh,
    },
    {
      icon: EditOutlined,
      text: '编辑布局',
      type: 'primary',
      handler: navigateToConfig,
    },
  ];

  // 模块配置
  const modules = useMemo(() => [
    {
      key: 'companies',
      title: '公司列表',
      component: <CompanyList />,
    },
    {
      key: 'customer',
      title: '客户信息',
      component: <CustomerInfo />,
    },
    {
      key: 'sales',
      title: '销售管理',
      component: <SalesManagement />,
    },
    {
      key: 'assistant',
      title: 'AI助手与详情',
      component: <DetailPanel />,
    },
  ], []);

  return (
    <Customer360Wrapper>
      <div className="customer360-display">
        <PageHeader actions={pageHeaderActions} style={{
          marginBottom: 16,
        }}/>
        
        <AdminLayout
          modules={modules}
          layouts={layoutConfig}
          productionMode={true}  // 生产模式：无边框样式
          isDraggable={false}    // 禁用拖拽
          isResizable={false}    // 禁用调整大小
          editable={false}       // 禁用编辑
        />
      </div>
    </Customer360Wrapper>
  );
};

export default Customer360Display;