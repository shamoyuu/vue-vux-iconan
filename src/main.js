import Vue from 'vue'
import App from './App'
import router from './router'
import {Datetime, Group} from 'vux'

Vue.component(Datetime.name, Datetime);
Vue.component(Group.name, Group);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '.app',
    router,
    template: '<App/>',
    components: {App}
})
