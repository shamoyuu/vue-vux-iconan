<template>
    <div>
        <h1>{{msg}}</h1>
        <button type="button">
            <router-link to="/">你好世界</router-link>
        </button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: "首页"
            }
        }
    }
</script>

<style scoped>

</style>