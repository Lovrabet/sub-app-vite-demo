import React, { useState } from 'react';
import { Card, Tabs, List, Tag, Space, Typography, Empty, Spin, Button, Badge, Progress, Divider } from 'antd';
import {
  DollarOutlined,
  ShoppingCartOutlined,
  CalendarOutlined,
  UserOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { useCustomer360 } from '@/context/Customer360Context';
import { StatusTag } from '@/components/customer360';
import { SalesOpportunity, Order } from '@/services/customer360Mock';
import dayjs from 'dayjs';

const { TabPane } = Tabs;
const { Text, Title } = Typography;

const SalesManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('opportunities');
  const { selectedCompany, opportunities, orders, loading, selectOpportunity, selectedOpportunity } = useCustomer360();

  if (!selectedCompany) {
    return (
      <Card style={{ height: '100%' }}>
        <Empty description="请先选择客户" />
      </Card>
    );
  }

  const getStageIcon = (stage: string) => {
    const icons: Record<string, React.ReactNode> = {
      lead: <ClockCircleOutlined />,
      contact: <UserOutlined />,
      proposal: <DollarOutlined />,
      negotiation: <SyncOutlined />,
      'closed-won': <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      'closed-lost': <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
    };
    return icons[stage] || <DollarOutlined />;
  };

  const getStageText = (stage: string) => {
    const texts: Record<string, string> = {
      lead: '线索',
      contact: '联系',
      proposal: '方案',
      negotiation: '谈判',
      'closed-won': '赢单',
      'closed-lost': '输单',
    };
    return texts[stage] || stage;
  };

  const getOrderStatusIcon = (status: string) => {
    const icons: Record<string, React.ReactNode> = {
      pending: <ClockCircleOutlined style={{ color: '#faad14' }} />,
      processing: <SyncOutlined style={{ color: '#1890ff' }} />,
      completed: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      cancelled: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
    };
    return icons[status] || <ShoppingCartOutlined />;
  };

  const getOrderStatusText = (status: string) => {
    const texts: Record<string, string> = {
      pending: '待处理',
      processing: '处理中',
      completed: '已完成',
      cancelled: '已取消',
    };
    return texts[status] || status;
  };

  const getPaymentStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      unpaid: 'error',
      partial: 'warning',
      paid: 'success',
    };
    return colors[status] || 'default';
  };

  const getPaymentStatusText = (status: string) => {
    const texts: Record<string, string> = {
      unpaid: '未付款',
      partial: '部分付款',
      paid: '已付款',
    };
    return texts[status] || status;
  };

  const renderOpportunity = (item: SalesOpportunity) => (
    <List.Item
      style={{
        backgroundColor: selectedOpportunity?.id === item.id ? '#f0f8ff' : '#fff',
        borderLeft: selectedOpportunity?.id === item.id ? '3px solid #1890ff' : 'none',
        paddingLeft: selectedOpportunity?.id === item.id ? 13 : 16,
        cursor: 'pointer',
      }}
      onClick={() => selectOpportunity(item)}
    >
      <Space direction="vertical" style={{ width: '100%' }} size={8}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Space>
            {getStageIcon(item.stage)}
            <Text strong>{item.title}</Text>
          </Space>
          <StatusTag text={item.status} status={item.status as any} />
        </div>
        
        <Space size={4}>
          <Tag color="blue">{item.code}</Tag>
          {item.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Space>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text type="secondary" style={{ fontSize: 12 }}>
            <UserOutlined /> {item.owner}
          </Text>
          <Text strong style={{ color: '#1890ff' }}>
            ¥{item.amount.toLocaleString()}万
          </Text>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text type="secondary" style={{ fontSize: 12 }}>
            <CalendarOutlined /> 预计成交：{item.expectedCloseDate}
          </Text>
          <Progress
            percent={item.probability}
            size="small"
            style={{ width: 80 }}
            strokeColor="#52c41a"
          />
        </div>

        <Badge
          color={item.stage === 'closed-won' ? 'green' : item.stage === 'closed-lost' ? 'red' : 'blue'}
          text={`阶段：${getStageText(item.stage)}`}
        />
      </Space>
    </List.Item>
  );

  const renderOrder = (item: Order) => (
    <List.Item>
      <Space direction="vertical" style={{ width: '100%' }} size={8}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Space>
            {getOrderStatusIcon(item.status)}
            <Text strong>{item.title}</Text>
          </Space>
          <Tag color={item.type === 'product' ? 'blue' : 'purple'}>
            {item.type === 'product' ? '产品' : '服务'}
          </Tag>
        </div>

        <Space split={<Divider type="vertical" />}>
          <Text type="secondary" style={{ fontSize: 12 }}>
            订单号：{item.orderNo}
          </Text>
          <Text type="secondary" style={{ fontSize: 12 }}>
            创建于：{item.createdDate}
          </Text>
        </Space>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Space>
            <Badge status={item.status === 'completed' ? 'success' : 'processing'} />
            <Text>{getOrderStatusText(item.status)}</Text>
          </Space>
          <Text strong style={{ color: '#52c41a' }}>
            ¥{item.amount.toLocaleString()}万
          </Text>
        </div>

        {item.deliveryDate && (
          <Text type="secondary" style={{ fontSize: 12 }}>
            <CalendarOutlined /> 交付日期：{item.deliveryDate}
          </Text>
        )}

        <Tag color={getPaymentStatusColor(item.paymentStatus)}>
          {getPaymentStatusText(item.paymentStatus)}
        </Tag>
      </Space>
    </List.Item>
  );

  return (
    <Card
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px' }}
    >
      <div style={{ marginBottom: 12 }}>
        <Title level={5} style={{ margin: 0 }}>
          销售管理
        </Title>
      </div>

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        tabBarExtraContent={
          <Space>
            <Badge count={opportunities.length} showZero>
              <Button size="small" type="text">
                商机
              </Button>
            </Badge>
            <Badge count={orders.length} showZero>
              <Button size="small" type="text">
                订单
              </Button>
            </Badge>
          </Space>
        }
      >
        <TabPane
          tab={
            <span>
              <DollarOutlined />
              销售机会
            </span>
          }
          key="opportunities"
          style={{ height: '100%', overflow: 'auto' }}
        >
          {loading.opportunities ? (
            <div style={{ textAlign: 'center', padding: 40 }}>
              <Spin tip="加载中..." />
            </div>
          ) : opportunities.length === 0 ? (
            <Empty description="暂无销售机会" />
          ) : (
            <List
              dataSource={opportunities}
              renderItem={renderOpportunity}
              split
            />
          )}
        </TabPane>

        <TabPane
          tab={
            <span>
              <ShoppingCartOutlined />
              订单信息
            </span>
          }
          key="orders"
          style={{ height: '100%', overflow: 'auto' }}
        >
          {loading.orders ? (
            <div style={{ textAlign: 'center', padding: 40 }}>
              <Spin tip="加载中..." />
            </div>
          ) : orders.length === 0 ? (
            <Empty description="暂无订单" />
          ) : (
            <List
              dataSource={orders}
              renderItem={renderOrder}
              split
            />
          )}
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default React.memo(SalesManagement);