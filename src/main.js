import Vue from "vue"
import App from "./App"

import router from "./tools/router"
import store from "./tools/store"
import api from "./tools/api"
import errorHandle from "./tools/errorHandle"
import filters from "./tools/filters"

import { ToastPlugin } from "vux"

import TestDirective from "./directives/common/TestDirective"
import PictureAnimateDirective from "./directives/common/PictureAnimateDirective"
import Popup from "./plugins/Popup";



Vue.config.productionTip = false;

const FastClick = require("fastclick");
FastClick.attach(document.body);

Vue.use(ToastPlugin, { type: "text", position: "bottom", width: "80vw", time: 3000 });
Vue.use(TestDirective);
Vue.use(PictureAnimateDirective);
Vue.use(api);
Vue.use(errorHandle);
Vue.use(filters);
Vue.use(Popup);

Vue.prototype.instance = new Vue({
    el: ".app",
    router: router,
    store: store,
    template: "<App/>",
    components: { App }
});
