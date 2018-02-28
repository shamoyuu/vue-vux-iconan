<template>
    <div class="opus-view">
        <hide-nav-bar></hide-nav-bar>
        <transition name="slide-down">
            <div class="menu" v-show="showMenu">
                <div class="header-menu">
                    <header-bar></header-bar>
                    <button type="button" class="definition-menu" @click="showDefinitionMenu = true">
                        {{menus[currentDefinition]}}
                    </button>
                </div>
                <div class="mask" @click="showMenu = false"></div>
            </div>
        </transition>
        <div class="img-area">
            <img class="picture-img" :src="currentPictureUrl">
        </div>
        <div v-picture-animate-directive class="img-area" ref="animateDom" @transitionend="animationEnd">
            <img class="picture-img" :src="animatePictureUrl">
        </div>

        <div class="controller-area">
            <div class="pret-area" @click="pret"></div>
            <div class="next-area" @click="next"></div>
            <div class="menu-area" @click="showMenu = true"></div>
        </div>
        <img class="prompt-img" src="@/assets/image/prompt.png" v-if="showPrompt" @click="hidePrompt">
        <div class="page-tip">
            {{currentPictureIndex + 1}} / {{maxPictureIndex}}
        </div>
        <actionsheet v-model="showDefinitionMenu" :menus="menus" @on-click-menu="menuClick" show-cancel></actionsheet>
        <transition name="move">
            <div class="continue-read-next-chapter" v-if="showReadNext">
                <button class="readnext-close-btn" type="button" @click="showReadNext = false">×</button>
                <button class="readnext-btn" type="button" @click="readNextChapter" v-if="nextChapter.id">继续阅读下一卷</button>
                <button class="readnext-btn" type="button" @click="readNextChapter" v-if="!nextChapter.id">后面没有啦，返回首页</button>
            </div>
        </transition>
    </div>
</template>

<script>
import { Actionsheet } from "vux";
import HideNavBar from "@/components/common/HideNavBar";
import HeaderBar from "@/components/common/HeaderBar";
import { setTimeout } from 'timers';

