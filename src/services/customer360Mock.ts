
export interface Company {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  totalAmount: number;
  totalAmountUnit: string;
  yearlyAmount: number;
  yearlyAmountUnit: string;
  status: 'active' | 'inactive' | 'potential';
  cooperationYears: number;
  lastContactDate: string;
}

export interface Contact {
  id: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  isPrimary: boolean;
}

export interface CustomerInfo {
  companyId: string;
  companyName: string;
  registrationNumber: string;
  legalRepresentative: string;
  registeredCapital: string;
  establishedDate: string;
  address: string;
  industry: string;
  businessScope: string;
  contacts: Contact[];
  tags: string[];
  riskLevel: 'low' | 'medium' | 'high';
}

export interface SalesOpportunity {
  id: string;
  title: string;
  code: string;
  amount: number;
  stage: 'lead' | 'contact' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  probability: number;
  expectedCloseDate: string;
  owner: string;
  createdDate: string;
  status: 'high' | 'medium' | 'low';
  tags: string[];
  description?: string;
}

export interface Order {
  id: string;
  orderNo: string;
  title: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdDate: string;
  deliveryDate?: string;
  paymentStatus: 'unpaid' | 'partial' | 'paid';
  type: 'product' | 'service';
}

export interface CustomerMetrics {
  totalCooperation: number;
  currentYearAmount: number;
  totalOrders: number;
  activeOpportunities: number;
  conversionRate: number;
  averageOrderValue: number;
  customerLifetimeValue: number;
  netPromoterScore: number;
}

const mockCompanies: Company[] = [
  {
    id: '1',
    name: '克力山海工程公司',
    industry: '工程建设',
    totalAmount: 4500,
    totalAmountUnit: '万元',
    yearlyAmount: 502,
    yearlyAmountUnit: '万元',
    status: 'active',
    cooperationYears: 5,
    lastContactDate: '2024-12-20',
  },
  {
    id: '2',
    name: '联合利华',
    industry: '快消品',
    totalAmount: 8800,
    totalAmountUnit: '万元',
    yearlyAmount: 1200,
    yearlyAmountUnit: '万元',
    status: 'active',
    cooperationYears: 8,
    lastContactDate: '2024-12-25',
  },
  {
    id: '3',
    name: '阿里云计算',
    industry: '云服务',
    totalAmount: 12000,
    totalAmountUnit: '万元',
    yearlyAmount: 3500,
    yearlyAmountUnit: '万元',
    status: 'active',
    cooperationYears: 3,
    lastContactDate: '2024-12-28',
  },
  {
    id: '4',
    name: '华为技术',
    industry: '通信设备',
    totalAmount: 15000,
    totalAmountUnit: '万元',
    yearlyAmount: 4200,
    yearlyAmountUnit: '万元',
    status: 'active',
    cooperationYears: 6,
    lastContactDate: '2024-12-22',
  },
  {
    id: '5',
    name: '美团点评',
    industry: '互联网服务',
    totalAmount: 6500,
    totalAmountUnit: '万元',
    yearlyAmount: 1800,
    yearlyAmountUnit: '万元',
    status: 'potential',
    cooperationYears: 2,
    lastContactDate: '2024-12-15',
  },
];

const mockCustomerInfoMap: Record<string, CustomerInfo> = {
  '1': {
    companyId: '1',
    companyName: '克力山海工程公司',
    registrationNumber: '123456789765443213',
    legalRepresentative: '张三',
    registeredCapital: '5000万元',
    establishedDate: '2015-06-10',
    address: '北京市朝阳区建国路88号',
    industry: '工程建设',
    businessScope: '建筑工程、市政工程、装饰装修工程施工',
    contacts: [
      {
        id: '1',
        name: '李四',
        position: '采购总监',
        phone: '13800138000',
        email: 'lisi@klsh.com',
        isPrimary: true,
      },
      {
        id: '2',
        name: '王五',
        position: '技术经理',
        phone: '13900139000',
        email: 'wangwu@klsh.com',
        isPrimary: false,
      },
    ],
    tags: ['战略客户', '长期合作', 'VIP'],
    riskLevel: 'low',
  },
  '2': {
    companyId: '2',
    companyName: '联合利华',
    registrationNumber: '987654321234567890',
    legalRepresentative: '陈明',
    registeredCapital: '10000万元',
    establishedDate: '1990-03-15',
    address: '上海市浦东新区世纪大道1000号',
    industry: '快消品',
    businessScope: '日用品制造、销售；食品生产、销售',
    contacts: [
      {
        id: '3',
        name: '赵六',
        position: '供应链总监',
        phone: '13700137000',
        email: 'zhaoliu@unilever.com',
        isPrimary: true,
      },
    ],
    tags: ['500强企业', '战略合作伙伴'],
    riskLevel: 'low',
  },
};

