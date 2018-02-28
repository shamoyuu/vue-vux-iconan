export default {
    install(Vue) {
        Vue.filter("substr", function (value, length) {
            value = value || "";
            return value.substr(0, length);
        });
    }
}