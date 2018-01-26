<template>
    <div id="app">
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
    }
};
</script>

<style lang="less">
@import "./assets/less/main.less";
#app {
    width: 100%;
    margin-bottom: 50px;
    overflow: hidden;
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
