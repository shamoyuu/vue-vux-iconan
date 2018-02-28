<template>
    <div id="app" :class="{'has-nav-bar':ifShowNavBar}">
        <router-view></router-view>
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
    name: "App",
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
    overflow: hidden;
}
.has-nav-bar {
    margin-bottom: 50px;
}
</style>
