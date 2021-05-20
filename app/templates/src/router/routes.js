// layout
import Footer from "@/layout/footer/index.vue";
import Header from "@/layout/header/index.vue";

//#region 自动导入模块路由
const files = require.context("./modules", false, /\.js$/);
const modules = [];

files.keys().forEach((key) => {
  modules.push(files(key).default || files(key));
});
//#endregion

const routes = [{
    path: "/",
    name: "home",
    meta: {
      title: "福利专享",
      isOpen: true,
    },
    component: () => import("@/views/home/index.vue"),
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];

export default routes;