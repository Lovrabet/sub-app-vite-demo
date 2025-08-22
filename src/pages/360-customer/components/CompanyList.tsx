import React, { useState, useEffect } from 'react';
import { Input, Select, Card, Space, Typography, Tag, Spin, Empty, Badge } from 'antd';
import { SearchOutlined, TeamOutlined } from '@ant-design/icons';
import { Company, Customer360Service } from '@/services/customer360Mock';
import { useCustomer360 } from '@/context/Customer360Context';
import MetricCard from '@/components/customer360/MetricCard';

const { Search } = Input;
const { Option } = Select;
const { Text, Title } = Typography;

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    industry: 'all',
    status: 'all',
  });
  
  const { selectedCompany, selectCompany } = useCustomer360();

  const loadCompanies = async () => {
    setLoading(true);
    try {
      const data = await Customer360Service.getCompanies(filters);
      setCompanies(data);
      
      if (data.length > 0 && !selectedCompany) {
        selectCompany(data[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCompanies();
  }, [filters]);

  const handleSearch = (value: string) => {
    setFilters(prev => ({ ...prev, search: value }));
  };

  const handleIndustryChange = (value: string) => {
    setFilters(prev => ({ ...prev, industry: value }));
  };

  const handleStatusChange = (value: string) => {
    setFilters(prev => ({ ...prev, status: value }));
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      active: 'success',
      inactive: 'default',
      potential: 'processing',
    };
    return colors[status] || 'default';
  };

  const getStatusText = (status: string) => {
    const texts: Record<string, string> = {
      active: '活跃',
      inactive: '休眠',
      potential: '潜在',
    };
    return texts[status] || status;
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '16px 16px 8px' }}>
        <Title level={5} style={{ margin: '0 0 12px 0' }}>
          <TeamOutlined /> 客户列表
        </Title>
        
        <Space direction="vertical" style={{ width: '100%' }} size={8}>
          <Search
            id="company-search"
            placeholder="搜索公司名称"
            onSearch={handleSearch}
            style={{ width: '100%' }}
            prefix={<SearchOutlined />}
            allowClear
          />
          
          <Space style={{ width: '100%' }} size={8}>
            <Select
              id="industry-filter"
              style={{ flex: 1 }}
              value={filters.industry}
              onChange={handleIndustryChange}
              placeholder="选择行业"
            >
              <Option value="all">全部行业</Option>
              <Option value="工程建设">工程建设</Option>
              <Option value="快消品">快消品</Option>
              <Option value="云服务">云服务</Option>
              <Option value="通信设备">通信设备</Option>
              <Option value="互联网服务">互联网服务</Option>
            </Select>
            
            <Select
              id="status-filter"
              style={{ flex: 1 }}
              value={filters.status}
              onChange={handleStatusChange}
              placeholder="客户状态"
            >
              <Option value="all">全部状态</Option>
              <Option value="active">活跃</Option>
              <Option value="inactive">休眠</Option>
              <Option value="potential">潜在</Option>
            </Select>
          </Space>
        </Space>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '8px 16px 16px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Spin tip="加载中..." />
          </div>
        ) : companies.length === 0 ? (
          <Empty description="暂无客户数据" />
        ) : (
          <Space direction="vertical" style={{ width: '100%' }} size={12}>
            {companies.map(company => (
              <Badge.Ribbon
                key={company.id}
                text={company.cooperationYears + '年'}
                color="blue"
                placement="end"
              >
                <Card
                  hoverable
                  size="small"
                  style={{
                    cursor: 'pointer',
                    border: selectedCompany?.id === company.id ? '2px solid #1890ff' : '1px solid #f0f0f0',
                    backgroundColor: selectedCompany?.id === company.id ? '#f0f8ff' : '#fff',
                  }}
                  onClick={() => selectCompany(company)}
                >
                  <Space direction="vertical" style={{ width: '100%' }} size={8}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text strong style={{ fontSize: 16 }}>
                        {company.name}
                      </Text>
                      <Tag color={getStatusColor(company.status)}>
                        {getStatusText(company.status)}
                      </Tag>
                    </div>
                    
                    <Space size={8}>
                      <Tag color="blue">{company.industry}</Tag>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        最近联系：{company.lastContactDate}
                      </Text>
                    </Space>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                      <div>
                        <Text type="secondary" style={{ fontSize: 12 }}>历史合作总额</Text>
                        <div>
                          <Text strong style={{ fontSize: 18, color: '#1890ff' }}>
                            {company.totalAmount.toLocaleString()}
                          </Text>
                          <Text style={{ marginLeft: 4, fontSize: 12 }}>{company.totalAmountUnit}</Text>
                        </div>
                      </div>
                      
                      <div>
                        <Text type="secondary" style={{ fontSize: 12 }}>当前合同金额</Text>
                        <div>
                          <Text strong style={{ fontSize: 18 }}>
                            {company.yearlyAmount.toLocaleString()}
                          </Text>
                          <Text style={{ marginLeft: 4, fontSize: 12 }}>{company.yearlyAmountUnit}</Text>
                        </div>
                      </div>
                    </div>
                  </Space>
                </Card>
              </Badge.Ribbon>
            ))}
          </Space>
        )}
      </div>
    </div>
  );
};

export default React.memo(CompanyList);