const mockOpportunitiesMap: Record<string, SalesOpportunity[]> = {
  '1': [
    {
      id: 'opp1',
      title: 'L00312号工程电缆替换工程',
      code: 'L00312',
      amount: 500,
      stage: 'proposal',
      probability: 70,
      expectedCloseDate: '2025-03-10',
      owner: '张英',
      createdDate: '2023-06-10',
      status: 'high',
      tags: ['高潜机会'],
      description: '预期合作金额：¥5,000,000',
    },
    {
      id: 'opp2',
      title: '舟山地铁2号线隧道照明',
      code: 'ZS-2023-06',
      amount: 800,
      stage: 'negotiation',
      probability: 85,
      expectedCloseDate: '2025-02-20',
      owner: '李明',
      createdDate: '2023-06-10',
      status: 'high',
      tags: ['待跟进'],
    },
    {
      id: 'opp3',
      title: '大同1号煤矿照明改造工程',
      code: 'DT-2023-05',
      amount: 1200,
      stage: 'contact',
      probability: 40,
      expectedCloseDate: '2025-05-15',
      owner: '王芳',
      createdDate: '2023-05-10',
      status: 'medium',
      tags: ['服务中', '已签约'],
    },
  ],
  '2': [
    {
      id: 'opp4',
      title: '2025年度供应链管理系统',
      code: 'UL-2025-01',
      amount: 2000,
      stage: 'proposal',
      probability: 60,
      expectedCloseDate: '2025-04-01',
      owner: '陈强',
      createdDate: '2024-11-20',
      status: 'high',
      tags: ['高潜机会', '重点跟进'],
    },
  ],
};

const mockOrdersMap: Record<string, Order[]> = {
  '1': [
    {
      id: 'ord1',
      orderNo: 'ORD202312001',
      title: '工程电缆采购订单',
      amount: 150,
      status: 'completed',
      createdDate: '2023-12-10',
      deliveryDate: '2024-01-15',
      paymentStatus: 'paid',
      type: 'product',
    },
    {
      id: 'ord2',
      orderNo: 'ORD202401002',
      title: '照明设备供应订单',
      amount: 280,
      status: 'processing',
      createdDate: '2024-01-20',
      deliveryDate: '2024-03-01',
      paymentStatus: 'partial',
      type: 'product',
    },
  ],
  '2': [
    {
      id: 'ord3',
      orderNo: 'ORD202312003',
      title: '供应链咨询服务',
      amount: 500,
      status: 'completed',
      createdDate: '2023-12-01',
      paymentStatus: 'paid',
      type: 'service',
    },
  ],
};

export class Customer360Service {
  static async getCompanies(params?: {
    search?: string;
    industry?: string;
    status?: string;
  }): Promise<Company[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    let companies = [...mockCompanies];
    
    if (params?.search) {
      companies = companies.filter(c =>
        c.name.toLowerCase().includes(params.search!.toLowerCase())
      );
    }
    
    if (params?.industry && params.industry !== 'all') {
      companies = companies.filter(c => c.industry === params.industry);
    }
    
    if (params?.status && params.status !== 'all') {
      companies = companies.filter(c => c.status === params.status);
    }
    
    return companies;
  }

  static async getCustomerInfo(companyId: string): Promise<CustomerInfo | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockCustomerInfoMap[companyId] || null;
  }

  static async getOpportunities(companyId: string): Promise<SalesOpportunity[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockOpportunitiesMap[companyId] || [];
  }

  static async getOrders(companyId: string): Promise<Order[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockOrdersMap[companyId] || [];
  }

  static async getCustomerMetrics(companyId: string): Promise<CustomerMetrics> {
    await new Promise(resolve => setTimeout(resolve, 150));
    
    const company = mockCompanies.find(c => c.id === companyId);
    const opportunities = mockOpportunitiesMap[companyId] || [];
    const orders = mockOrdersMap[companyId] || [];
    
    return {
      totalCooperation: company?.totalAmount || 0,
      currentYearAmount: company?.yearlyAmount || 0,
      totalOrders: orders.length,
      activeOpportunities: opportunities.filter(o => o.stage !== 'closed-lost').length,
      conversionRate: 68.5,
      averageOrderValue: orders.length > 0 
        ? orders.reduce((sum, o) => sum + o.amount, 0) / orders.length
        : 0,
      customerLifetimeValue: (company?.totalAmount || 0) * 10000,
      netPromoterScore: 8.5,
    };
  }

  static async getOpportunityDetail(opportunityId: string): Promise<SalesOpportunity | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    for (const opportunities of Object.values(mockOpportunitiesMap)) {
      const found = opportunities.find(o => o.id === opportunityId);
      if (found) return found;
    }
    
    return null;
  }
}