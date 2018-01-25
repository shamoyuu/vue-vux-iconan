import Vue from 'vue'
import App from './App'
import router from './tools/router'
import store from './tools/store'
import { Datetime, Group } from 'vux'
import TestDirective from './directives/common/TestDirective'

Vue.component(Datetime.name, Datetime);
Vue.component(Group.name, Group);

Vue.config.productionTip = false;

const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.use(TestDirective);

new Vue({
    el: '.app',
    router: router,
    store: store,
    template: '<App/>',
    components: { App }
});
