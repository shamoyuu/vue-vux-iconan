import axios from "@/tools/axios"

let apiUrl = "http://meleong.duapp.com/iconan";

export default {
    install(Vue) {
        Vue.prototype.$api = {
            get(url, params) {
                return axios.get(apiUrl + url, { params: params })
            },
            post(url, params) {
                return axios.post(apiUrl + url, params);
            }
        }
    }
}
