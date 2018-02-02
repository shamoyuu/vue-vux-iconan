export default {
    install(Vue) {
        Vue.filter("substr", function (value, length) {
            return value.substr(0, length);
        });
    }
}