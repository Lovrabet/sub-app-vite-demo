// ytFetch 和 webAdminFetch 的区别：是调用的服务不同

import { YTFetch } from "./fetch/index";

// ytFetch → Java服务 → pages/prompt/* 专用 → /admin/xxx
// 调用的是java服务，通用fetch，用于调用后端接口，仅用于 pages/prompt/* 等列表页，详情页，编辑页，创建页等页面
// 统一基础域：直接请求 api.yuntooai.com，避免相对路径引起的跨域或拼接问题
export const ytFetch = new YTFetch({
  baseURL: "https://api.yuntooai.com",
});
