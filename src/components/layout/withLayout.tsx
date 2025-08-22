'use client'

import React from 'react'
import AdminLayout from '@/components/layout/gridLayout'
import { Layout } from 'react-grid-layout'

// 页面配置接口
export interface PageConfig {
  // 布局模式
  mode?: 'development' | 'production' | 'auto'
  
  // 页面信息
  title?: string
  description?: string
  
  // 布局配置
  modules: Array<{
    key: string
    title: string
    component: React.ReactNode
  }>
  
  layouts: { [key: string]: Layout[] }
  
  // 布局选项
  editable?: boolean
  
  // 自定义导航栏
  navigation?: React.ReactNode
  
  // 页面级样式类名
  className?: string
  
  // 布局变更回调
  onLayoutChange?: (currentLayout: Layout[], allLayouts: { [key: string]: Layout[] }) => void
}

// 页面组件类型
export type PageComponent = React.ComponentType<any>

// withLayout 高阶函数
export function withLayout(config: PageConfig, PageContent?: PageComponent) {
  return function WrappedPage(props: any) {
    // 确定布局模式
    const currentMode = import.meta.env.MODE
    const isDevelopment = config.mode === 'development' || 
                         (config.mode === 'auto' && currentMode === 'development')
    const isProduction = config.mode === 'production' || 
                        (config.mode === 'auto' && currentMode === 'production')
    
    return (
      <div className={config.className}>
        {/* 自定义导航栏 */}
        {config.navigation}
        
        {/* 页面标题区域（仅开发模式显示） */}
        {isDevelopment && (config.title || config.description) && (
          <div className="bg-white border-b px-6 py-4">
            {config.title && (
              <h1 className="text-2xl font-bold text-gray-900">{config.title}</h1>
            )}
            {config.description && (
              <p className="text-gray-600 mt-1">{config.description}</p>
            )}
          </div>
        )}
        
        {/* 页面内容组件 */}
        {PageContent && <PageContent {...props} />}
        
        {/* 布局系统 */}
        <AdminLayout
          modules={config.modules}
          layouts={config.layouts}
          developmentMode={isDevelopment}
          productionMode={isProduction}
          editable={config.editable}
          onLayoutChange={config.onLayoutChange}
        />
      </div>
    )
  }
}

// 常用布局工具函数
export const createResponsiveLayout = (
  layouts: { xl?: any[], lg?: any[], md?: any[], sm?: any[], xs?: any[] }
) => {
  return {
    xl: layouts.xl || layouts.lg || [],
    lg: layouts.lg || [],
    md: layouts.md || layouts.lg || [],
    sm: layouts.sm || layouts.md || layouts.lg || [],
    xs: layouts.xs || layouts.sm || layouts.md || layouts.lg || [],
  }
}

// 便捷创建函数
export const createPage = withLayout

// 导出类型
export type { Layout } from 'react-grid-layout'