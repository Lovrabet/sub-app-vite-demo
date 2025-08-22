import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  Typography,
  Row,
  Col,
  Card,
  Statistic,
  Table,
  Tag,
  Space,
  Button,
  Alert,
  Skeleton,
  List,
  message,
} from "antd";
import {
  ReloadOutlined,
  FundProjectionScreenOutlined,
  TeamOutlined,
  PhoneOutlined,
  ShoppingOutlined,
  UserOutlined,
  TrophyOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import ReactECharts from "echarts-for-react";
import { crmAPI } from "@/apis";
import {
  PageHeader,
  type PageHeaderAction,
} from "@/components";
import { useNavigate } from "react-router";

const { Title, Paragraph } = Typography;

type ApiPaging = {
  pageSize?: number;
  totalCount?: number;
  currentPage?: number;
};

type AnyRecord = Record<string, any>;

type ApiListResponse = {
  success: boolean;
  msg?: string;
  errorMsg?: string;
  errorCode?: string | number;
  data?: {
    tableData?: AnyRecord[];
    paging?: ApiPaging;
  };
};

type ModuleConfig = {
  key: string;
  name: string;
  icon?: React.ReactNode;
  pathId: string;
};

const API_BASE_URL = "https://api.yuntooai.com";
const APP_BASE_PATH = "/dbapi/runtime/yuntoo/app-f4c03acb";

// 页面跳转映射（更新为新的应用ID）
const PAGE_URLS = {
  customers: "https://app-f4c03acb.app.yuntooai.com/7dc745de5743411cac8b793ba282dc65", // 客户信息列表
  contacts: "https://app-f4c03acb.app.yuntooai.com/178abec10b174198b7d4312d1876abfc", // 客户联系人列表
  customerLevel: "https://app-f4c03acb.app.yuntooai.com/8524d1b812644a09be203ffbc74b7bdc", // 客户等级列表
  opportunities: "https://app-f4c03acb.app.yuntooai.com/c7e493c8c4dd43b5bcc8dbc48c64ccb4", // 商业机会列表
  visitRecords: "https://app-f4c03acb.app.yuntooai.com/f7d73b18266744749ab7421aa0c38bdc", // 客户拜访记录列表
  salesStaff: "https://app-f4c03acb.app.yuntooai.com/fe36a5eb38344bc79f886c6d82f256b8", // 销售员工列表
  products: "https://app-f4c03acb.app.yuntooai.com/524733dfca8e42cd964f51c6fe529299", // 产品信息列表
  salesLeads: "https://app-f4c03acb.app.yuntooai.com/ccec575ce92b471999c104e482279909", // 销售线索管理列表
};

const MODULES: ModuleConfig[] = [
  {
    key: "customers",
    name: "客户",
    icon: <TeamOutlined />,
    pathId: "6c6c94a6ef064fe898cfa895fe5a38f5",
  },
  {
    key: "opportunities",
    name: "商机/机会",
    icon: <FundProjectionScreenOutlined />,
    pathId: "fb9dc0425f6f49ccace599b69194a3bc",
  },
  {
    key: "contacts",
    name: "联系人",
    icon: <UserOutlined />,
    pathId: "85caff150d70457c96c50faa8919688f",
  },
  {
    key: "customerLevels",
    name: "客户等级",
    icon: <TrophyOutlined />,
    pathId: "7e8ea79ccbc64f48accf81e153806a53",
  },
  {
    key: "visitRecords",
    name: "拜访记录",
    icon: <EnvironmentOutlined />,
    pathId: "7b7ec310256248d3a720d9e613bd3f31",
  },
  {
    key: "salesStaff",
    name: "销售团队",
    icon: <TeamOutlined />,
    pathId: "faff250163f345668947ea4e1ff50cda",
  },
  {
    key: "products",
    name: "产品",
    icon: <ShoppingOutlined />,
    pathId: "b0a8936ffd2542499da5a165a09cc078",
  },
  {
    key: "salesLeads",
    name: "销售线索",
    icon: <PhoneOutlined />,
    pathId: "9c1bfbd319174461b6b58d19d7bf040f",
  },
];

// 跳转到外部页面
const navigateToPage = (pageKey: keyof typeof PAGE_URLS) => {
  const url = PAGE_URLS[pageKey];
  if (url) {
    window.open(url, "_blank");
  } else {
    message.warning("页面地址未配置");
  }
};

const loaderMap: Record<string, (p?: any) => Promise<{ tableData: AnyRecord[]; paging?: any }>> = {
  customers: (p) => crmAPI.getCustomersList(p),
  opportunities: (p) => crmAPI.getOpportunitiesList(p),
  contacts: (p) => crmAPI.getContactsList(p),
  customerLevels: (p) => crmAPI.getCustomerLevelsList(p),
  visitRecords: (p) => crmAPI.getVisitRecordsList(p),
  salesStaff: (p) => crmAPI.getSalesStaffList(p),
  products: (p) => crmAPI.getProductsList(p),
  salesLeads: (p) => crmAPI.getSalesLeadsList(p),
};

function formatDate(value?: number | string): string {
  if (!value) return "-";
  try {
    const d = new Date(typeof value === "number" ? value : Number(value));
    if (Number.isNaN(d.getTime())) return "-";
    return new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(d);
  } catch (e) {
    return "-";
  }
}

const CrmDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [moduleTotals, setModuleTotals] = useState<Record<string, number>>({});
  const [opportunityRows, setOpportunityRows] = useState<AnyRecord[]>([]);
  const [quickLists, setQuickLists] = useState<Record<string, AnyRecord[]>>({});
  const [apiErrors, setApiErrors] = useState<string[]>([]);
  const loadingRef = useRef(false); // 添加加载锁，防止重复加载

  // 图表数据名称到页面key的映射
  const chartNameToPageKey: Record<string, keyof typeof PAGE_URLS> = {
    "商机": "opportunities",
    "成交客户": "customers",
    "客户": "customers",
    "联系人": "contacts",
    "方案/报价": "opportunities",
    "谈判": "opportunities",
    "客户等级": "customerLevel",
    "拜访记录": "visitRecords",
    "销售团队": "salesStaff",
    "产品": "products",
    "潜在客户": "customers"
  };

  const loadData = async () => {
    // 防止重复加载
    if (loadingRef.current) {
      console.log('⚠️ 阻止重复加载数据');
      return;
    }
    loadingRef.current = true;
    
    setLoading(true);
    setError(null);
    setApiErrors([]);
    try {
      const { totals, lists, errors } = await crmAPI.getOverview({ currentPage: 1, pageSize: 100 }) as any;
      setModuleTotals(totals);
      setQuickLists(lists as any);
      setOpportunityRows((lists as any)["opportunities"] || []);
      
      // 显示API错误
      if (errors && errors.length > 0) {
        setApiErrors(errors);
      }
      
      // 在控制台打印统计信息
      const totalRecords = Object.values(totals).reduce((a: number, b: number) => a + b, 0);
      console.log(`📊 CRM Dashboard 加载完成: 总计${totalRecords}条记录`);
      console.table(totals);
    } catch (e: any) {
      setError(e?.message || "加载失败");
      console.error('加载失败:', e);
    } finally {
      setLoading(false);
      // 不重置loadingRef，确保只加载一次
      // 如果需要手动刷新，可以提供一个专门的刷新函数
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const kpiCards = useMemo(() => {
    const oppToCustomerRate = moduleTotals["opportunities"] > 0
      ? ((moduleTotals["customers"] / moduleTotals["opportunities"]) * 100).toFixed(1) 
      : "0";
      
    return [
      {
        title: "客户信息总数",
        value: moduleTotals["customers"] ?? 0,
        icon: <TeamOutlined style={{ fontSize: 24 }} />,
        suffix: moduleTotals["visitRecords"] > 0 ? `拜访 ${moduleTotals["visitRecords"]} 次` : "",
        pageKey: "customers" as keyof typeof PAGE_URLS,
      },
      {
        title: "商机总数",
        value: moduleTotals["opportunities"] ?? 0,
        icon: <FundProjectionScreenOutlined style={{ fontSize: 24 }} />,
        suffix: moduleTotals["opportunities"] > 0 ? `转化率 ${oppToCustomerRate}%` : "",
        pageKey: "opportunities" as keyof typeof PAGE_URLS,
      },
      {
        title: "销售员工总数",
        value: moduleTotals["salesStaff"] ?? 0,
        icon: <UserOutlined style={{ fontSize: 24 }} />,
        suffix: moduleTotals["salesStaff"] > 0 ? `人均客户 ${(moduleTotals["customers"] / moduleTotals["salesStaff"]).toFixed(1)}` : "",
        pageKey: "salesStaff" as keyof typeof PAGE_URLS,
      },
      {
        title: "产品信息总数",
        value: moduleTotals["products"] ?? 0,
        icon: <ShoppingOutlined style={{ fontSize: 24 }} />,
        suffix: "",
        pageKey: "products" as keyof typeof PAGE_URLS,
      },
    ];
  }, [moduleTotals]);

  const opportunityColumns = [
    {
      title: "名称",
      dataIndex: "opportunity_name",
      key: "name",
      render: (_: any, row: AnyRecord) =>
        row.opportunity_name || row.level_name || row.name || row.product_name || "-",
    },
    {
      title: "金额",
      dataIndex: "amount",
      key: "amount",
      render: (v: any) => (v === undefined || v === null ? "-" : v),
    },
    {
      title: "状态",
      dataIndex: "status_label",
      key: "status",
      render: (v: any, row: AnyRecord) => {
        const label = Array.isArray(v) && v.length > 0 ? v[0].label : row.status;
        if (!label) return "-";
        const color =
          typeof label === "string" && (label.includes("赢") || label.includes("成功"))
            ? "green"
            : typeof label === "string" && (label.includes("输") || label.includes("关闭"))
            ? "red"
            : "blue";
        return <Tag color={color}>{label}</Tag>;
      },
    },
    {
      title: "跟进时间",
      dataIndex: "followup_time",
      key: "followup_time",
      render: (v: any, row: AnyRecord) => formatDate(v || row.gmt_create || row.gmt_modified),
    },
  ];
    // 页面头部操作按钮配置
    const pageHeaderActions: PageHeaderAction[] = [
      {
        icon: TeamOutlined,
        text: "客户360全景",
        type: "primary",
        handler: () => navigate('/customer360'),
      },
    ];

  return (
    <div>
      <PageHeader
        actions={pageHeaderActions}
        style={{
          marginBottom: 16,
        }}
      />
      {error && (
        <Alert
          style={{ marginTop: 12 }}
          type="error"
          showIcon
          message="加载失败"
          description={error}
        />
      )}
      
      {apiErrors.length > 0 && (
        <Alert
          style={{ marginTop: 12 }}
          type="warning"
          showIcon
          message="部分模块加载失败"
          description={
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {apiErrors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          }
        />
      )}

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        {kpiCards.map((kpi) => (
          <Col key={kpi.title} xs={24} sm={12} md={12} lg={6} style={{ minHeight: 160 }}>
            <Card 
              hoverable
              style={{ cursor: "pointer", height: "100%" }}
              onClick={() => navigateToPage(kpi.pageKey)}
              bodyStyle={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Space direction="vertical" style={{ width: "100%", height: "100%", justifyContent: "space-between" }}>
                <div>
                  <Space align="start" style={{ marginBottom: 16 }}>
                    <div style={{ color: "#1890ff" }}>{kpi.icon}</div>
                    <Statistic title={kpi.title} value={kpi.value} />
                  </Space>
                  <div style={{ fontSize: 12, color: "#8c8c8c", minHeight: 20 }}>
                    {kpi.suffix || " "}
                  </div>
                </div>
                <Button type="link" size="small" style={{ padding: 0, marginTop: 8 }}>
                  查看详情 →
                </Button>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} sm={12} md={8} lg={6} style={{ minHeight: 140 }}>
          <Card 
            hoverable
            style={{ cursor: "pointer", height: "100%" }}
            onClick={() => navigateToPage("customerLevel")}
            bodyStyle={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Space direction="vertical" style={{ width: "100%", height: "100%", justifyContent: "space-between" }}>
              <div>
                <Space align="start" style={{ marginBottom: 16 }}>
                  <div style={{ color: "#1890ff" }}>
                    <TrophyOutlined style={{ fontSize: 24 }} />
                  </div>
                  <Statistic title="客户等级" value={moduleTotals["customerLevels"] ?? 0} />
                </Space>
                <div style={{ fontSize: 12, color: "#8c8c8c", minHeight: 20 }}>
                  {moduleTotals["customerLevels"] > 0 ? `${moduleTotals["customerLevels"]} 个级别` : " "}
                </div>
              </div>
              <Button type="link" size="small" style={{ padding: 0, marginTop: 8 }}>
                管理等级 →
              </Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} style={{ minHeight: 140 }}>
          <Card 
            hoverable
            style={{ cursor: "pointer", height: "100%" }}
            onClick={() => navigateToPage("visitRecords")}
            bodyStyle={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Space direction="vertical" style={{ width: "100%", height: "100%", justifyContent: "space-between" }}>
              <div>
                <Space align="start" style={{ marginBottom: 16 }}>
                  <div style={{ color: "#1890ff" }}>
                    <EnvironmentOutlined style={{ fontSize: 24 }} />
                  </div>
                  <Statistic title="客户拜访记录" value={moduleTotals["visitRecords"] ?? 0} />
                </Space>
                <div style={{ fontSize: 12, color: "#8c8c8c", minHeight: 20 }}>
                  {moduleTotals["visitRecords"] > 0 ? `${moduleTotals["visitRecords"]} 次` : " "}
                </div>
              </div>
              <Button type="link" size="small" style={{ padding: 0, marginTop: 8 }}>
                查看记录 →
              </Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} style={{ minHeight: 140 }}>
          <Card 
            hoverable
            style={{ cursor: "pointer", height: "100%" }}
            onClick={() => navigateToPage("contacts")}
            bodyStyle={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Space direction="vertical" style={{ width: "100%", height: "100%", justifyContent: "space-between" }}>
              <div>
                <Space align="start" style={{ marginBottom: 16 }}>
                  <div style={{ color: "#1890ff" }}>
                    <UserOutlined style={{ fontSize: 24 }} />
                  </div>
                  <Statistic title="客户联系人" value={moduleTotals["contacts"] ?? 0} />
                </Space>
                <div style={{ fontSize: 12, color: "#8c8c8c", minHeight: 20 }}>
                  {moduleTotals["contacts"] > 0 ? `${moduleTotals["contacts"]} 人` : " "}
                </div>
              </div>
              <Button type="link" size="small" style={{ padding: 0, marginTop: 8 }}>
                管理联系人 →
              </Button>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} style={{ minHeight: 140 }}>
          <Card 
            hoverable
            style={{ cursor: "pointer", height: "100%" }}
            onClick={() => navigateToPage("salesLeads")}
            bodyStyle={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Space direction="vertical" style={{ width: "100%", height: "100%", justifyContent: "space-between" }}>
              <div>
                <Space align="start" style={{ marginBottom: 16 }}>
                  <div style={{ color: "#1890ff" }}>
                    <PhoneOutlined style={{ fontSize: 24 }} />
                  </div>
                  <Statistic title="销售线索" value={moduleTotals["salesLeads"] ?? 0} />
                </Space>
                <div style={{ fontSize: 12, color: "#8c8c8c", minHeight: 20 }}>
                  {moduleTotals["salesLeads"] > 0 ? `${moduleTotals["salesLeads"]} 条线索` : " "}
                </div>
              </div>
              <Button type="link" size="small" style={{ padding: 0, marginTop: 8 }}>
                管理线索 →
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={12}>
          <Card title="销售漏斗分析">
            <ReactECharts
              notMerge
              style={{ height: 300 }}
              onEvents={{
                click: (params: any) => {
                  const pageKey = chartNameToPageKey[params.name];
                  if (pageKey) {
                    navigateToPage(pageKey);
                  }
                }
              }}
              option={{
                tooltip: { trigger: "item" },
                series: [
                  {
                    type: "funnel",
                    left: "10%",
                    width: "80%",
                    label: { show: true, formatter: "{b}: {c}" },
                    data: [
                      { value: Math.floor((moduleTotals["opportunities"] || 0) * 1.5), name: "潜在客户" },
                      { value: moduleTotals["opportunities"] || 0, name: "商机" },
                      { value: Math.floor((moduleTotals["opportunities"] || 0) * 0.6), name: "方案/报价" },
                      { value: Math.floor((moduleTotals["opportunities"] || 0) * 0.3), name: "谈判" },
                      { value: moduleTotals["customers"] || 0, name: "成交客户" },
                    ],
                  },
                ],
              }}
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="业务模块分布">
            <ReactECharts
              notMerge
              style={{ height: 300 }}
              onEvents={{
                click: (params: any) => {
                  const pageKey = chartNameToPageKey[params.name];
                  if (pageKey) {
                    navigateToPage(pageKey);
                  }
                }
              }}
              option={{
                tooltip: { trigger: "item", formatter: "{a} <br/>{b}: {c} ({d}%)" },
                legend: { bottom: 0 },
                series: [
                  {
                    name: "业务分布",
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: false,
                    itemStyle: {
                      borderRadius: 10,
                      borderColor: "#fff",
                      borderWidth: 2,
                    },
                    label: {
                      show: false,
                      position: "center",
                    },
                    emphasis: {
                      label: {
                        show: true,
                        fontSize: 20,
                        fontWeight: "bold",
                      },
                    },
                    labelLine: { show: false },
                    data: [
                      { value: moduleTotals["customers"] || 0, name: "客户" },
                      { value: moduleTotals["opportunities"] || 0, name: "商机" },
                      { value: moduleTotals["contacts"] || 0, name: "联系人" },
                      { value: moduleTotals["visitRecords"] || 0, name: "拜访记录" },
                      { value: moduleTotals["products"] || 0, name: "产品" },
                      { value: moduleTotals["salesStaff"] || 0, name: "销售团队" },
                    ],
                  },
                ],
              }}
            />
          </Card>
        </Col>

        <Col xs={24} lg={16}>
          <Card title="近期商机" extra={<Button size="small" onClick={() => navigateToPage("opportunities")}>更多</Button>}>
            {loading ? (
              <Skeleton active />
            ) : (
              <Table
                rowKey={(r) => String(r.id ?? r.opportunity_id ?? Math.random())}
                dataSource={opportunityRows}
                columns={opportunityColumns}
                size="middle"
                pagination={false}
              />
            )}
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="快速一览">
            <List
              itemLayout="horizontal"
              dataSource={MODULES}
              renderItem={(m) => {
                const items = quickLists[m.key] || [];
                const first = items[0] || {};
                const name =
                  first.opportunity_name || first.level_name || first.name || first.product_name;
                const statusLabel = Array.isArray(first.status_label)
                  ? first.status_label[0]?.label
                  : first.status;
                return (
                  <List.Item
                    style={{ cursor: "pointer" }}
                    onClick={() => navigateToPage(m.key as keyof typeof PAGE_URLS)}
                    actions={[
                      <Button 
                        type="link" 
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateToPage(m.key as keyof typeof PAGE_URLS);
                        }}
                      >
                        查看
                      </Button>
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<span style={{ fontSize: 18 }}>{m.icon}</span>}
                      title={
                        <Space>
                          <span>{m.name}</span>
                          <Tag>{moduleTotals[m.key] ?? 0}</Tag>
                        </Space>
                      }
                      description={
                        name ? (
                          <Space>
                            <span style={{ maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {name}
                            </span>
                            {statusLabel && <Tag color="geekblue">{statusLabel}</Tag>}
                          </Space>
                        ) : (
                          <span>暂无数据</span>
                        )
                      }
                    />
                  </List.Item>
                );
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CrmDashboard;


