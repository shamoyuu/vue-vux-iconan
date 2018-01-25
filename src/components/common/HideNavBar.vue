<template>
    <div></div>
</template>

<script>
export default {
    name: "HideNavBar",
    beforeMount() {
        //创建之前
        this.$store.commit("hideNavBar");
    },
    destroyed() {
        //销毁完成
        this.$store.commit("showNavBar");
    }
};
</script>

<style scoped>
div {
    display: none;
}
</style>
