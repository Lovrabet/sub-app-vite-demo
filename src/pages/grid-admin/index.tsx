import React from 'react'
import { withLayout, createResponsiveLayout } from '@/components/layout/withLayout'
import { SearchModule, ActionsModule, TableModule, SidebarModule, PaginationModule } from './AdminModules'



// 管理后台布局配置
const adminLayouts = createResponsiveLayout({
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
})

// 管理后台页面配置
const adminConfig = {
  mode: 'development' as const,
  title: '数据管理后台',
  description: '基于网格布局的标准管理后台页面',
  
  modules: [
    { key: 'search', title: '搜索筛选', component: <SearchModule /> },
    { key: 'actions', title: '操作区域', component: <ActionsModule /> },
    { key: 'table', title: '数据表格', component: <TableModule /> },
    { key: 'sidebar', title: '侧边栏', component: <SidebarModule /> },
    { key: 'pagination', title: '分页', component: <PaginationModule /> },
  ],
  
  layouts: adminLayouts,
  
  onLayoutChange: (currentLayout, allLayouts) => {
    console.log('管理后台布局变更:', { currentLayout, allLayouts })
    // 可以保存到本地存储或发送到服务器
    localStorage.setItem('adminLayout', JSON.stringify(allLayouts))
  },
}

// 使用 withLayout 创建页面
export default withLayout(adminConfig) 