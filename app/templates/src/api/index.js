/**
 * api接口统一出口
 */
let api = {
    userperiod: '/v2/userperiod.php', //获取用户发推荐的统计情况
    nostartedindex: '/nami/index/nostartedinfopag', //让球和大小球对阵 
    matchJczq: '/static/match/jczq.json', //竞彩对阵
    saveuseradvice: '/v2/saveuseradvice.php', //发推荐
    getapplystate: '/v2/getapplystate.php', //查询申请状态
    applybeauthor: '/v2/applybeauthor.php', //申请成为专家
    advicelist: '/v2/advicelist.php',
    hotExpert: '/static/expert/hot.json', //获取热门专家
    upimage: '/v2/upimage.php', // 上传图片
    apply: '/v2/applybeauthorexemption.php' //申请免试成为专家
}
/**
 * 自动化处理api接口绑定到全局属性$apis
 * 文件必须返回 export default {...}
 */
// const files = require.context('./modules', false, /\.ts$/)
// let api: any = {};
// files.keys().map(key => {
//     let name = key.substring(key.indexOf('/') + 1, key.indexOf('.ts'));
//     api[name] = files(key).default
// })

// export default api

// 为了代码提示只能用如下方式
import * as user from './modules/user'
import * as test from './modules/test'

export default {
    api,
    user,
    test
}