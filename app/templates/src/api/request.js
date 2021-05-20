import request from '@/utils/request'
// import jsonRequest from '@/utils/jsonRequest'
import axios from 'axios'
import vue from 'vue'
const BASE_URL = ''
const serve = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: BASE_URL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

export function get(url, params) {
  return request({
    method: 'GET',
    url: url,
    params
  })
}
export function edit(url, params) {
  return axios({
    method: 'POST',
    url:  url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: params,
    transformRequest: [function () {
      return params;
    }],
  })
}
// export function jsonPost(url, params) {
//   return jsonRequest({
//     method: 'post',
//     url: url,
//     data:params,
//   })
// }
export function post(url, params) {
  return request({
    method: 'post',
    url: url,
    data:params,
  })
}
export function add(url, params) {
  return axios({
    method: 'post',
    url:url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: params,
    transformRequest: [function () {
      return params;
    }],
  })
}


export function upLoad(url, params) {
  return axios({
    url: url,
    // dataType: "json",
    async: false,
    crossDomain: true,
    processData: false,
    contentType: false,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data;charse=UTF-8'
    },
    transformRequest: [function () {
      return params;
    }],
    data: params,

  })
}
