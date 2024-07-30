// manage.js axios请求封装
import axios from '@/https/https.js';

/**
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * */

// get
export function getAction(url, parameter) {
  return axios({
    url: url,
    method: 'get',
    params: parameter,
  });
}

// post
export function postAction(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    data: parameter,
  });
}

// post
export function postFormAction(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    params: parameter,
  });
}

// post method= {post | put}
export function httpAction(url, parameter, method) {
  return axios({
    url: url,
    method: method,
    data: parameter,
  });
}

// put
export function putAction(url, parameter) {
  return axios({
    url: url,
    method: 'put',
    data: parameter,
  });
}

// deleteAction
export function deleteAction(url, parameter) {
  return axios({
    url: url,
    method: 'delete',
    params: parameter,
  });
}

/**
 * 下载文件 用于excel导出
 * @param url
 * @param parameter
 * @returns {*}
 */
export function downFile(url, parameter, token) {
  return axios({
    url: url,
    params: parameter,
    method: 'get',
    responseType: 'blob',
    headers: {
      ['X-Access-Token']: token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
}
