<template>
    <div class="header">
        <button type="button" class="back-btn" @click="back"></button>
    </div>
</template>

<script>
export default {
    name: "HeaderBar",
    data() {
        return {};
    },
    methods: {
        back() {
            this.$router.back();
        }
    }
};
</script>

<style scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    padding: 12px 0;
    width: 100vw;
    overflow: hidden;
    z-index: 9;
}
.back-btn {
    display: inline-block;
    position: relative;
    margin-left: 10px;
    width: 30px;
    height: 30px;
    background: url("../../assets/images/return.png") 0 0 no-repeat;
    background-size: 30px;
}
</style>
