import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { withLayout, createResponsiveLayout } from '@/components/layout/withLayout';
import { message, Dropdown, Modal, FloatButton, Tooltip } from 'antd';
import {
  EditOutlined,
  SaveOutlined,
  UndoOutlined,
  AppstoreOutlined,
  LockOutlined,
  SettingOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { PageHeader, type PageHeaderAction } from '@/components';
import Customer360Wrapper from './Customer360Wrapper';
import CompanyList from './components/CompanyList';
import CustomerInfo from './components/CustomerInfo';
import SalesManagement from './components/SalesManagement';
import DetailPanel from './components/DetailPanel';
import './Customer360Layout.css';

// 引入共享的布局配置
import { 
  layoutPresets, 
  defaultInitialLayouts, 
  ensureAllBreakpoints,
  STORAGE_KEYS 
} from '@/configs/layoutConfigs';

const STORAGE_KEY = STORAGE_KEYS.DISPLAY_LAYOUT;

const Customer360Layout: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [currentLayouts, setCurrentLayouts] = useState<any>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [toolbarExpanded, setToolbarExpanded] = useState(false);
  const saveTimerRef = useRef<NodeJS.Timeout>();
  const layoutsRef = useRef(currentLayouts);

  // 加载保存的布局
  useEffect(() => {
    const savedLayouts = localStorage.getItem(STORAGE_KEY);
    if (savedLayouts) {
      try {
        const parsed = JSON.parse(savedLayouts);
        setCurrentLayouts(parsed);
      } catch (e) {
        console.error('Failed to load saved layouts:', e);
      }
    }
  }, []);

  // 保存布局到LocalStorage
  const saveLayouts = useCallback(() => {
    if (currentLayouts) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentLayouts));
      message.success('布局已保存');
      setHasChanges(false);
    }
  }, [currentLayouts]);

  // 自动保存功能
  const autoSaveLayouts = useCallback(() => {
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }
    saveTimerRef.current = setTimeout(() => {
      if (hasChanges && currentLayouts) {
        saveLayouts();
      }
    }, 3000); // 3秒后自动保存
  }, [hasChanges, currentLayouts, saveLayouts]);

  // 重置布局
  const resetLayouts = useCallback(() => {
    Modal.confirm({
      title: '确认重置布局？',
      content: '这将恢复到默认布局设置，您的自定义布局将丢失。',
      onOk: () => {
        localStorage.removeItem(STORAGE_KEY);
        setCurrentLayouts(null);
        setHasChanges(false);
        message.success('布局已重置');
        window.location.reload();
      },
    });
  }, []);

  // 应用预设布局
  const applyPreset = useCallback((preset: typeof layoutPresets.default) => {
    // 构建完整的布局配置
    const layoutConfig = {
      xl: preset.lg,
      lg: preset.lg,
      md: preset.md || defaultInitialLayouts.md,
      sm: defaultInitialLayouts.sm,
      xs: defaultInitialLayouts.xs,
    };
    
    // 确保所有断点都存在
    const completeLayouts = ensureAllBreakpoints(layoutConfig);
    const newLayouts = createResponsiveLayout(completeLayouts);
    
    setCurrentLayouts(newLayouts);
    setHasChanges(true);
    message.info(`已应用布局：${preset.name}`);
  }, []);

  const presetMenuItems = useMemo(() => Object.entries(layoutPresets).map(([key, preset]) => ({
    key,
    label: preset.name,
    onClick: () => applyPreset(preset),
  })), [applyPreset]);

  const handleLayoutChange = useCallback((_current: any, all: any) => {
    setCurrentLayouts(all);
    layoutsRef.current = all;
    setHasChanges(true);
    if (editMode) {
      autoSaveLayouts();
    }
  }, [editMode, autoSaveLayouts]);

  // 刷新数据处理
  const handleRefresh = useCallback(() => {
    message.info('数据刷新中...');
    // TODO: 实际的数据刷新逻辑
    setTimeout(() => {
      message.success('数据已刷新');
    }, 1000);
  }, []);

  // 键盘快捷键支持
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+E 切换编辑模式
      if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        setEditMode(prev => !prev);
        setToolbarExpanded(true);
      }
      // Ctrl+S 保存布局
      if (e.ctrlKey && e.key === 's' && editMode) {
        e.preventDefault();
        saveLayouts();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [editMode, hasChanges]);

  // PageHeader配置
  const pageHeaderActions: PageHeaderAction[] = useMemo(() => [
    {
      icon: ReloadOutlined,
      text: '刷新数据',
      handler: handleRefresh,
    },
  ], [handleRefresh]);

  // 使用useMemo缓存模块配置
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

  const pageConfig = useMemo(() => ({
    mode: 'auto' as const,
    title: '客户360全景',
    description: '全方位展示客户信息、销售机会、订单跟踪和智能分析',
    
    modules,
    
    // 使用共享的默认布局配置
    layouts: currentLayouts || createResponsiveLayout(defaultInitialLayouts),
    
    editable: editMode,
    productionMode: !editMode,  // 默认生产模式
    developmentMode: editMode,   // 编辑时为开发模式
    
    onLayoutChange: handleLayoutChange,
  }), [modules, currentLayouts, editMode, handleLayoutChange]);

  const Customer360 = useMemo(() => withLayout(pageConfig), [pageConfig]);

  return (
    <Customer360Wrapper>
      {/* 1. 页面头部 - 面包屑和操作按钮 */}
      <PageHeader actions={pageHeaderActions} style={{
          marginBottom: 16,
        }}/>
      
      {/* 2. 业务内容主体 */}
      <Customer360 />
      
      {/* 3. 悬浮工具栏 - 右下角 */}
      <FloatButton.Group
        open={toolbarExpanded}
        onOpenChange={setToolbarExpanded}
        trigger="click"
        style={{ right: 24, bottom: 24 }}
        shape="circle"
        icon={<SettingOutlined />}
        badge={{ dot: hasChanges }}
      >
        <Tooltip title="编辑布局 (Ctrl+E)" placement="left">
          <FloatButton
            icon={editMode ? <LockOutlined /> : <EditOutlined />}
            type={editMode ? "primary" : "default"}
            onClick={() => {
              setEditMode(!editMode);
              if (!editMode) {
                message.info('进入编辑模式，拖拽调整布局');
              } else {
                message.success('已退出编辑模式');
              }
            }}
          />
        </Tooltip>
        
        <Dropdown menu={{ items: presetMenuItems }} placement="topLeft">
          <FloatButton
            icon={<AppstoreOutlined />}
            tooltip="布局模板"
          />
        </Dropdown>
        
        <Tooltip title="保存布局 (Ctrl+S)" placement="left">
          <FloatButton
            icon={<SaveOutlined />}
            onClick={saveLayouts}
            badge={{ dot: hasChanges }}
          />
        </Tooltip>
        
        <Tooltip title="重置布局" placement="left">
          <FloatButton
            icon={<UndoOutlined />}
            onClick={resetLayouts}
          />
        </Tooltip>
      </FloatButton.Group>
      
      {/* 编辑模式提示 */}
      {editMode && (
        <div className="edit-mode-indicator">
          编辑模式：拖拽边角调整大小，拖拽内容区移动位置
        </div>
      )}
    </Customer360Wrapper>
  );
};

export default Customer360Layout;