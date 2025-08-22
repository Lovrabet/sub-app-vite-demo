import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { Button, Space, message, Card, Typography, Divider, Modal, Tag, Tooltip, Alert, Collapse } from 'antd';
import {
  AppstoreOutlined,
  EyeOutlined,
  ArrowLeftOutlined,
  UndoOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router';
import AdminLayout from '@/components/layout/gridLayout';
import { PageHeader, type PageHeaderAction } from '@/components';
import Customer360Wrapper from './Customer360Wrapper';
import CompanyList from './components/CompanyList';
import CustomerInfo from './components/CustomerInfo';
import SalesManagement from './components/SalesManagement';
import DetailPanel from './components/DetailPanel';
import type { Layout } from 'react-grid-layout';

const { Title, Paragraph, Text } = Typography;

// 引入共享的布局配置
import { 
  layoutPresets,
  defaultInitialLayouts as initialLayouts,
  SUPPORTED_BREAKPOINTS,
  ensureAllBreakpoints,
  validateLayouts,
  STORAGE_KEYS
} from '@/configs/layoutConfigs';

const STORAGE_KEY = STORAGE_KEYS.CONFIG_LAYOUT;

const ConfigLayout: React.FC = () => {
  const navigate = useNavigate();
  const [currentLayouts, setCurrentLayouts] = useState<any>(initialLayouts);
  const [configName, setConfigName] = useState('customer360-layout');
  const [previewMode, setPreviewMode] = useState(false);
  const [hasLocalConfig, setHasLocalConfig] = useState(false); // 是否有本地配置
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false); // 是否有未保存的修改
  const [isSaving, setIsSaving] = useState(false); // 是否正在保存
  const originalLayoutsRef = useRef<any>(null); // 记录原始布局，用于判断是否有修改
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('lg'); // 当前断点
  
  // 记录初始布局，用于比较是否有修改
  useEffect(() => {
    if (!originalLayoutsRef.current && currentLayouts) {
      originalLayoutsRef.current = currentLayouts;
    }
  }, []);
  
  // 获取当前断点
  const getCurrentBreakpoint = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1920) return 'xl';
    else if (width >= 1600) return 'lg';
    else if (width >= 1200) return 'md';
    else if (width >= 768) return 'sm';
    return 'xs';
  }, []);
  
  // 监听窗口大小变化，更新当前断点
  useEffect(() => {
    const handleResize = () => {
      const bp = getCurrentBreakpoint();
      setCurrentBreakpoint(bp);
    };
    
    // 初始设置
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getCurrentBreakpoint]);

  // 加载已保存的配置 - 优先使用本地配置
  useEffect(() => {
    try {
      const savedConfig = localStorage.getItem(STORAGE_KEY);
      if (savedConfig) {
        const config = JSON.parse(savedConfig);
        
        if (config.layouts) {
          // 确保加载的配置包含所有断点
          const completeLayouts = ensureAllBreakpoints(config.layouts);
          
          // 验证布局完整性
          if (validateLayouts(completeLayouts)) {
            setCurrentLayouts(completeLayouts);
            originalLayoutsRef.current = completeLayouts; // 同步更新原始布局
            setConfigName(config.name || '自定义布局');
            setHasLocalConfig(true);
            
            console.log('已加载本地保存的布局配置:', {
              name: config.name,
              version: config.version,
              breakpoints: Object.keys(completeLayouts),
              isValid: true
            });
          } else {
            throw new Error('布局配置验证失败');
          }
        } else {
          throw new Error('配置中缺少layouts字段');
        }
      } else {
        // 如果没有本地配置，使用默认配置
        const defaultLayouts = ensureAllBreakpoints(initialLayouts);
        setCurrentLayouts(defaultLayouts);
        originalLayoutsRef.current = defaultLayouts;
        setConfigName('默认布局 (2-3-4-3)');
        setHasLocalConfig(false);
        console.log('使用默认布局配置，包含断点:', Object.keys(defaultLayouts));
      }
    } catch (error) {
      console.error('加载配置失败:', error);
      
      // 加载失败时使用默认配置
      const defaultLayouts = ensureAllBreakpoints(initialLayouts);
      setCurrentLayouts(defaultLayouts);
      originalLayoutsRef.current = defaultLayouts;
      setConfigName('默认布局 (2-3-4-3)');
      setHasLocalConfig(false);
      
      message.warning('加载配置失败，使用默认布局');
    }
  }, []);

  // 页面操作按钮
  const pageHeaderActions: PageHeaderAction[] = [
    {
      icon: ArrowLeftOutlined,
      text: '返回客户360',
      handler: () => navigate('/customer360'),
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

  // 保存配置到本地
  const saveToLocal = useCallback(() => {
    setIsSaving(true);
    
    try {
      // 确保所有断点都被保存
      const completeLayouts = ensureAllBreakpoints(currentLayouts);
      
      const config = {
        name: configName,
        layouts: completeLayouts,
        timestamp: new Date().toISOString(),
        version: '2.0.0', // 更新版本号以标识新的存储格式
        breakpoints: SUPPORTED_BREAKPOINTS, // 记录支持的断点
      };
      
      const configStr = JSON.stringify(config);
      localStorage.setItem(STORAGE_KEY, configStr);
      
      setHasLocalConfig(true);
      setHasUnsavedChanges(false);
      originalLayoutsRef.current = completeLayouts; // 更新原始布局
      
      // 调试信息
      console.log('配置保存成功:', {
        name: config.name,
        breakpoints: Object.keys(completeLayouts),
        timestamp: config.timestamp
      });
      
      message.success(`配置已保存 (包含 ${Object.keys(completeLayouts).length} 个断点)`);
    } catch (error) {
      console.error('保存配置失败:', error);
      message.error('保存失败，请重试');
    } finally {
      setIsSaving(false);
    }
  }, [currentLayouts, configName]);
  
  // 放弃修改
  const discardChanges = useCallback(() => {
    if (!hasUnsavedChanges) return;
    
    Modal.confirm({
      title: '放弃修改',
      content: '确定要放弃所有未保存的修改吗？',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        // 恢复到原始布局
        if (originalLayoutsRef.current) {
          setCurrentLayouts(originalLayoutsRef.current);
          setHasUnsavedChanges(false);
          message.info('已恢复到上次保存的配置');
        }
      },
    });
  }, [hasUnsavedChanges]);
  
  // 恢复初始布局
  const resetToFactory = useCallback(() => {
    Modal.confirm({
      title: '恢复初始布局',
      content: '确定要恢复到初始默认布局吗？您的自定义配置将被清除。',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        // 清除本地存储
        localStorage.removeItem(STORAGE_KEY);
        // 重置为初始布局
        setCurrentLayouts(initialLayouts);
        setConfigName('默认布局 (2-3-4-3)');
        setHasLocalConfig(false);
        setHasUnsavedChanges(false);
        originalLayoutsRef.current = initialLayouts;
        message.success('已恢复初始布局');
      },
    });
  }, []);
  
  // 监听页面离开事件
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '您有未保存的修改，确定要离开吗？';
        return e.returnValue;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);
  
  // 快捷键支持
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl/Cmd + S: 保存
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (hasUnsavedChanges && !isSaving) {
          saveToLocal();
        }
      }
      // P: 切换预览模式
      if (e.key === 'p' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        // 只在没有输入框聚焦时响应
        const activeElement = document.activeElement;
        if (activeElement?.tagName !== 'INPUT' && activeElement?.tagName !== 'TEXTAREA') {
          setPreviewMode(prev => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [saveToLocal, resetToFactory, hasUnsavedChanges, isSaving]);

  // 应用预设模板
  const applyPreset = useCallback((preset: typeof layoutPresets.default) => {
    // 为所有断点生成布局
    const layouts = {
      // xl和lg使用预设的大屏布局
      xl: preset.lg,
      lg: preset.lg,
      
      // md使用预设的md布局，如果没有则生成
      md: preset.md || [
        { i: 'companies', x: 0, y: 0, w: 4, h: 10 },
        { i: 'customer', x: 4, y: 0, w: 4, h: 10 },
        { i: 'sales', x: 8, y: 0, w: 4, h: 10 },
        { i: 'assistant', x: 0, y: 10, w: 12, h: 5 },
      ],
      
      // sm断点：2列布局
      sm: [
        { i: 'companies', x: 0, y: 0, w: 3, h: 10 },    // 左上
        { i: 'customer', x: 3, y: 0, w: 3, h: 10 },     // 右上
        { i: 'sales', x: 0, y: 10, w: 3, h: 8 },        // 左下
        { i: 'assistant', x: 3, y: 10, w: 3, h: 8 },    // 右下
      ],
      
      // xs断点：单列堆叠
      xs: [
        { i: 'companies', x: 0, y: 0, w: 4, h: 6 },
        { i: 'customer', x: 0, y: 6, w: 4, h: 6 },
        { i: 'sales', x: 0, y: 12, w: 4, h: 6 },
        { i: 'assistant', x: 0, y: 18, w: 4, h: 6 },
      ],
    };
    
    // 确保所有断点都被包含
    const completeLayouts = ensureAllBreakpoints(layouts);
    setCurrentLayouts(completeLayouts);
    
    // 更新配置名称为对应的预设名称
    setConfigName(preset.name);
    setHasUnsavedChanges(true); // 标记为有未保存的修改
    message.info(`已应用模板：${preset.name}（未保存）`);
  }, []);

  const handleLayoutChange = useCallback((_current: Layout[], all: any) => {
    // all 可能只包含当前断点的更新，需要合并到现有布局中
    const mergedLayouts = {
      ...currentLayouts,  // 保留所有现有断点
      ...all              // 覆盖更新的断点
    };
    
    // 确保所有断点都存在
    const completeLayouts = ensureAllBreakpoints(mergedLayouts);
    
    setCurrentLayouts(completeLayouts);
    setHasUnsavedChanges(true); // 标记为有未保存的修改
    
    // 获取当前断点
    const bp = getCurrentBreakpoint();
    setCurrentBreakpoint(bp);
    
    console.log('布局已更新（未保存）:', {
      currentBreakpoint: bp,
      updatedBreakpoints: Object.keys(all),
      totalBreakpoints: Object.keys(completeLayouts)
    });
  }, [currentLayouts, getCurrentBreakpoint]);
  

  return (
    <Customer360Wrapper>
      <div className="config-layout-page">
        <PageHeader actions={pageHeaderActions} style={{
          marginBottom: 16,
        }}/>
      
      <div>
        <Card>
          <Title level={3}>布局配置编辑器</Title>
          <Paragraph>
            在此页面配置客户360的布局。拖拽编辑后，<Text strong>调整浏览器窗口大小</Text>可以查看不同断点的响应式效果。
            系统会自动保存所有断点（lg/md/sm/xs）的布局配置。
          </Paragraph>
          
          {hasLocalConfig && (
            <div style={{ 
              marginBottom: 16,
              padding: '8px 12px',
              background: '#f6ffed',
              border: '1px solid #b7eb8f',
              borderRadius: 4,
              display: 'inline-block'
            }}>
              <Text type="success">
                ✓ 当前使用本地保存的配置：{configName}
              </Text>
            </div>
          )}
          
          <Divider />
          
          {/* 当前配置和保存状态 */}
          <div style={{ marginBottom: 24 }}>
            <Space size="large" align="center" wrap>
              <Space>
                <Text strong>📝 当前配置：</Text>
                <Tag color="blue" style={{ fontSize: '14px' }}>
                  {configName}
                </Tag>
              </Space>
              
              <Space>
                <Text strong>📐 当前断点：</Text>
                <Tag color="green" style={{ fontSize: '14px' }}>
                  {currentBreakpoint} ({window.innerWidth}px)
                </Tag>
              </Space>
              
              {hasUnsavedChanges && (
                <Tag icon={<ExclamationCircleOutlined />} color="warning">
                  有未保存的修改
                </Tag>
              )}
              
              {isSaving && (
                <Tag icon={<SyncOutlined spin />} color="processing">
                  保存中...
                </Tag>
              )}
            </Space>
          </div>
          
          <Divider style={{ margin: '16px 0' }} />
          
          {/* 快速应用模板 */}
          <div style={{ marginBottom: 16 }}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <Text strong style={{ marginRight: 16 }}>🌟 快速应用：</Text>
                <Space wrap>
                  {Object.entries(layoutPresets).map(([key, preset]) => (
                    <Button
                      key={key}
                      icon={<AppstoreOutlined />}
                      onClick={() => applyPreset(preset)}
                    >
                      {preset.name}
                    </Button>
                  ))}
                </Space>
              </div>
              
              <div>
                <Text strong style={{ marginRight: 16 }}>🔧 操作：</Text>
                <Space wrap>
                  <Tooltip title="快捷键: Ctrl/Cmd + S">
                    <Button
                      type="primary"
                      icon={<CheckCircleOutlined />}
                      onClick={saveToLocal}
                      disabled={!hasUnsavedChanges || isSaving}
                      loading={isSaving}
                    >
                      保存配置
                    </Button>
                  </Tooltip>
                  
                  <Button
                    icon={<UndoOutlined />}
                    onClick={discardChanges}
                    disabled={!hasUnsavedChanges || isSaving}
                  >
                    放弃修改
                  </Button>
                  
                  <Tooltip title="快捷键: P">
                    <Button
                      icon={<EyeOutlined />}
                      onClick={() => setPreviewMode(!previewMode)}
                      type={previewMode ? 'default' : 'default'}
                    >
                      {previewMode ? '退出预览' : '预览效果'}
                    </Button>
                  </Tooltip>
                  
                  <Button icon={<UndoOutlined />} onClick={resetToFactory} danger>
                    恢复出厂设置
                  </Button>
                </Space>
              </div>
            </Space>
          </div>
        </Card>
        
        <Card style={{ marginTop: 24 }}>
          {!previewMode && (
            <div style={{ 
              padding: '12px 16px', 
              background: '#e6f7ff', 
              borderBottom: '1px solid #91d5ff',
              marginBottom: 16
            }}>
              <Space>
                <span style={{ color: '#1890ff' }}>💡 编辑模式：</span>
                <span>拖拽模块调整位置，拖拽边角调整大小</span>
                <span style={{ color: '#8c8c8c' }}>| 调整浏览器窗口大小可编辑不同断点</span>
              </Space>
            </div>
          )}
          {previewMode && (
            <div style={{ 
              padding: '12px 16px', 
              background: '#f6ffed', 
              borderBottom: '1px solid #b7eb8f',
              marginBottom: 16
            }}>
              <Space>
                <span style={{ color: '#52c41a' }}>👁 预览模式：</span>
                <span>当前为纯展示模式，无法编辑布局</span>
              </Space>
            </div>
          )}
          <AdminLayout
            modules={modules}
            layouts={currentLayouts || initialLayouts}
            developmentMode={!previewMode}
            productionMode={previewMode}
            isDraggable={!previewMode}
            isResizable={!previewMode}
            editable={!previewMode}
            onLayoutChange={handleLayoutChange}
          />
        </Card>
        
        {/* 使用说明 */}
        <Card style={{ marginTop: 24 }}>
          <Title level={4}>使用说明</Title>
          <ol>
            <li>拖拽模块调整位置，拖拽边角调整大小</li>
            <li><Text mark>调整浏览器窗口大小</Text>可以编辑不同断点的布局（lg/md/sm/xs）</li>
            <li>修改后需要点击"保存配置"按钮保存修改</li>
            <li>使用快速模板可以快速应用预设布局</li>
            <li>可以随时放弃修改，恢复到上次保存的配置</li>
          </ol>
          
          <Divider style={{ margin: '16px 0' }} />
          
          <Paragraph>
            <Text strong>⌨️ 快捷键：</Text>
          </Paragraph>
          <ul style={{ lineHeight: '1.8' }}>
            <li><Text code>P</Text> - 切换预览模式</li>
            <li><Text code>Ctrl/Cmd + S</Text> - 保存配置</li>
          </ul>
          
          <Divider style={{ margin: '16px 0' }} />
          
          <Paragraph type="secondary">
            <Text strong>📐 响应式断点：</Text>
            xl (≥ 1920px) | lg (≥ 1600px) | md (≥ 1200px) | sm (≥ 768px) | xs (&lt; 480px)
          </Paragraph>
        </Card>
        
        {/* 开发模式调试信息 */}
        {process.env.NODE_ENV === 'development' && (
          <Card style={{ marginTop: 24 }}>
            <Collapse>
              <Collapse.Panel header="🔧 断点调试信息" key="debug">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Alert
                    message={`当前断点: ${currentBreakpoint.toUpperCase()}`}
                    description={`窗口宽度: ${window.innerWidth}px`}
                    type="info"
                  />
                  
                  <div>
                    <Text strong>已配置的断点：</Text>
                    <div style={{ marginTop: 8 }}>
                      {SUPPORTED_BREAKPOINTS.map(bp => {
                        const hasConfig = currentLayouts && currentLayouts[bp];
                        return (
                          <Tag 
                            key={bp} 
                            color={hasConfig ? 'green' : 'default'}
                            style={{ marginRight: 8, marginBottom: 8 }}
                          >
                            {bp.toUpperCase()}: {hasConfig ? '✅ 已配置' : '⚠️ 使用默认'}
                          </Tag>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <Text strong>当前断点布局详情：</Text>
                    <pre style={{ 
                      marginTop: 8,
                      padding: 12,
                      background: '#f5f5f5',
                      borderRadius: 4,
                      overflow: 'auto',
                      maxHeight: 200
                    }}>
                      {JSON.stringify(currentLayouts?.[currentBreakpoint], null, 2)}
                    </pre>
                  </div>
                  
                  <div>
                    <Text strong>所有断点概览：</Text>
                    <pre style={{ 
                      marginTop: 8,
                      padding: 12,
                      background: '#f5f5f5',
                      borderRadius: 4,
                      overflow: 'auto',
                      maxHeight: 200
                    }}>
                      {JSON.stringify(
                        Object.keys(currentLayouts || {}).reduce((acc, bp) => {
                          acc[bp] = (currentLayouts[bp] || []).length + ' 个模块';
                          return acc;
                        }, {} as any),
                        null,
                        2
                      )}
                    </pre>
                  </div>
                </Space>
              </Collapse.Panel>
            </Collapse>
          </Card>
        )}
      </div>
    </div>
    </Customer360Wrapper>
  );
};

export default ConfigLayout;