<template>
    <div v-test-directive class="opus-view">
        <hide-nav-bar></hide-nav-bar>
        <header-bar></header-bar>
        <div class="opus-body">
            <img :src="opus.cover" class="opus-body-content-bcg-img">
            <div class="opus-body-content">
                <img :src="opus.cover" class="opus-body-content-img">
                <div class="opus-body-content-txt" v-show="!!opus.name">
                    <h1 class="opus-name">{{opus.name}}</h1>
                    <div class="opus-author">作者：{{opus.author}}</div>
                    <div>
                        <rater v-model="opus.score" star="♡" active-color="#fb7279" :font-size="15" :margin="0" disabled></rater>
                        <span class="opus-popularity">{{opus.popularity}}人已阅</span>
                    </div>
                </div>
            </div>
            <div class="opus-body-jaw">
                <button @click="read()" class="read-btn" type="button">开始阅读</button>
            </div>
        </div>
        <div class="button-tab-area">
            <tab custom-bar-width="20px">
                <tab-item selected @on-item-click="onItemClick">目录</tab-item>
                <tab-item @on-item-click="onItemClick">详情</tab-item>
            </tab>
        </div>
        <div class="chapter-area" v-show="tabIndex == 0">
            <div class="chapter" @click="read(item.id, item.name)" v-for="item in chapters" :key="item.id">{{item.name}}</div>
        </div>
        <div class="summary-area" v-show="tabIndex == 1">
            {{opus.summary}}
        </div>
    </div>
</template>

<script>
import { Tab, TabItem, Flexbox, FlexboxItem, Rater } from "vux";
import HideNavBar from "@/components/common/HideNavBar";
import HeaderBar from "@/components/common/HeaderBar";

export default {
    name: "Opus",
    data() {
        return {
            opus: {
                cover: "http://iconan.bj.bcebos.com/r-icon.jpg@!z5"
            },
            chapters: [],
            tabIndex: 0
        };
    },
    methods: {
        read: function (chapterid, chapterName) {
            let that = this;
            if (chapterid) {
                this.$router.push({
                    path: "/picture/" + chapterid
                });
            } else if (that.chapters.length > 0) {
                this.$router.push({
                    path: "/picture/" + that.chapters[0].id
                });
            }
        },
        onItemClick: function (index) {
            this.tabIndex = index;
        }
    },
    mounted: function () {
        let that = this;
        that.$api
            .get("/getopus", {
                opusid: that.$route.params.opusid
            })
            .then(function (data) {
                that.opus = data.opus;
                that.chapters = data.chapters;
            })
            .catch(that.$errorHandle);
    },
    components: {
        Tab,
        TabItem,
        HideNavBar,
        HeaderBar,
        Flexbox,
        FlexboxItem,
        Rater
    }
};
</script>

<style scoped lang="less">
.opus-view {
    position: relative;
}
.opus-body {
    position: relative;
    width: 100%;
    height: 107.6vw;
    background: #717171;
}
.opus-body-content {
    position: relative;
    padding-top: 14.7vw;
    text-align: center;
}
.opus-body-content-bcg-img {
    position: absolute;
    width: 100%;
    vertical-align: middle;
    filter: blur(50px);
}
.opus-body-content-img {
    width: 34vw;
}

.opus-name {
    font-size: 8.53vw;
    color: #fff;
    -webkit-text-stroke: 2px #333;
}
.opus-author {
    font-size: 3.73vw;
    color: #ccc;
    text-shadow: 0px 0px 3px #333;
}
.opus-body-jaw {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 16vw;
    background: url("../assets/image/opus-main-top.png") 0 0 no-repeat;
    background-size: 100%;
    text-align: center;
}
.read-btn {
    padding: 2.8vw 9vw;
    margin-top: 10px;
    border-radius: 100px;
    background: #fb7279;
    font-size: 4.27vw;
    color: #fff;
}

.button-tab-area {
    position: relative;
    padding: 0 10vw;
    background: #fff;
}

.chapter-area {
    position: relative;
    padding-bottom: 20px;
    justify-content: space-between;
    flex-flow: row wrap;
    background: #fff;
}

.chapter {
    display: inline-block;
    width: 27vw;
    padding: 2vw 1.5vw;
    margin: 2vw 0 0 2vw;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    text-align: center;
    color: #fb7279;
}

.summary-area {
    position: relative;
    padding: 4vw;
    background: #fff;
}
.opus-popularity {
    font-size: 15px;
    color: #fb7279;
}
</style>