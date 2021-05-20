import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.devtools = true;

// 初始化样式
import "@/assets/css/reset.css";

// rem 适配js
// import 'amfe-flexible'

// 设置html根字体大小
import "@/assets/css/font_html.css";

// 导入vant css(由于采用配置主题方式，这里需要导入vant less 主题文件,如果不需要自定义主题注释下面代码，然后解除config/cdn.js 中vant主题样式的注释)
import "vant/lib/index.less";

// 路由权限拦截
import "./router/permission";

// 初始化svg图标
import "./icons/index";

// mock模式
if (process.env.VUE_APP_MODE == "mock") {
  require("../mock");
  console.log("本地mock数据已导入");
}

// 注入指令
import '@/directives'
// 注册自定义全局组件
import components from "./utils/components";
//api
import api from '@/api/index.js'

// 注册全局插件
import plugins from "./utils/plugins";

// request
import request from '@/utils/request'

Vue.prototype.$api = api
Vue.prototype.$request = request

Vue.use(plugins).use(components);

Vue.prototype.getWeek = function getWeek(dateString) {
  var dateArray = dateString.split(" ")[0].split('-');
  let date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
  return "周" + "日一二三四五六".charAt(date.getDay());
};
Vue.prototype.format = function format(timestamp) {
  var date = new Date(timestamp.replace(/\-/g, "/")); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10 ?
      "0" + (date.getMonth() + 1) :
      date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  var h = date.getHours().toString();
  if (h.length < 2) {
    h = '0' + h + ":"
  } else {
    h = h + ":"
  }
  var m = date.getMinutes().toString();
  if (m.length < 2) {
    m = '0' + m
  }

  return M + D + h + m;
}

Vue.prototype.dateFormat = function dateFormat(d1) {
  var dateEnd = new Date(); //获取当前时间
  var dateBegin = new Date(d1.replace(/-/g, "/")); //将-转化为/，使用new Date
  var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
  var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
  if (dayDiff > 0) {
    return dayDiff + '天前';
  }
  var leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
  if (hours > 0) {
    return hours + '小时前';
  }
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
  if (minutes > 0) {
    return minutes + '分钟前';
  }
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000);
  return seconds + '秒前';
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");