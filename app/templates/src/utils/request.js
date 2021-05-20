/**
 * axios 封装
 * @author maybe
 */
import qs from 'qs'
import axios from "axios";
import {
  Toast
} from "vant";
import {
  getToken
} from "@/utils/auth";
import router from "@/router";
import {
  isAndroid
} from "@/utils/index";
/**
 * 请求失败后的错误统一处理
 * @param {number} code 请求失败的状态码
 */
const handleError = (code) => {
  switch (code) {
    case 401:
      // do something ...
      // 这里要清除一些全局的loading哦，例如 vant: Toast.clear()
      router.push("/Login");
      break;

    default:
      break;
  }
};

// create an axios instance
const service = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  baseURL:  process.env.VUE_APP_baseApi, // .env中配置的api前缀
  timeout: 5000, // request timeout
});
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
service.interceptors.request.use(
  (config) => {
    // 获取token
    const token = getToken();
    // const token =
    token && (config.headers.token = token);
    if (!(config.data instanceof FormData)) {
      if (config.data === undefined) {
        config.data = ''
      }
      console.log(config.data, 'ssdssddsdd');

      config.data = qs.stringify(config.data)
    } else {
      // "application/x-www-form-urlencoded"
      config.headers['Content-Type'] = 'multipart/form-data';

    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error, "err");
    return Promise.reject(error);
  }
);
/**
 * 响应格式
 * { code => 状态码, msg => '响应信息', data => 数据 }
 */
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.retcode != '0000') {
      // 处理自定义错误
      handleError(res.status);
      Toast({
        message: res.retmsg,
        duration: 1.5 * 1000,
        onClose: () => {
          if (res.retmsg === '未登录或登录失效') {
            if (isAndroid()) {
              window.androidJs.startLogin()
            } else {
              window.webkit.messageHandlers.FTLogin.postMessage(null)
            }
          }
        },
      });

      return Promise.reject(new Error(res.retmsg || "响应未知错误"));
    } else {
      // success
      return Promise.resolve(res);
    }
  },
  (error) => {
    console.error("response error:" + error); // for debug
    this.$toast.fail({
      message: error.message,
      duration: 1.5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;