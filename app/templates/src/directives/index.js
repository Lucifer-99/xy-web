import Vue from "vue"
import {
    debounce
} from "@/utils/index";

// 防抖函数自定义指令
Vue.directive('debounce', {
    bind(el, binding) {
        let executeFunction

        if (binding.value instanceof Array) {
            const [func, time = 1000] = binding.value
            executeFunction = debounce(func, time)
        } else {
            executeFunction = debounce(binding.value, 1000)
        }
        el.addEventListener('click', executeFunction)
    },

});