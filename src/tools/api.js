import axios from "@/tools/axios"

export default {
    install(Vue) {
        Vue.prototype.$api = {
            get(url, params) {
                return axios.get(url, {
                    params: params
                })
            },
            post(url, params) {
                return axios.post(url, params);
            }
        }
    }
}
