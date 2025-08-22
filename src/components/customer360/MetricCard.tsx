import React from 'react';
import { Card, Statistic, Space } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

interface MetricCardProps {
  title: string;
  value: number | string;
  unit?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  trend?: 'up' | 'down';
  trendValue?: string;
  description?: string;
  valueStyle?: React.CSSProperties;
  bordered?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit = '',
  prefix,
  suffix,
  trend,
  trendValue,
  description,
  valueStyle = {},
  bordered = false,
}) => {
  const getTrendIcon = () => {
    if (!trend) return null;
    return trend === 'up' ? (
      <ArrowUpOutlined style={{ color: '#52c41a' }} />
    ) : (
      <ArrowDownOutlined style={{ color: '#ff4d4f' }} />
    );
  };

  const getTrendColor = () => {
    if (!trend) return undefined;
    return trend === 'up' ? '#52c41a' : '#ff4d4f';
  };

  return (
    <Card bordered={bordered} size="small">
      <Statistic
        title={
          <Space size={4}>
            <span>{title}</span>
            {trendValue && (
              <span style={{ color: getTrendColor(), fontSize: 12 }}>
                {getTrendIcon()}
                {trendValue}
              </span>
            )}
          </Space>
        }
        value={value}
        prefix={prefix}
        suffix={suffix || unit}
        valueStyle={{ fontSize: 24, ...valueStyle }}
      />
      {description && (
        <div style={{ marginTop: 8, color: '#8c8c8c', fontSize: 12 }}>
          {description}
        </div>
      )}
    </Card>
  );
};

export default MetricCard;