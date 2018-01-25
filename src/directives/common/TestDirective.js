export default {
    install(Vue) {
        Vue.directive("TestDirective", {
            bind() {
                console.log("bind", arguments);
            },
            unbind(el, binding, vnode) {
                console.log("unbind", arguments);
            }
        });
    }
}