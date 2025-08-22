import once from "lodash/once";

/**
 * 从html中获取userInfo信息
 */
export const getUserInfo = once(() => {
  return window.__GLOBAL__?.userInfo || {};
});
