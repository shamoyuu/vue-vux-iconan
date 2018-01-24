import Vue from 'vue'
import App from './App'
import router from './tool/router/index'
import store from './tool/store/store'
import {Datetime, Group} from 'vux'

Vue.component(Datetime.name, Datetime);
Vue.component(Group.name, Group);

Vue.config.productionTip = false;

const FastClick = require('fastclick');
FastClick.attach(document.body);

new Vue({
    el: '.app',
    router: router,
    store: store,
    template: '<App/>',
    components: {App}
});
