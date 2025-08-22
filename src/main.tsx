import React from "react";
import { createRoot } from "react-dom/client";
import { isInIcestark } from "@ice/stark-app";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import App from "./router";
import "./style.css";

if (!isInIcestark()) {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    );
  }
}

export function mount({
  container,
  customProps,
}: {
  container: HTMLElement;
  customProps: object;
}) {
  const root = createRoot(container);
  // 注意：移除StrictMode以避免开发环境的双重渲染
  // 如需使用StrictMode，请确保组件内部正确处理了副作用
  root.render(
    <ConfigProvider locale={zhCN}>
      <App {...customProps} />
    </ConfigProvider>
  );
  return root;
}

export function unmount({ container }: { container: HTMLElement }) {
  // React 18 中不再需要手动卸载，但为了兼容性保留
  const root = (container as any)._reactRoot;
  if (root) {
    root.unmount();
  }
}
