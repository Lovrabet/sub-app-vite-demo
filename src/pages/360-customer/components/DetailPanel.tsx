import React from 'react';
import { Card, Typography, Space, Button, Empty, Descriptions, Tag, Divider, Alert, Progress, Timeline } from 'antd';
import {
  RobotOutlined,
  MessageOutlined,
  FileTextOutlined,
  TeamOutlined,
  CalendarOutlined,
  DollarOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import { useCustomer360 } from '@/context/Customer360Context';
import { InfoList, StatusTag } from '@/components/customer360';

const { Title, Text, Paragraph } = Typography;

const DetailPanel: React.FC = () => {
  const { selectedOpportunity, selectedCompany } = useCustomer360();

  const handleAIChat = () => {
    alert('AI助手功能正在开发中，敬请期待');
  };

  const handleViewReport = () => {
    alert('查看报告功能正在开发中，敬请期待');
  };

  const getStageProgress = (stage: string) => {
    const stageMap: Record<string, number> = {
      lead: 20,
      contact: 40,
      proposal: 60,
      negotiation: 80,
      'closed-won': 100,
      'closed-lost': 0,
    };
    return stageMap[stage] || 0;
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

  if (!selectedCompany) {
    return (
      <Card style={{ height: '100%' }}>
        <Empty description="请选择客户查看详情" />
      </Card>
    );
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Card style={{ marginBottom: 12 }}>
        <Space direction="vertical" style={{ width: '100%' }} size={16}>
          <div>
            <Title level={5} style={{ margin: 0 }}>
              <RobotOutlined /> Lovrabet CRM 助手
            </Title>
            <Text type="secondary">智能分析与建议</Text>
          </div>

          <Alert
            message="AI智能分析"
            description="基于客户历史数据和行为模式，预测成交概率为85%，建议重点跟进。"
            type="info"
            showIcon
            icon={<RobotOutlined />}
          />

          <Space wrap>
            <Button
              type="primary"
              icon={<MessageOutlined />}
              onClick={handleAIChat}
            >
              开始对话
            </Button>
            <Button
              icon={<FileTextOutlined />}
              onClick={handleViewReport}
            >
              查看分析报告
            </Button>
            <Button
              icon={<CommentOutlined />}
              onClick={() => alert('功能开发中')}
            >
              今日待办
            </Button>
          </Space>
        </Space>
      </Card>

      {selectedOpportunity ? (
        <Card style={{ flex: 1, overflow: 'auto' }}>
          <Space direction="vertical" style={{ width: '100%' }} size={16}>
            <div>
              <Title level={5} style={{ margin: '0 0 8px 0' }}>
                {selectedOpportunity.title}
              </Title>
              <Space>
                <Tag color="blue">{selectedOpportunity.code}</Tag>
                <StatusTag
                  text={selectedOpportunity.status}
                  status={selectedOpportunity.status as any}
                />
                {selectedOpportunity.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Space>
            </div>

            <div>
              <Text type="secondary">销售阶段</Text>
              <Progress
                percent={getStageProgress(selectedOpportunity.stage)}
                status={selectedOpportunity.stage === 'closed-won' ? 'success' : 'active'}
                format={() => getStageText(selectedOpportunity.stage)}
              />
            </div>

            <InfoList
              column={1}
              labelWidth={100}
              size="small"
              items={[
                {
                  label: '预期金额',
                  value: `¥${selectedOpportunity.amount.toLocaleString()}万`,
                  valueStyle: { color: '#1890ff', fontWeight: 'bold' },
                },
                {
                  label: '成功概率',
                  value: `${selectedOpportunity.probability}%`,
                },
                {
                  label: '预计成交',
                  value: selectedOpportunity.expectedCloseDate,
                },
                {
                  label: '负责人',
                  value: selectedOpportunity.owner,
                },
                {
                  label: '创建日期',
                  value: selectedOpportunity.createdDate,
                },
              ]}
            />

            {selectedOpportunity.description && (
              <>
                <Divider />
                <div>
                  <Text type="secondary">备注说明</Text>
                  <Paragraph style={{ marginTop: 8 }}>
                    {selectedOpportunity.description}
                  </Paragraph>
                </div>
              </>
            )}

            <Divider />

            <div>
              <Title level={5}>跟进记录</Title>
              <Timeline
                items={[
                  {
                    color: 'green',
                    children: (
                      <Space direction="vertical" size={4}>
                        <Text>完成方案演示</Text>
                        <Text type="secondary" style={{ fontSize: 12 }}>
                          2024-12-28 14:30 - 张英
                        </Text>
                      </Space>
                    ),
                  },
                  {
                    color: 'blue',
                    children: (
                      <Space direction="vertical" size={4}>
                        <Text>客户提出新需求</Text>
                        <Text type="secondary" style={{ fontSize: 12 }}>
                          2024-12-25 10:00 - 李明
                        </Text>
                      </Space>
                    ),
                  },
                  {
                    children: (
                      <Space direction="vertical" size={4}>
                        <Text>初次拜访</Text>
                        <Text type="secondary" style={{ fontSize: 12 }}>
                          2024-12-20 09:00 - 张英
                        </Text>
                      </Space>
                    ),
                  },
                ]}
              />
              <Button type="dashed" style={{ width: '100%' }}>
                添加跟进记录
              </Button>
            </div>
          </Space>
        </Card>
      ) : (
        <Card style={{ flex: 1 }}>
          <Space direction="vertical" style={{ width: '100%' }} align="center">
            <Empty description="暂未选择销售机会" />
            <Text type="secondary">从销售管理中选择一个机会查看详情</Text>
          </Space>
        </Card>
      )}
    </div>
  );
};

export default React.memo(DetailPanel);