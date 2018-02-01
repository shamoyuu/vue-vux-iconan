<template>
    <div id="app" :class="{'has-nav-bar':ifShowNavBar}">
        <router-view/>
        <transition name="fade">
            <app-footer v-show="ifShowNavBar"></app-footer>
        </transition>
    </div>
</template>

<script>
import AppFooter from "@/components/Footer.vue";
import { mapState } from "vuex";
import Vue from "vue";

export default {
    name: "app",
    components: {
        AppFooter
    },
    computed: {
        ...mapState(["ifShowNavBar"])
    },
    mounted: function() {
        if (localStorage.getItem("read-history")) {
            this.$popup.show();
        }
    }
};
</script>

<style lang="less">
@import "./assets/less/main.less";
#app {
    width: 100%;
    overflow: hidden;
}
.has-nav-bar {
    margin-bottom: 50px;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s;
}
.fade-enter,
.fade-leave-active {
    transform: translate3d(0, 25px, 0) scale3d(1, 0, 1);
    opacity: 0.2;
}
</style>
