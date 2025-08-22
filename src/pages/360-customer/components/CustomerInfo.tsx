import React from 'react';
import { Card, Space, Typography, Tabs, Tag, Button, Row, Col, Skeleton, Alert, Tooltip, Divider } from 'antd';
import {
  BankOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  DollarOutlined,
  SafetyOutlined,
  EditOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { useCustomer360 } from '@/context/Customer360Context';
import { MetricCard, InfoList, StatusTag } from '@/components/customer360';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const CustomerInfo: React.FC = () => {
  const { selectedCompany, customerInfo, metrics, loading } = useCustomer360();

  if (!selectedCompany) {
    return (
      <Card style={{ height: '100%' }}>
        <Alert
          message="请选择客户"
          description="从左侧列表中选择一个客户查看详细信息"
          type="info"
          showIcon
        />
      </Card>
    );
  }

  if (loading.customer || loading.metrics) {
    return (
      <Card style={{ height: '100%' }}>
        <Skeleton active paragraph={{ rows: 10 }} />
      </Card>
    );
  }

  const getRiskColor = (level: string) => {
    const colors: Record<string, string> = {
      low: 'success',
      medium: 'warning',
      high: 'error',
    };
    return colors[level] || 'default';
  };

  const getRiskText = (level: string) => {
    const texts: Record<string, string> = {
      low: '低风险',
      medium: '中风险',
      high: '高风险',
    };
    return texts[level] || level;
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Card bordered={false} size="small" style={{ marginBottom: 12 }}>
        <Space direction="vertical" style={{ width: '100%' }} size={12}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Space>
              <BankOutlined style={{ fontSize: 24, color: '#1890ff' }} />
              <Title level={4} style={{ margin: 0 }}>
                {selectedCompany.name}
              </Title>
              {customerInfo && (
                <Tag color={getRiskColor(customerInfo.riskLevel)}>
                  <SafetyOutlined /> {getRiskText(customerInfo.riskLevel)}
                </Tag>
              )}
            </Space>
            <Space>
              <Button type="link" icon={<EditOutlined />} onClick={() => alert('当前功能正在开发中，敬请期待')}>
                编辑
              </Button>
            </Space>
          </div>

          {customerInfo?.tags && (
            <Space wrap>
              {customerInfo.tags.map(tag => (
                <StatusTag key={tag} text={tag} type="customer" />
              ))}
              <Button
                type="dashed"
                size="small"
                icon={<PlusOutlined />}
                onClick={() => alert('当前功能正在开发中，敬请期待')}
              >
                添加标签
              </Button>
            </Space>
          )}
        </Space>
      </Card>

      <Row gutter={12} style={{ marginBottom: 12 }}>
        <Col span={12}>
          <MetricCard
            title="历史合作总额"
            value={metrics?.totalCooperation || 0}
            unit="万元"
            valueStyle={{ color: '#1890ff' }}
          />
        </Col>
        <Col span={12}>
          <MetricCard
            title="当前合同金额"
            value={metrics?.currentYearAmount || 0}
            unit="万元"
            valueStyle={{ color: '#52c41a' }}
          />
        </Col>
      </Row>

      <Card style={{ flex: 1, overflow: 'auto' }}>
        <Tabs defaultActiveKey="basic">
          <TabPane tab="基本信息" key="basic">
            {customerInfo && (
              <InfoList
                column={1}
                labelWidth={120}
                items={[
                  {
                    label: '统一社会信用代码',
                    value: customerInfo.registrationNumber,
                    copyable: true,
                  },
                  {
                    label: '法定代表人',
                    value: customerInfo.legalRepresentative,
                  },
                  {
                    label: '注册资本',
                    value: customerInfo.registeredCapital,
                  },
                  {
                    label: '成立日期',
                    value: customerInfo.establishedDate,
                  },
                  {
                    label: '所属行业',
                    value: customerInfo.industry,
                  },
                  {
                    label: '经营范围',
                    value: customerInfo.businessScope,
                  },
                  {
                    label: '注册地址',
                    value: customerInfo.address,
                  },
                ]}
              />
            )}
          </TabPane>

          <TabPane tab="联系人" key="contacts">
            {customerInfo?.contacts && customerInfo.contacts.length > 0 ? (
              <Space direction="vertical" style={{ width: '100%' }} size={16}>
                {customerInfo.contacts.map(contact => (
                  <Card key={contact.id} size="small">
                    <Space direction="vertical" style={{ width: '100%' }} size={8}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Space>
                          <UserOutlined />
                          <Text strong>{contact.name}</Text>
                          <Text type="secondary">({contact.position})</Text>
                          {contact.isPrimary && (
                            <Tag color="gold">主要联系人</Tag>
                          )}
                        </Space>
                      </div>
                      <Space split={<Divider type="vertical" />}>
                        <Text>
                          <PhoneOutlined /> {contact.phone}
                        </Text>
                        <Text copyable>
                          <MailOutlined /> {contact.email}
                        </Text>
                      </Space>
                    </Space>
                  </Card>
                ))}
                <Button
                  type="dashed"
                  style={{ width: '100%' }}
                  icon={<PlusOutlined />}
                  onClick={() => alert('当前功能正在开发中，敬请期待')}
                >
                  添加联系人
                </Button>
              </Space>
            ) : (
              <Alert message="暂无联系人信息" type="info" />
            )}
          </TabPane>

          <TabPane tab="商业指标" key="metrics">
            {metrics && (
              <Space direction="vertical" style={{ width: '100%' }} size={16}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <MetricCard
                      title="总订单数"
                      value={metrics.totalOrders}
                      unit="个"
                    />
                  </Col>
                  <Col span={12}>
                    <MetricCard
                      title="活跃商机"
                      value={metrics.activeOpportunities}
                      unit="个"
                    />
                  </Col>
                  <Col span={12}>
                    <MetricCard
                      title="转化率"
                      value={metrics.conversionRate}
                      unit="%"
                      trend="up"
                      trendValue="+5.2%"
                    />
                  </Col>
                  <Col span={12}>
                    <MetricCard
                      title="平均订单价值"
                      value={metrics.averageOrderValue.toFixed(0)}
                      unit="万元"
                    />
                  </Col>
                  <Col span={24}>
                    <MetricCard
                      title="客户生命周期价值"
                      value={(metrics.customerLifetimeValue / 10000).toFixed(0)}
                      unit="万元"
                      description="基于历史数据预测的客户总价值"
                    />
                  </Col>
                  <Col span={24}>
                    <MetricCard
                      title="净推荐值 (NPS)"
                      value={metrics.netPromoterScore}
                      unit="分"
                      description="客户满意度和忠诚度指标"
                      valueStyle={{ color: '#52c41a' }}
                    />
                  </Col>
                </Row>
              </Space>
            )}
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default React.memo(CustomerInfo);