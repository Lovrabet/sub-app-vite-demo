import React from "react";
import { Typography, Button } from "antd";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const currentTime = dayjs().format("YYYY年MM月DD日 dddd");
  
  return (
    <div style={{ padding: "20px 0",textAlign: "center" }}>
      {/* 欢迎区域 */}
      <div style={{ marginBottom: 40 }}>
        <Title level={3} style={{ margin: 0 }}>欢迎回来</Title>
        <Paragraph style={{ color: "#666", marginTop: 8 }}>
          {currentTime}
        </Paragraph>
      </div>

      {/* Hero区域 */}
      <div style={{ 
        textAlign: "center", 
        padding: "60px 20px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: 12,
        color: "#fff"
      }}>
        <Title style={{ color: "#fff", fontSize: 48, marginBottom: 16 }}>
          <span style={{ fontSize: 48 }}>🚀</span> 智能CRM管理系统
        </Title>
        <Paragraph style={{ 
          color: "rgba(255, 255, 255, 0.9)", 
          fontSize: 18,
          marginBottom: 32
        }}>
          一站式客户关系管理平台，助力企业销售增长
        </Paragraph>
        <Button 
          type="primary" 
          size="large" 
          onClick={() => navigate("/crm")}
          style={{
            height: 48,
            paddingLeft: 32,
            paddingRight: 32,
            fontSize: 16,
            backgroundColor: "#fff",
            color: "#764ba2",
            border: "none"
          }}
        >
          立即开始
        </Button>
      </div>
    </div>
  );
};

export default HomePage;