export default {
    name: "Picture",
    data() {
        return {
            pictures: [""],
            currentPictureIndex: 0,
            maxPictureIndex: 0,
            currentDefinition: localStorage.getItem("picture-definition") || "@!z3",
            currentPictureUrl: "",
            animatePictureUrl: "",
            showMenu: false,
            showDefinitionMenu: false,
            menus: {
                "title.noop": "<span class=menu-tip>请选择清晰度</span>",
                "@!z0": "原画",
                "@!z1": "超清",
                "@!z3": "高清",
                "@!z4": "标清",
                "@!z5": "低清"
            },
            showPrompt: localStorage.getItem("has-show-prompt") != "yes",
            opus: {},
            chapter: {
                id: this.$route.params.chapterid
            },
            nextChapter: {},
            showReadNext: false,
            //当前动画是否是向下一页
            animateIsNext: true,
            //当前动画是否播放完成，如果没播放完就点下一页则强制结束
            animateIsEnd: true
        };
    },
    methods: {
        //上一页
        pret: function (index) {
            let that = this;

            if (that.maxPictureIndex > 0 && that.currentPictureIndex > 0) {
                that.animatePictureUrl = that.pictures[that.currentPictureIndex].url + that.currentDefinition;
                setTimeout(() => {
                    that.currentPictureUrl = that.pictures[--that.currentPictureIndex].url + that.currentDefinition;
                }, 10);
                this.$refs.animateDom.dispatchEvent(new Event("pret"));
                that.animateIsNext = false;
                that.animateIsEnd = false;
                that.loadPret();
            }
        },
        //下一页
        next: function () {
            let that = this;
            if (that.animateIsEnd == false) {
                that.$refs.animateDom.dispatchEvent(new Event("transitionend"));
            }
            if (that.maxPictureIndex > 0 && that.currentPictureIndex < that.maxPictureIndex - 1) {
                that.animatePictureUrl = that.pictures[that.currentPictureIndex + 1].url + that.currentDefinition;
                that.$refs.animateDom.dispatchEvent(new Event("next"));
                that.animateIsNext = true;
                that.animateIsEnd = false;
                that.loadNext();
            }
            else if (that.maxPictureIndex > 0 && that.currentPictureIndex >= that.maxPictureIndex - 1) {
                that.showReadNext = true;
            }
        },
        animationEnd: function () {
            let that = this;
            that.animateIsEnd = true;
            if (that.animateIsNext) {
                if (that.maxPictureIndex > 0 && that.currentPictureIndex < that.maxPictureIndex - 1) {
                    that.currentPictureUrl = that.pictures[++that.currentPictureIndex].url + that.currentDefinition;
                }
            }
            //记录阅读历史
            that.recordHistory();
        },
        //点击菜单
        menuClick: function (definition, name) {
            if (name) {
                this.showMenu = false;
                this.currentDefinition = definition;
                localStorage.setItem("picture-definition", definition);
                this.currentPictureUrl = this.pictures[this.currentPictureIndex].url + this.currentDefinition;
                this.loadNext();
            }
        },
        //加载上2张图片
        loadPret: function () {
            let that = this;
            if (that.currentPictureIndex > 0) {
                let imgObj = new Image();
                imgObj.src = that.pictures[that.currentPictureIndex - 1].url + that.currentDefinition;
            }
            if (that.currentPictureIndex > 1) {
                let imgObj = new Image();
                imgObj.src = that.pictures[that.currentPictureIndex - 2].url + that.currentDefinition;
            }
        },
        //加载下2张图片
        loadNext: function () {
            let that = this;
            if (that.currentPictureIndex < that.maxPictureIndex - 1) {
                let imgObj = new Image();
                imgObj.src = that.pictures[that.currentPictureIndex + 1].url + that.currentDefinition;
            }
            if (that.currentPictureIndex < that.maxPictureIndex - 2) {
                let imgObj = new Image();
                imgObj.src = that.pictures[that.currentPictureIndex + 2].url + that.currentDefinition;
            }
        },
        //记录阅读历史
        recordHistory: function () {
            let readHistory = {
                opusName: this.opus.name,
                chapterid: this.chapter.id,
                chapterName: this.chapter.name,
                pictureIndex: this.currentPictureIndex + 1
            };
            localStorage.setItem("read-history", JSON.stringify(readHistory));
        },
        //隐藏操作提示
        hidePrompt: function () {
            this.showPrompt = false;
            localStorage.setItem("has-show-prompt", "yes");
        },
        //阅读下一卷
        readNextChapter: function () {
            if (this.nextChapter.id) {
                this.$router.replace("/picture/" + this.nextChapter.id);
                this.$router.go(0);
            }
            else {
                //如果已经阅读完了，就删除历史并跳回首页
                localStorage.removeItem("read-history");
                this.$router.push("/home");
            }
        }
    },
    mounted: function () {
        let that = this;

        let readHistory = JSON.parse(localStorage.getItem("read-history")) || {};

        if (+readHistory.chapterid == that.chapter.id) {
            that.currentPictureIndex = +readHistory.pictureIndex - 1;
        }

        that.$api
            .get("/getpicture", {
                chapterid: that.chapter.id
            })
            .then(function (data) {
                that.pictures = data.pictures;
                that.opus = data.opus;
                that.chapter = data.chapter;
                that.nextChapter = data.nextChapter;
                that.maxPictureIndex = that.pictures.length;
                if (that.maxPictureIndex > 0) {
                    that.currentPictureUrl = that.pictures[that.currentPictureIndex].url + that.currentDefinition;
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
.menu {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;

    .header-menu {
        height: 60px;
        line-height: 60px;
        overflow: hidden;
        pointer-events: none;
    }
    .definition-menu {
        position: absolute;
        top: 17px;
        right: 20px;
        padding: 5px 30px 5px 15px;
        border: 1px solid #fb7279;
        border-radius: 3px;
        pointer-events: all;
        background: url("../assets/image/arrow-bottom.png") 0 0 no-repeat;
        background-size: 11px;
        background-position: right 8px center;
        color: #fb7279;
        z-index: 3;
    }

    .mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
    }
}
.picture-img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
.img-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    text-align: center;
    z-index: 2;
    pointer-events: none;

    .picture-img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
}
.animate-transition {
    transition: transform 0.3s;
}

.controller-area {
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
    pointer-events: none;
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
.continue-read-next-chapter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    text-align: center;
    background: #000;
    z-index: 9;
}
.readnext-btn {
    margin-top: 75vh;
    padding: 5px 25px;
    border: 1px solid #fb7279;
    border-radius: 4px;
    color: #fb7279;
}
.readnext-close-btn {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #fb7279;
    border-radius: 100%;
    color: #fb7279;
    text-align: center;
}
</style>