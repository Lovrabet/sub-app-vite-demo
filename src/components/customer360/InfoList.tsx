import React from 'react';
import { Row, Col, Typography, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

export interface InfoItem {
  label: string;
  value: React.ReactNode;
  tooltip?: string;
  span?: number;
  valueStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  copyable?: boolean;
}

interface InfoListProps {
  items: InfoItem[];
  column?: 1 | 2 | 3 | 4;
  labelWidth?: number | string;
  colon?: boolean;
  size?: 'small' | 'middle' | 'large';
  bordered?: boolean;
}

const InfoList: React.FC<InfoListProps> = ({
  items,
  column = 2,
  labelWidth = 100,
  colon = true,
  size = 'middle',
  bordered = false,
}) => {
  const getSpan = () => {
    return 24 / column;
  };

  const getPadding = () => {
    const sizeMap = {
      small: 8,
      middle: 12,
      large: 16,
    };
    return sizeMap[size];
  };

  return (
    <div
      style={{
        border: bordered ? '1px solid #f0f0f0' : 'none',
        borderRadius: bordered ? 4 : 0,
        padding: bordered ? getPadding() : 0,
      }}
    >
      <Row gutter={[16, getPadding()]}>
        {items.map((item, index) => (
          <Col key={index} span={item.span || getSpan()}>
            <Space size={8} align="start">
              <Text
                style={{
                  color: '#8c8c8c',
                  width: labelWidth,
                  flexShrink: 0,
                  display: 'inline-block',
                  ...item.labelStyle,
                }}
              >
                {item.label}
                {colon && '：'}
                {item.tooltip && (
                  <Tooltip title={item.tooltip}>
                    <QuestionCircleOutlined
                      style={{ marginLeft: 4, fontSize: 12, color: '#bfbfbf' }}
                    />
                  </Tooltip>
                )}
              </Text>
              <Text
                style={{ flex: 1, ...item.valueStyle }}
                copyable={item.copyable}
              >
                {item.value || '--'}
              </Text>
            </Space>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default InfoList;