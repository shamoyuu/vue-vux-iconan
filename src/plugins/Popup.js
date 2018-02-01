import PopupComponent from "@/components/common/Popup"

let $vm;

export default {
    install(Vue, options) {
        Vue.mixin({
            created() {
                this.$popup = {
                    show() {
                        if (!$vm) {
                            const Popup = Vue.extend(PopupComponent);
                            $vm = new Popup({
                                el: document.createElement('div')
                            });
                            document.body.appendChild($vm.$el);
                        }

                        $vm.show = true;
                    },
                    hide() {
                        $vm.show = false;
                    }
                };
            }
        });
    }
}
