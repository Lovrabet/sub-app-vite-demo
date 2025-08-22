export type IResponse<ResponseData = any> = {
  /** 响应数据主体 */
  data: ResponseData;
  /** 请求是否成功 */
  success: boolean;
  /** 响应消息 */
  msg?: string;
  /** 错误消息 */
  errorMsg?: string;
  /** 错误码 */
  errorCode?: string;
  /** 请求参数 */
  params?: unknown;
};

/**
 * 处理请求
 */
export const processResponse = async <ResponseData>(response: Response) => {
  const result: IResponse<ResponseData> = await response.json();
  if (!result.success) {
    const error = new Error(result.errorMsg);
    error.response = result;
    throw error;
  }
  return result.data;
};
