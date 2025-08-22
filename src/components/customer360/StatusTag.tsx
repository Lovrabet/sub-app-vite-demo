import React from 'react';
import { Tag } from 'antd';

export type StatusType = 
  | 'opportunity'
  | 'order'
  | 'service'
  | 'risk'
  | 'customer'
  | 'project'
  | 'contract';

export type StatusLevel = 'high' | 'medium' | 'low' | 'success' | 'warning' | 'error' | 'default';

interface StatusTagProps {
  type?: StatusType;
  status?: StatusLevel;
  text: string;
  color?: string;
  icon?: React.ReactNode;
  bordered?: boolean;
  onClick?: () => void;
}

const StatusTag: React.FC<StatusTagProps> = ({
  type,
  status = 'default',
  text,
  color,
  icon,
  bordered = true,
  onClick,
}) => {
  const getColor = () => {
    if (color) return color;
    
    const statusColors: Record<StatusLevel, string> = {
      high: '#f50',
      medium: '#fa8c16',
      low: '#52c41a',
      success: '#52c41a',
      warning: '#faad14',
      error: '#ff4d4f',
      default: '#d9d9d9',
    };
    
    const typeColors: Record<StatusType, string> = {
      opportunity: '#1890ff',
      order: '#52c41a',
      service: '#722ed1',
      risk: '#ff4d4f',
      customer: '#13c2c2',
      project: '#fa8c16',
      contract: '#2f54eb',
    };
    
    if (type && typeColors[type]) {
      return typeColors[type];
    }
    
    return statusColors[status];
  };

  return (
    <Tag
      color={getColor()}
      bordered={bordered}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      onClick={onClick}
    >
      {icon && <span style={{ marginRight: 4 }}>{icon}</span>}
      {text}
    </Tag>
  );
};

export default StatusTag;