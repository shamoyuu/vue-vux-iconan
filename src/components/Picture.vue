<template>
    <div class="opus-view">
        <hide-nav-bar></hide-nav-bar>
        <header-bar></header-bar>
        <div class="picture-area">
            <div class="pret-area" @click="pret"></div>
            <div class="next-area" @click="next"></div>
            <div class="menu-area" @click="showMenu = true"></div>
            <img class="picture-img" :src="currentPictureUrl">
        </div>
        <img class="prompt-img" src="@/assets/images/prompt.png" v-if="showPrompt" @click="hidePrompt">
        <div class="page-tip">
            {{currentPictureIndex + 1}} / {{maxPictureIndex}}
        </div>
        <actionsheet v-model="showMenu" :menus="menus" @on-click-menu="menuClick" show-cancel></actionsheet>
    </div>
</template>

<script>
import { Actionsheet } from "vux";
import HideNavBar from "@/components/common/HideNavBar";
import HeaderBar from "@/components/common/HeaderBar";

export default {
    data() {
        return {
            pictures: [""],
            currentPictureIndex: 0,
            maxPictureIndex: 0,
            currentPictureUrl: "",
            showMenu: false,
            menus: {
                "title.noop": "<span class=menu-tip>请选择清晰度</span>",
                "": "原画",
                "@!z1": "超清",
                "@!z2": "高清",
                "@!z3": "标清",
                "@!z4": "低清",
                "@!z5": "超级省流量"
            },
            currentDefinition:
                localStorage.getItem("picture-definition") || "@!z3",
            opusName: "",
            showPrompt: localStorage.getItem("has-show-prompt") != "yes"
        };
    },
    methods: {
        pret: function(index) {
            console.info("上一页");
            let that = this;
            that.currentPictureIndex--;
            if (that.currentPictureIndex < 0) {
                that.currentPictureIndex = 0;
            }
            if (that.maxPictureIndex > 0) {
                that.currentPictureUrl =
                    that.pictures[that.currentPictureIndex].url +
                    that.currentDefinition;
                //记录阅读历史
                that.recordHistory();
            }
        },
        next: function() {
            console.info("下一页");
            let that = this;
            that.currentPictureIndex++;
            if (
                that.maxPictureIndex > 0 &&
                that.currentPictureIndex < that.maxPictureIndex
            ) {
                that.currentPictureUrl =
                    that.pictures[that.currentPictureIndex].url +
                    that.currentDefinition;
                that.loadNext();
                //记录阅读历史
                that.recordHistory();
            }
        },
        menuClick: function(definition, name) {
            console.info(arguments);
            if (name) {
                this.currentDefinition = definition;
                localStorage.setItem("picture-definition", definition);
                this.loadNext();
            }
        },
        loadNext: function() {
            let that = this;
            //加载下一页
            if (that.currentPictureIndex < that.maxPictureIndex - 1) {
                var imgObj = new Image();
                imgObj.src =
                    that.pictures[that.currentPictureIndex + 1].url +
                    that.currentDefinition;
            }
        },
        recordHistory: function() {
            let readHistory = {
                opusName: this.$route.query.opusName,
                chapterName: this.$route.query.chapterName,
                pictureIndex: this.currentPictureIndex + 1,
                chapterid: this.$route.params.chapterid
            };
            console.info(readHistory);
            localStorage.setItem("read-history", JSON.stringify(readHistory));
        },
        hidePrompt: function() {
            this.showPrompt = false;
            localStorage.setItem("has-show-prompt", "yes");
        }
    },
    mounted: function() {
        console.info(this.$route.query);
        let that = this;
        if (this.$route.query.pictureIndex) {
            that.currentPictureIndex = this.$route.query.pictureIndex - 1;
        }
        that.$api
            .get("/getpicture", {
                chapterid: that.$route.params.chapterid
            })
            .then(function(data) {
                that.pictures = data;
                that.maxPictureIndex = that.pictures.length;
                if (that.maxPictureIndex > 0) {
                    that.currentPictureUrl =
                        that.pictures[that.currentPictureIndex].url +
                        that.currentDefinition;
                    //记录阅读历史
                    that.recordHistory();
                }
            })
            .catch(that.$errorHandle);
    },
    components: {
        Actionsheet,
        HideNavBar,
        HeaderBar
    }
};
</script>

<style scoped lang="less">
.picture-img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
.picture-area {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    text-align: center;
    z-index: 1;
}
.pret-area {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}
.next-area {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50vh;
    z-index: 3;
}
.menu-area {
    position: absolute;
    top: 20vh;
    left: 30vw;
    width: 40vw;
    height: 30vh;
    z-index: 4;
}
.page-tip {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    text-shadow: 0 0 10px #000;
    z-index: 5;
}
.prompt-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9;
}
</style>