<template>
    <div v-test-directive class="opus-view">
        <hide-nav-bar></hide-nav-bar>
        <header-bar></header-bar>
        <div class="opus-body">
            <img :src="opus.cover" class="opus-body-content-bcg-img">
            <div class="opus-body-content">
                <img :src="opus.cover" class="opus-body-content-img">
                <div class="opus-body-content-txt">
                    <h1 class="opus-name">{{opus.name}}</h1>
                    <div class="opus-author">作者：{{opus.author}}</div>
                    <div>
                        <rater v-model="opus.score" star="♡" active-color="#fb7279" :font-size="15" :margin="0" disabled></rater>
                        <span class="opus-popularity">{{opus.popularity}}人已阅</span>
                    </div>
                </div>
            </div>
            <div class="opus-body-jaw">
                <button @click="read" class="read-btn" type="button">开始阅读</button>
            </div>
        </div>
        <div class="button-tab-area">
            <tab custom-bar-width="20px">
                <tab-item selected @on-item-click="onItemClick">目录</tab-item>
                <tab-item @on-item-click="onItemClick">详情</tab-item>
            </tab>
        </div>
        <div class="chapter-area" v-show="tabIndex == 0">
            <div class="chapter" v-for="item in chapters" :key="item.id">{{item.name}}</div>
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
    data() {
        return {
            opus: {
                name: "名侦探柯南",
                summary:
                    "高中生侦探工藤新一，被称为“日本警察的救世主”、“平成年代的福尔摩斯”。一次在与青梅竹马的女友毛利兰...",
                author: "青山刚昌",
                type: 0,
                cover: "http://iconan.bj.bcebos.com/1%2Fcover.jpg",
                popularity: "100万+",
                score: 4.5
            },
            chapters: [
                {
                    id: 1,
                    name: "第一卷"
                },
                {
                    id: 2,
                    name: "第二卷"
                },
                {
                    id: 3,
                    name: "第三卷"
                },
                {
                    id: 4,
                    name: "第四卷"
                },
                {
                    id: 5,
                    name: "第五卷"
                }
            ],
            tabIndex: 0
        };
    },
    methods: {
        read: function() {
            console.info("开始阅读");
        },
        onItemClick: function(index) {
            this.tabIndex = index;
        }
    },
    mounted: function() {},
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
    background: url("../assets/images/opus-main-top.png") 0 0 no-repeat;
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