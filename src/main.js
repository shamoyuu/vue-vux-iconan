import Vue from 'vue'
import App from './App'
import router from './tool/router/index'
import {Datetime, Group} from 'vux'

Vue.component(Datetime.name, Datetime);
Vue.component(Group.name, Group);

Vue.config.productionTip = false;


new Vue({
    el: '.app',
    router: router,
    template: '<App/>',
    components: {App}
});
