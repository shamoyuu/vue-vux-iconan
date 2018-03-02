import axios from "@/tools/axios"

let apiUrl = "<<<service>>>";
let picServer = "<<<pic-service>>>";

console.info("apiUrl", apiUrl);
console.info("picServer", picServer);

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
