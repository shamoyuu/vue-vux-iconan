
export default {
    install(Vue) {
        Vue.prototype.$errorHandle = function (errorData) {
            //如果返回200，则弹出message
            if (errorData.response && errorData.response.status == 200) {
                if (errorData.data && errorData.data.message) {
                    Vue.prototype.instance.$vux.toast.show(errorData.data.message);
                }
            }
            else {
                //如果是非200，其他错误在这里处理
            }
        }
    }
}