/**
 * 登录接口统一管理
 */

// 导入 request 中创建的 axios 实例
// import { axios } from '@/utils/request'
// 导入 manage 中封装的请求方法
import { postAction } from '@/utils/manage.js';

const userApi = {
  login: '/login',
  logout: '/logout',
};

// 第一种方式
export const login = (data) => postAction(userApi.login, data); // 登录
export const logout = () => postAction(userApi.logout, {}); // 退出登录

// 第二种方式
// export function login(parameter) {
//     return axios({
//         url: userApi.login,
//         method: 'post',
//         data: parameter
//     })
// }

// export function logout(parameter) {
//     return axios({
//         url: userApi.logout,
//         method: 'post',
//         data: parameter
//     })
// }
