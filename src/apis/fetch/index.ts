import { get } from "./get";
import { post } from "./post";

export class YTFetch {
  private baseURL = `https://api.yuntooai.com`;

  /**
   * 创建请求实例
   * @param config 配置对象
   * @param config.baseURL 可选的基础 URL，所有相对路径请求将基于此 URL
   */
  constructor(config?: { baseURL?: string }) {
    if (config?.baseURL) this.baseURL = config.baseURL;
  }

  /**
   * 发送 GET 请求
   * @param url 请求地址路径，可以是相对路径或绝对路径
   * @param params 查询参数对象，会被序列化到 URL 中
   * @param init 可选的请求配置参数，与标准 fetch API 的 RequestInit 一致
   * @returns 返回一个 Promise，resolve 时返回请求的响应数据
   * @template ResponseData 响应数据类型
   * @template QueryParams 查询参数类型
   */
  get<ResponseData>(
    url: string,
    params?: Record<string, any>,
    init: RequestInit = {},
  ) {
    return get<ResponseData>(attachBaseURL(url, this.baseURL), params, init);
  }

  /**
   * 发送 POST 请求
   * @param url 请求地址路径，可以是相对路径或绝对路径
   * @param body 请求体数据，会被序列化为 JSON 字符串
   * @param init 可选的请求配置参数，与标准 fetch API 的 RequestInit 一致
   * @returns 返回一个 Promise，resolve 时返回请求的响应数据
   * @template ResponseData 响应数据类型
   */
  post<ResponseData>(
    url: string,
    body?: Record<string, any>,
    init: RequestInit = {},
  ) {
    return post<ResponseData>(attachBaseURL(url, this.baseURL), body, init);
  }

  /**
   * 发送 GET 请求（get 方法的别名）
   * @param url 请求地址路径，可以是相对路径或绝对路径
   * @param params 查询参数对象，会被序列化到 URL 中
   * @param init 可选的请求配置参数，与标准 fetch API 的 RequestInit 一致
   * @returns 返回一个 Promise，resolve 时返回请求的响应数据
   * @template ResponseData 响应数据类型
   * @template QueryParams 查询参数类型
   */
  GET<ResponseData>(
    url: string,
    params?: Record<string, any>,
    init: RequestInit = {},
  ) {
    return this.get<ResponseData>(url, params, init);
  }

  /**
   * 发送 POST 请求（post 方法的别名）
   * @param url 请求地址路径，可以是相对路径或绝对路径
   * @param body 请求体数据，会被序列化为 JSON 字符串
   * @param init 可选的请求配置参数，与标准 fetch API 的 RequestInit 一致
   * @returns 返回一个 Promise，resolve 时返回请求的响应数据
   * @template ResponseData 响应数据类型
   */
  POST<ResponseData>(
    url: string,
    body?: Record<string, any>,
    init: RequestInit = {},
  ) {
    return this.post<ResponseData>(url, body, init);
  }
}

function attachBaseURL(url: string, baseURL?: string) {
  if (!url.startsWith("http") && baseURL) {
    return new URL(url, baseURL).toString();
  }
  return url;
}
