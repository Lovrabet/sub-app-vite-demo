'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { Responsive, WidthProvider, Layout } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import './gridLayout.css'
import { Button, Card, Col, Form, Grid, Input, Pagination, Row, Select, Space, Statistic, Table, Tag } from 'antd'

const ResponsiveGridLayout = WidthProvider(Responsive)
const { useBreakpoint } = Grid

// B端页面常见模块
interface LayoutModule {
  key: string
  title: string
  component: React.ReactNode
}

interface AdminLayoutProps {
  modules?: LayoutModule[]
  layouts?: { [key: string]: Layout[] }
  onLayoutChange?: (currentLayout: Layout[], allLayouts: { [key: string]: Layout[] }) => void
  editable?: boolean        // 是否可编辑
  isDraggable?: boolean      // 是否可拖拽（由外部控制）
  isResizable?: boolean      // 是否可调整大小（由外部控制）
  developmentMode?: boolean  // 开发模式：显示模块边框
  productionMode?: boolean   // 生产模式：隐藏边框
}

// 默认布局配置
const defaultLayouts = {
  lg: [
    { i: 'search', x: 0, y: 0, w: 12, h: 2, minH: 1, maxH: 3 },
    { i: 'actions', x: 0, y: 2, w: 12, h: 1, minH: 1, maxH: 2 },
    { i: 'table', x: 0, y: 3, w: 9, h: 8, minH: 4, minW: 6 },
    { i: 'sidebar', x: 9, y: 3, w: 3, h: 8, minH: 4, minW: 2 },
    { i: 'pagination', x: 0, y: 11, w: 12, h: 1, minH: 1, maxH: 2 },
  ],
  md: [
    { i: 'search', x: 0, y: 0, w: 10, h: 2 },
    { i: 'actions', x: 0, y: 2, w: 10, h: 1 },
    { i: 'table', x: 0, y: 3, w: 10, h: 8 },
    { i: 'sidebar', x: 0, y: 11, w: 10, h: 4 },
    { i: 'pagination', x: 0, y: 15, w: 10, h: 1 },
  ],
  sm: [
    { i: 'search', x: 0, y: 0, w: 6, h: 2 },
    { i: 'actions', x: 0, y: 2, w: 6, h: 1 },
    { i: 'table', x: 0, y: 3, w: 6, h: 8 },
    { i: 'sidebar', x: 0, y: 11, w: 6, h: 4 },
    { i: 'pagination', x: 0, y: 15, w: 6, h: 1 },
  ],
  xs: [
    { i: 'search', x: 0, y: 0, w: 4, h: 2 },
    { i: 'actions', x: 0, y: 2, w: 4, h: 1 },
    { i: 'table', x: 0, y: 3, w: 4, h: 8 },
    { i: 'sidebar', x: 0, y: 11, w: 4, h: 4 },
    { i: 'pagination', x: 0, y: 15, w: 4, h: 1 },
  ],
}

