<template>
    <tabbar @on-index-change="indexChange" class="main-footer">
        <tabbar-item :selected="selected[0]">
            <img slot="icon" src="@/assets/image/homepage.png">
            <img slot="icon-active" src="@/assets/image/homepage_fill.png">
            <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :selected="selected[1]">
            <img slot="icon" src="@/assets/image/flashlight.png">
            <img slot="icon-active" src="@/assets/image/flashlight_fill.png">
            <span slot="label">最新</span>
        </tabbar-item>
        <tabbar-item :selected="selected[2]">
            <img slot="icon" src="@/assets/image/createtask.png">
            <img slot="icon-active" src="@/assets/image/createtask_fill.png">
            <span slot="label">分类</span>
        </tabbar-item>
        <tabbar-item :selected="selected[3]">
            <img slot="icon" src="@/assets/image/people.png">
            <img slot="icon-active" src="@/assets/image/people_fill.png">
            <span slot="label">我的</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";

let navs = ["home", "news", "classify", "personal"];

export default {
    name: "AppFooter",
    data: function () {
        return {
            selected: [true, false, false, false]
        };
    },
    components: {
        Tabbar,
        TabbarItem
    },
    methods: {
        indexChange: function (newindex, oldindex) {
            //oldindex是undefined表示刷新页面
            if (oldindex !== undefined) {
                this.$router.replace({
                    name: navs[newindex]
                });
            }
        }
    },
    created: function () {
        let that = this;

        changeSelected(that.$router.currentRoute.name);
        that.$router.afterEach(function (to, from) {
            changeSelected(to.name);
        });

        function changeSelected(currentRouterName) {
            that.selected = [false, false, false, false];
            that.selected[navs.indexOf(currentRouterName)] = true;
        }
    }
};
</script>
<style scoped>
.main-footer {
    position: fixed;
}
</style>
