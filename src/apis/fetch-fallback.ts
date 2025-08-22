/**
 * @yuntoo/fetch 包的本地替代实现
 * 用于外包服务商无法访问私有npm包时使用
 */

interface FetchOptions {
  baseURL?: string;
  headers?: Record<string, string>;
  credentials?: RequestCredentials;
}

interface RequestConfig extends RequestInit {
  params?: Record<string, any>;
  data?: any;
}

export class YTFetch {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;
  private credentials: RequestCredentials;

  constructor(options: FetchOptions = {}) {
    this.baseURL = options.baseURL || '';
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    this.credentials = options.credentials || 'include'; // 默认携带cookie
  }

  private buildURL(path: string, params?: Record<string, any>): string {
    const url = path.startsWith('http') ? path : `${this.baseURL}${path}`;
    if (!params) return url;
    
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    
    const queryString = searchParams.toString();
    return queryString ? `${url}?${queryString}` : url;
  }

  private async request<T = any>(
    url: string,
    config: RequestConfig = {}
  ): Promise<T> {
    const { params, data, headers = {}, ...restConfig } = config;
    
    const finalURL = this.buildURL(url, params);
    const finalHeaders = { ...this.defaultHeaders, ...headers };
    
    const requestConfig: RequestInit = {
      ...restConfig,
      headers: finalHeaders,
      credentials: this.credentials,
    };
    
    if (data && (config.method === 'POST' || config.method === 'PUT' || config.method === 'PATCH')) {
      requestConfig.body = JSON.stringify(data);
    }
    
    try {
      const response = await fetch(finalURL, requestConfig);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      
      const responseData = await response.json();
      
      // 兼容后端返回格式
      // 如果响应包含 code 字段，检查业务状态
      if (responseData.code !== undefined && responseData.code !== 0 && responseData.code !== 200) {
        throw new Error(responseData.message || '请求失败');
      }
      
      // 如果有 data 字段，返回 data；否则返回整个响应
      return responseData.data !== undefined ? responseData.data : responseData;
    } catch (error) {
      console.error('Request failed:', error);
      throw error;
    }
  }

  async get<T = any>(url: string, params?: Record<string, any>, config?: RequestConfig): Promise<T> {
    return this.request<T>(url, {
      ...config,
      method: 'GET',
      params,
    });
  }

  async post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>(url, {
      ...config,
      method: 'POST',
      data,
    });
  }

  async put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>(url, {
      ...config,
      method: 'PUT',
      data,
    });
  }

  async delete<T = any>(url: string, config?: RequestConfig): Promise<T> {
    return this.request<T>(url, {
      ...config,
      method: 'DELETE',
    });
  }

  async patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>(url, {
      ...config,
      method: 'PATCH',
      data,
    });
  }
}

// 导出默认实例
export default YTFetch;