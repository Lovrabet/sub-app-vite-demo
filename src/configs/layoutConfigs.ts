/**
 * 统一的布局配置
 * 所有使用客户360布局的页面都应该引用此配置
 */

// 支持的所有断点
export const SUPPORTED_BREAKPOINTS = ['xl', 'lg', 'md', 'sm', 'xs'];

// 预设布局模板
export const layoutPresets = {
  default: {
    name: '标准布局',
    // 大屏4列布局
    lg: [
      { i: 'companies', x: 0, y: 0, w: 2, h: 12 },
      { i: 'customer', x: 2, y: 0, w: 3, h: 12 },
      { i: 'sales', x: 5, y: 0, w: 4, h: 12 },
      { i: 'assistant', x: 9, y: 0, w: 3, h: 12 },
    ],
    // MD断点3列布局
    md: [
      { i: 'companies', x: 0, y: 0, w: 4, h: 10 },
      { i: 'customer', x: 4, y: 0, w: 4, h: 10 },
      { i: 'sales', x: 8, y: 0, w: 4, h: 10 },
      { i: 'assistant', x: 0, y: 10, w: 12, h: 5 },
    ],
  },
  balanced: {
    name: '均衡布局',
    // 大屏4列均分
    lg: [
      { i: 'companies', x: 0, y: 0, w: 3, h: 12 },
      { i: 'customer', x: 3, y: 0, w: 3, h: 12 },
      { i: 'sales', x: 6, y: 0, w: 3, h: 12 },
      { i: 'assistant', x: 9, y: 0, w: 3, h: 12 },
    ],
    // MD断点3列均分
    md: [
      { i: 'companies', x: 0, y: 0, w: 4, h: 10 },
      { i: 'customer', x: 4, y: 0, w: 4, h: 10 },
      { i: 'sales', x: 8, y: 0, w: 4, h: 10 },
      { i: 'assistant', x: 0, y: 10, w: 12, h: 5 },
    ],
  },
  salesFocus: {
    name: '销售优先',
    // 大屏销售占比更大
    lg: [
      { i: 'companies', x: 0, y: 0, w: 2, h: 12 },
      { i: 'customer', x: 2, y: 0, w: 2, h: 12 },
      { i: 'sales', x: 4, y: 0, w: 5, h: 12 },
      { i: 'assistant', x: 9, y: 0, w: 3, h: 12 },
    ],
    // MD断点销售更宽
    md: [
      { i: 'companies', x: 0, y: 0, w: 3, h: 10 },
      { i: 'customer', x: 3, y: 0, w: 3, h: 10 },
      { i: 'sales', x: 6, y: 0, w: 6, h: 10 },
      { i: 'assistant', x: 0, y: 10, w: 12, h: 5 },
    ],
  },
  customerFocus: {
    name: '客户优先',
    // 大屏客户占比更大
    lg: [
      { i: 'companies', x: 0, y: 0, w: 2, h: 12 },
      { i: 'customer', x: 2, y: 0, w: 4, h: 12 },
      { i: 'sales', x: 6, y: 0, w: 3, h: 12 },
      { i: 'assistant', x: 9, y: 0, w: 3, h: 12 },
    ],
    // MD断点客户更宽
    md: [
      { i: 'companies', x: 0, y: 0, w: 3, h: 10 },
      { i: 'customer', x: 3, y: 0, w: 4, h: 10 },
      { i: 'sales', x: 7, y: 0, w: 5, h: 10 },
      { i: 'assistant', x: 0, y: 10, w: 12, h: 5 },
    ],
  },
};

// 默认初始布局 - 包含所有断点
export const defaultInitialLayouts = {
  // xl断点（≥1920px）：舒适4列布局
  xl: layoutPresets.default.lg,
  
  // lg断点（1600-1920px）：紧凑4列布局
  lg: layoutPresets.default.lg,
  
  // md断点（1200-1600px）：3列布局 + 底部助手
  md: [
    { i: 'companies', x: 0, y: 0, w: 4, h: 10 },   // 1/3宽度
    { i: 'customer', x: 4, y: 0, w: 4, h: 10 },    // 1/3宽度
    { i: 'sales', x: 8, y: 0, w: 4, h: 10 },       // 1/3宽度
    { i: 'assistant', x: 0, y: 10, w: 12, h: 5 },  // 底部全宽
  ],
  
  // sm断点（768-1200px）：2列布局（总共6列网格）
  sm: [
    { i: 'companies', x: 0, y: 0, w: 3, h: 10 },    // 左上（50%宽度）
    { i: 'customer', x: 3, y: 0, w: 3, h: 10 },     // 右上（50%宽度）
    { i: 'sales', x: 0, y: 10, w: 3, h: 8 },        // 左下（50%宽度）
    { i: 'assistant', x: 3, y: 10, w: 3, h: 8 },    // 右下（50%宽度）
  ],
  
  // xs断点（<768px）：单列堆叠
  xs: [
    { i: 'companies', x: 0, y: 0, w: 4, h: 6 },
    { i: 'customer', x: 0, y: 6, w: 4, h: 6 },
    { i: 'sales', x: 0, y: 12, w: 4, h: 6 },
    { i: 'assistant', x: 0, y: 18, w: 4, h: 6 },
  ],
};

// 确保所有断点都有布局配置
export const ensureAllBreakpoints = (layouts: any) => {
  const completeLayouts: any = {};
  
  SUPPORTED_BREAKPOINTS.forEach(bp => {
    if (layouts && layouts[bp]) {
      completeLayouts[bp] = layouts[bp];
    } else {
      // 如果缺少某个断点，从默认布局中获取
      completeLayouts[bp] = defaultInitialLayouts[bp as keyof typeof defaultInitialLayouts];
      console.warn(`Missing breakpoint '${bp}', using default layout`);
    }
  });
  
  return completeLayouts;
};

// 验证布局的完整性
export const validateLayouts = (layouts: any) => {
  if (!layouts) return false;
  
  const hasAllBreakpoints = SUPPORTED_BREAKPOINTS.every(bp => 
    layouts[bp] && Array.isArray(layouts[bp]) && layouts[bp].length > 0
  );
  
  return hasAllBreakpoints;
};

// 获取当前断点
export const getCurrentBreakpoint = () => {
  const width = window.innerWidth;
  if (width >= 1920) return 'xl';
  else if (width >= 1600) return 'lg';
  else if (width >= 1200) return 'md';
  else if (width >= 768) return 'sm';
  return 'xs';
};

// 存储键名
export const STORAGE_KEYS = {
  CONFIG_LAYOUT: 'customer360_layout_config',
  DISPLAY_LAYOUT: 'customer360_layouts',
};