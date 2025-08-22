import { crmService, CRM_PATHS, type CrmListParams, type CrmListResult } from "@/services/crm";

// 对外暴露 API（页面层 await 调用）
export const crmAPI = {
  // 核心列表查询（更新后的接口）
  getCustomersList(params?: CrmListParams) {
    return crmService.getCustomersList(params);
  },
  getContactsList(params?: CrmListParams) {
    return crmService.getContactsList(params);
  },
  getOpportunitiesList(params?: CrmListParams) {
    return crmService.getOpportunitiesList(params);
  },
  
  // 新增接口
  getCustomerLevelsList(params?: CrmListParams) {
    return crmService.getCustomerLevelsList(params);
  },
  getVisitRecordsList(params?: CrmListParams) {
    return crmService.getVisitRecordsList(params);
  },
  getSalesStaffList(params?: CrmListParams) {
    return crmService.getSalesStaffList(params);
  },
  getProductsList(params?: CrmListParams) {
    return crmService.getProductsList(params);
  },
  getSalesLeadsList(params?: CrmListParams) {
    return crmService.getSalesLeadsList(params);
  },
  

  // 概览聚合
  getOverview(params?: CrmListParams) {
    return crmService.getOverview(params);
  },
};

// 兼容占位导出，防止外部已有引用报错（如有）
export type { CrmListParams, CrmListResult };
export { CRM_PATHS };