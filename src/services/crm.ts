// CRM 数据聚合服务（前端聚合，不新增后端接口）
// 说明：仅用于访问 dbapi 接口做聚合与数据整形；按规范使用 @yuntoo/fetch
import { ytFetch } from "@/apis/fetch";

export type CrmListParams = {
  currentPage?: number;
  pageSize?: number;
  [key: string]: any;
};

export type CrmPaging = {
  pageSize?: number;
  totalCount?: number;
  currentPage?: number;
};

export type CrmListResult<T> = {
  tableData: T[];
  paging?: CrmPaging;
};

const API_BASE = "https://api.yuntooai.com";
const APP_BASE = "/dbapi/runtime/yuntoo/app-f4c03acb";

// CRM 各模块 pathId（更新后的接口配置）
export const CRM_PATHS = {
  customers: "6c6c94a6ef064fe898cfa895fe5a38f5",        // 客户信息列表
  contacts: "85caff150d70457c96c50faa8919688f",         // 客户联系人列表
  customerLevels: "7e8ea79ccbc64f48accf81e153806a53",   // 客户等级列表
  opportunities: "fb9dc0425f6f49ccace599b69194a3bc",    // 商业机会列表
  visitRecords: "7b7ec310256248d3a720d9e613bd3f31",     // 客户拜访记录列表
  salesStaff: "faff250163f345668947ea4e1ff50cda",       // 销售员工列表
  products: "b0a8936ffd2542499da5a165a09cc078",         // 产品信息列表
  salesLeads: "9c1bfbd319174461b6b58d19d7bf040f",       // 销售线索管理列表
} as const;

type CrmModuleKey = keyof typeof CRM_PATHS;

async function postJson<T>(url: string, body: any): Promise<T> {
  // 使用 @yuntoo/fetch 统一请求
  return ytFetch.post(url, body) as unknown as Promise<T>;
}

async function postList<T>(pathId: string, params: CrmListParams = {}, useSmartApi = false): Promise<CrmListResult<T>> {
  const { currentPage = 1, pageSize = 100, ...rest } = params || {};
  const body = { pageSize, currentPage, ...rest };
  
  // 根据不同的API类型构建URL
  const apiPath = useSmartApi 
    ? `/smartapi/runtime/yuntoo/app-f4c03acb/${pathId}/getList`
    : `${APP_BASE}/${pathId}/getList`;
  
  // ytFetch.post 返回的直接就是 response.data 对象
  const data: any = await postJson(`${API_BASE}${apiPath}`, body);
  
  // data 已经是 response.data，直接访问 tableData 和 paging
  return {
    tableData: data?.tableData || [],
    paging: data?.paging,
  };
}

export const crmService = {
  getListByModule<T = any>(moduleKey: CrmModuleKey, params?: CrmListParams) {
    const pathId = CRM_PATHS[moduleKey];
    return postList<T>(pathId, params);
  },

  // 原有接口方法（更新后的pathId）
  getCustomersList<T = any>(params?: CrmListParams) {
    return postList<T>(CRM_PATHS.customers, params);
  },
  getContactsList<T = any>(params?: CrmListParams) {
    return postList<T>(CRM_PATHS.contacts, params);
  },
  getOpportunitiesList<T = any>(params?: CrmListParams) {
    return postList<T>(CRM_PATHS.opportunities, params);
  },
  
  // 新增接口方法
  getCustomerLevelsList<T = any>(params?: CrmListParams) {
    return postList<T>(CRM_PATHS.customerLevels, params);
  },
  getVisitRecordsList<T = any>(params?: CrmListParams) {
    return postList<T>(CRM_PATHS.visitRecords, params);
  },
  getSalesStaffList<T = any>(params?: CrmListParams) {
    return postList<T>(CRM_PATHS.salesStaff, params);
  },
  getProductsList<T = any>(params?: CrmListParams) {
    return postList<T>(CRM_PATHS.products, params);
  },
  getSalesLeadsList<T = any>(params?: CrmListParams) {
    return postList<T>(CRM_PATHS.salesLeads, params, true); // 使用smartapi
  },
  

  // 概览聚合：并发拉取各模块列表，返回 totals 与简表
  async getOverview(params: CrmListParams = { currentPage: 1, pageSize: 100 }) {
    const keys: CrmModuleKey[] = [
      "customers",
      "opportunities",
      "contacts",
      "customerLevels",
      "visitRecords",
      "salesStaff",
      "products",
      "salesLeads",
    ];

    const errors: string[] = [];
    const results = await Promise.all(
      keys.map(async (key) => {
        try {
          // salesLeads需要使用smartapi
          const useSmartApi = key === "salesLeads";
          const { tableData, paging } = await postList(CRM_PATHS[key], params, useSmartApi);
          const total = paging?.totalCount ?? tableData.length;
          console.log(`✅ ${key} 成功加载:`, { 
            数据条数: tableData.length, 
            总数: total,
            首条数据: tableData[0] 
          });
          return { key, list: tableData, total };
        } catch (e: any) {
          console.error(`❌ ${key} 加载失败:`, e?.message || e);
          errors.push(`${key}: ${e?.message || '未知错误'}`);
          return { key, list: [], total: 0 };
        }
      })
    );

    const totals: Record<string, number> = {};
    const lists: Record<string, any[]> = {};
    results.forEach((r) => {
      totals[r.key] = r.total;
      lists[r.key] = r.list;
    });

    // 如果有错误，抛出详细信息
    if (errors.length > 0) {
      console.warn('部分模块加载失败:', errors.join('; '));
    }

    return { totals, lists, errors };
  },
};