// 默认模块组件（AntD 实现）
const SearchModule: React.FC = () => {
  const screens = useBreakpoint()
  const isMd = screens.md
  return (
    <div className="module-content">
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={10}>
            <Input 
              id="grid-search"
              placeholder="搜索关键词..." 
              allowClear 
              size={isMd ? 'middle' : 'large'} 
            />
          </Col>
          <Col xs={24} md={6}>
            <Select
              id="grid-category"
              placeholder="全部分类"
              style={{ width: '100%' }}
              options={[
                { label: '全部分类', value: '' },
                { label: '分类A', value: 'A' },
                { label: '分类B', value: 'B' },
              ]}
              allowClear
              size={isMd ? 'middle' : 'large'}
            />
          </Col>
          <Col xs={24} md={8}>
            <Space wrap>
              <Button type="primary" size={isMd ? 'middle' : 'large'}>搜索</Button>
              <Button size={isMd ? 'middle' : 'large'}>重置</Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

const ActionsModule: React.FC = () => (
  <div className="module-content">
    <Space wrap>
      <Button type="primary" ghost>新增</Button>
      <Button>批量编辑</Button>
      <Button danger>批量删除</Button>
      <Button>导出数据</Button>
    </Space>
  </div>
)

const TableModule: React.FC = () => {
  const data = Array.from({ length: 10 }, (_, i) => ({
    key: i,
    id: 1001 + i,
    name: `项目 ${i + 1}`,
    category: `分类 ${(i % 3) + 1}`,
    status: i % 2 === 0 ? '正常' : '待审核',
    createdAt: `2024-01-${String(i + 1).padStart(2, '0')}`,
  }))

  const columns = [
    { title: 'ID', dataIndex: 'id', width: 80, responsive: ['xs','sm','md','lg'] },
    { title: '名称', dataIndex: 'name', responsive: ['xs','sm','md','lg'] },
    { title: '分类', dataIndex: 'category', responsive: ['sm','md','lg'] },
    { title: '状态', dataIndex: 'status', responsive: ['md','lg'], render: (s: string) => (
      <Tag color={s === '正常' ? 'green' : 'gold'}>{s}</Tag>
    ) },
    { title: '创建时间', dataIndex: 'createdAt', responsive: ['lg'] },
    { title: '操作', key: 'action', width: 140, responsive: ['xs','sm','md','lg'], render: () => (
      <Space>
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ) },
  ]

  return (
    <div className="module-content">
      <div className="module-title">数据表格</div>
      <Table columns={columns as any} dataSource={data} pagination={false} scroll={{ x: true }} />
    </div>
  )
}

const SidebarModule: React.FC = () => (
  <div className="module-content">
    <div className="module-title">侧边栏</div>
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic title="总项目数" value={1234} />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic title="正常项目" value={456} valueStyle={{ color: '#52c41a' }} />
          </Card>
        </Col>
        <Col xs={24}>
          <Card>
            <Statistic title="待审核" value={78} valueStyle={{ color: '#faad14' }} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={8}><Button block>数据导入</Button></Col>
        <Col span={8}><Button block>模板下载</Button></Col>
        <Col span={8}><Button block>系统设置</Button></Col>
      </Row>
    </Space>
  </div>
)

const PaginationModule: React.FC = () => (
  <div className="module-content">
    <Row align="middle" justify="space-between" style={{ width: '100%' }}>
      <Col flex="none">显示第 1-10 条，共 100 条记录</Col>
      <Col>
        <Pagination current={1} total={100} pageSize={10} simple />
      </Col>
    </Row>
  </div>
)

// 默认模块配置
const defaultModules: LayoutModule[] = [
  { key: 'search', title: '搜索筛选', component: <SearchModule /> },
  { key: 'actions', title: '操作区域', component: <ActionsModule /> },
  { key: 'table', title: '数据表格', component: <TableModule /> },
  { key: 'sidebar', title: '侧边栏', component: <SidebarModule /> },
  { key: 'pagination', title: '分页', component: <PaginationModule /> },
]

const AdminLayout: React.FC<AdminLayoutProps> = ({
  modules = defaultModules,
  layouts = defaultLayouts,
  onLayoutChange,
  editable = true,
  isDraggable,
  isResizable,
  developmentMode = false,
  productionMode = false,
}) => {
  const [currentLayouts, setCurrentLayouts] = useState(layouts)
  
  // 监听外部 layouts prop 的变化
  useEffect(() => {
    setCurrentLayouts(layouts)
  }, [layouts])
  
  // 确定实际的拖拽和调整大小能力
  const canDrag = isDraggable !== undefined ? isDraggable : (productionMode ? false : editable)
  const canResize = isResizable !== undefined ? isResizable : (productionMode ? false : editable)
  
  // 确定样式类名 - 使用 developmentMode 和 productionMode
  const layoutClassName = productionMode ? 'production-mode' : (developmentMode ? 'development-mode' : 'default-mode')

  // 使用 useMemo 优化性能
  const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), [])

  const handleLayoutChange = (currentLayout: Layout[], allLayouts: { [key: string]: Layout[] }) => {
    // 合并当前布局和新的更改，确保不丢失任何断点
    const completeLayouts = { ...currentLayouts };
    
    // 更新变化的断点
    Object.keys(allLayouts).forEach(bp => {
      if (allLayouts[bp]) {
        completeLayouts[bp] = allLayouts[bp];
      }
    });
    
    setCurrentLayouts(completeLayouts)
    onLayoutChange?.(currentLayout, completeLayouts)
  }

  return (
    <div className={`admin-layout ${layoutClassName}`}>
      <div className="layout-content">
        <ResponsiveReactGridLayout
          className="layout"
          layouts={currentLayouts}
          breakpoints={{ xl: 1920, lg: 1600, md: 1200, sm: 768, xs: 480 }}
          cols={{ xl: 12, lg: 12, md: 12, sm: 6, xs: 4 }}
          rowHeight={60}
          isDraggable={canDrag}
          isResizable={canResize}
          onLayoutChange={handleLayoutChange}
          margin={[16, 16]}
          containerPadding={[0, 0]}
        >
          {modules.map((module) => (
            <div key={module.key} className="layout-item" data-module={module.key}>
              {module.component}
            </div>
          ))}
        </ResponsiveReactGridLayout>
      </div>
    </div>
  )
}

export default AdminLayout