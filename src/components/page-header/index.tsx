import React from "react";
import { Flex, Button, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useRouteLoaderData, useMatches } from "react-router";

export interface PageHeaderAction {
  icon?: React.ComponentType<any>;
  text: string;
  handler: () => void;
  type?: "primary" | "default" | "dashed" | "link" | "text";
  disabled?: boolean;
}

interface PageHeaderProps {
  actions?: PageHeaderAction[];
  className?: string;
  title?: string; // 可选的自定义标题
  breadcrumbVisible?: boolean; // 控制面包屑显示
  style?: React.CSSProperties; // 支持自定义样式
}

export default function PageHeader({
  actions = [],
  className = "",
  title,
  breadcrumbVisible = true,
  style,
}: PageHeaderProps) {
  const matches = useMatches();

  // React Hooks必须在组件顶层调用
  const currentMatch = matches[matches.length - 1];
  const pageData = useRouteLoaderData(currentMatch?.id || "");

  // 获取当前布局的数据（可能是adminLayout或evaluationLayout）
  const layoutMatch = matches.find(
    (match) => match.id === "adminLayout" || match.id === "evaluationLayout",
  );
  const layoutData = useRouteLoaderData(layoutMatch?.id || "adminLayout");

  // 只在需要时处理数据
  let adminInfo: any = null;
  let pageName: string = "";

  if (breadcrumbVisible) {
    adminInfo = layoutData?.adminInfo || { title: "管理员面板" };
    pageName = pageData?.pageName || "";
  }

  const breadcrumbItems = breadcrumbVisible
    ? [
        { href: "/admin", title: <HomeOutlined /> },
        { title: adminInfo?.title || "管理员面板" },
        ...(pageName ? [{ title: pageName }] : []),
      ]
    : [];

  return (
    <div className={className} style={style}>
      <Flex justify="space-between" align="flex-end">
        {/* 左侧：面包屑或自定义标题 */}
        <div>
          {breadcrumbVisible && <Breadcrumb items={breadcrumbItems} />}
          {title && !breadcrumbVisible && (
            <h1
              style={{
                margin: 0,
                fontSize: "var(--ant-font-size-xl)",
                fontWeight: 600,
              }}
            >
              {title}
            </h1>
          )}
        </div>

        {/* 右侧：操作按钮 */}
        {actions.length > 0 && (
          <Flex gap="small">
            {actions.map(
              ({ icon: Icon, text, handler, type = "default", disabled }) => (
                <Button
                  key={text}
                  type={type}
                  icon={Icon && <Icon />}
                  onClick={handler}
                  disabled={disabled}
                >
                  {text}
                </Button>
              ),
            )}
          </Flex>
        )}
      </Flex>
    </div>
  );
}
