"use client";

import React from "react";
import { Button, Card, Col, Form, Grid, Input, Pagination, Row, Select, Space, Statistic, Table, Tag } from "antd";

const { useBreakpoint } = Grid;

// 搜索筛选模块（AntD 实现）
export const SearchModule: React.FC = () => {
  const screens = useBreakpoint();
  const isMd = screens.md;
  return (
    <div className="module-content">
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={10}>
            <Input 
              id="admin-search"
              placeholder="搜索关键词..." 
              allowClear 
              size={isMd ? "middle" : "large"} 
            />
          </Col>
          <Col xs={24} md={6}>
            <Select
              id="admin-category"
              placeholder="全部分类"
              style={{ width: "100%" }}
              options={[
                { label: "全部分类", value: "" },
                { label: "分类A", value: "A" },
                { label: "分类B", value: "B" },
              ]}
              allowClear
              size={isMd ? "middle" : "large"}
            />
          </Col>
          <Col xs={24} md={8}>
            <Space wrap>
              <Button type="primary" size={isMd ? "middle" : "large"}>搜索</Button>
              <Button size={isMd ? "middle" : "large"}>重置</Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

// 操作区域模块（AntD 实现）
export const ActionsModule: React.FC = () => (
  <div className="module-content">
    <Space wrap>
      <Button type="primary" ghost>新增</Button>
      <Button>批量编辑</Button>
      <Button danger>批量删除</Button>
      <Button>导出数据</Button>
    </Space>
  </div>
);

// 数据表格模块（AntD 实现）
export const TableModule: React.FC = () => {
  const data = Array.from({ length: 10 }, (_, i) => ({
    key: i,
    id: 1001 + i,
    name: `项目 ${i + 1}`,
    category: `分类 ${(i % 3) + 1}`,
    status: i % 2 === 0 ? "正常" : "待审核",
    createdAt: `2024-01-${String(i + 1).padStart(2, "0")}`,
  }));

  const columns = [
    { title: "ID", dataIndex: "id", width: 80, responsive: ["xs", "sm", "md", "lg"] },
    { title: "名称", dataIndex: "name", responsive: ["xs", "sm", "md", "lg"] },
    { title: "分类", dataIndex: "category", responsive: ["sm", "md", "lg"] },
    { title: "状态", dataIndex: "status", responsive: ["md", "lg"], render: (s: string) => (
      <Tag color={s === "正常" ? "green" : "gold"}>{s}</Tag>
    ) },
    { title: "创建时间", dataIndex: "createdAt", responsive: ["lg"] },
    { title: "操作", key: "action", width: 140, responsive: ["xs", "sm", "md", "lg"], render: () => (
      <Space>
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ) },
  ];

  return (
    <div className="module-content">
      <div className="module-title">数据表格</div>
      <Table columns={columns as any} dataSource={data} pagination={false} scroll={{ x: true }} />
    </div>
  );
};

// 侧边栏模块（AntD 实现）
export const SidebarModule: React.FC = () => (
  <div className="module-content">
    <div className="module-title">侧边栏</div>
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic title="总项目数" value={1234} />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic title="正常项目" value={456} valueStyle={{ color: "#52c41a" }} />
          </Card>
        </Col>
        <Col xs={24}>
          <Card>
            <Statistic title="待审核" value={78} valueStyle={{ color: "#faad14" }} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={8}><Button block>数据导入</Button></Col>
        <Col span={8}><Button block>模板下载</Button></Col>
        <Col span={8}><Button block>系统设置</Button></Col>
      </Row>
    </Space>
  </div>
);

// 分页模块（AntD 实现）
export const PaginationModule: React.FC = () => (
  <div className="module-content">
    <Row align="middle" justify="space-between" style={{ width: "100%" }}>
      <Col flex="none">显示第 1-10 条，共 100 条记录</Col>
      <Col>
        <Pagination current={1} total={100} pageSize={10} simple />
      </Col>
    </Row>
  </div>
);