import { processResponse } from "./process-response";

export const post = async <ResponseData>(
  url: string,
  body?: Record<string, any>,
  init: RequestInit = {},
): Promise<ResponseData> => {
  // 如果请求链接包含 yuntooai.com/lovrabet.com 则带上cookie
  const urlObj = new URL(url, window.location.origin);
  const shouldIncludeCookies =
    urlObj.hostname.includes("yuntooai.com") ||
    urlObj.hostname.includes("lovrabet.com");

  const response = await fetch(url, {
    ...init,
    method: init.method || "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body && JSON.stringify(body),
    credentials: shouldIncludeCookies ? "include" : init.credentials,
  });

  // 判断是否重定向
  if (response.redirected) {
    // 跳转到登录页面
    window.location.href = response.url;
    // @ts-ignore 如果是重定向,则跳出了
    return; // 阻止后续处理
  }

  return await processResponse<ResponseData>(response);
};
