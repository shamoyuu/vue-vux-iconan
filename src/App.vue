<template>
    <div id="app">
        <router-view/>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppFooter from '@/components/Footer.vue'
    
    export default {
        name: 'app',
        components: {
            AppFooter
        }
    }
</script>

<style lang="less">
    @import "./assets/less/main.less";
    #app {
        width: 100%;
        margin-bottom: 50px;
        overflow: hidden;
    }
</style>
