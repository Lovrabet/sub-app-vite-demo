import { processResponse } from "./process-response";

export const get = async <ResponseData>(
  input: string,
  params?: Record<string, any>,
  init: RequestInit = {},
): Promise<ResponseData> => {
  const url = new URL(`${input}`, window.location.origin);
  if (params) {
    for (const key of Object.keys(params)) {
      url.searchParams.append(key, String(params[key]));
    }
  }

  // 如果请求链接包含 yuntooai.com/lovrabet.com 则带上cookie
  const shouldIncludeCookies =
    url.hostname.includes("yuntooai.com") ||
    url.hostname.includes("lovrabet.com");
  const fetchInit: RequestInit = shouldIncludeCookies
    ? { ...init, credentials: "include" as const }
    : { ...init };

  const response = await fetch(url.toString(), fetchInit);

  // 判断是否重定向
  if (response.redirected) {
    window.location.href = response.url;
    // @ts-ignore 如果是重定向,则跳出了
    return;
  }

  return await processResponse<ResponseData>(response);
};
