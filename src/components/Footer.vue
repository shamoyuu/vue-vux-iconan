<template>
    <tabbar @on-index-change="foo" class="main-footer">
        <tabbar-item selected>
            <img slot="icon" src="../assets/images/homepage.png">
            <img slot="icon-active" src="../assets/images/homepage_fill.png">
            <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
            <img slot="icon" src="../assets/images/flashlight.png">
            <img slot="icon-active" src="../assets/images/flashlight_fill.png">
            <span slot="label">最新</span>
        </tabbar-item>
        <tabbar-item>
            <img slot="icon" src="../assets/images/createtask.png">
            <img slot="icon-active" src="../assets/images/createtask_fill.png">
            <span slot="label">分类</span>
        </tabbar-item>
        <tabbar-item>
            <img slot="icon" src="../assets/images/people.png">
            <img slot="icon-active" src="../assets/images/people_fill.png">
            <span slot="label">我的</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";

export default {
    name: "AppFooter",
    components: {
        Tabbar,
        TabbarItem
    },
    methods: {
        foo: function(newindex, oldindex) {
            switch (newindex) {
                case 0:
                    this.$router.replace("/home");
                    break;
                case 1:
                    this.$router.replace("/news");
                    break;
                case 2:
                    this.$router.replace("/classify");
                    break;
                case 3:
                    this.$router.replace("/personal");
                    break;
            }
        }
    }
};
</script>
<style scoped>
.main-footer {
    position: fixed;
}
</style>
