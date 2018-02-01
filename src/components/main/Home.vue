<template>
    <div>
        <swiper :list="swiperList" auto loop :aspect-ratio="350/750" @click="goto"></swiper>
        <recommend :opus="o" v-for="(o, index) in opuses" :key="index"></recommend>
    </div>
</template>

<script>
import { Swiper, SwiperItem } from "vux";
import Recommend from "@/components/main/home/Recommend";

export default {
    data() {
        return {
            swiperList: [
                {
                    img: "http://shamoyuu.bj.bcebos.com/iconan%2Fmain%2F1.jpg",
                    title: "标题1",
                    url: "javascript:"
                },
                {
                    img: "http://shamoyuu.bj.bcebos.com/iconan%2Fmain%2F2.jpg",
                    title: "标题2",
                    url: "/home"
                },
                {
                    img: "http://shamoyuu.bj.bcebos.com/iconan%2Fmain%2F3.jpg",
                    title: "标题3",
                    url: "/"
                }
            ],
            opuses: [
                {
                    id: 1,
                    title: "名侦探柯南",
                    summary: "死神小学生来了~",
                    imgs: [
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg",
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg",
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg"
                    ]
                },
                {
                    id: 2,
                    title: "七龙珠",
                    summary:
                        "鸟山明的《龙珠》在日本流行后，他因居住地送稿不方便而准备迁离原居地，当地政府为了挽留他，特地在鸟山明家到机场之间修了一条高速公路。",
                    imgs: [
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg",
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg",
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg"
                    ]
                },
                {
                    id: 3,
                    title: "仙逆",
                    summary:
                        "顺为凡，逆则仙，只在心中一念间……修真，到底是修的什么？修道，修仙，修真。神法，道法，仙法。",
                    imgs: [
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg",
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg",
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg"
                    ]
                },
                {
                    id: 4,
                    title: "不想做英雄的我成为了美少女战士",
                    summary:
                        "我也没看过，好像是个搞笑漫画，比较短，可以看一看。",
                    imgs: [
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg",
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg",
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg"
                    ]
                },
                {
                    id: 5,
                    title: "哆啦A梦",
                    summary:
                        "哆啦A梦的创造要追溯到1969年的某个截稿日，大师藤子·F·不二雄的家里突然闯进了一只小猫，于是老师灵光一现，把猫的形象和不倒翁结合起来，就创造了带给我们欢乐的哆啦A梦。",
                    imgs: [
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg",
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg",
                        "http://iconan.bj.bcebos.com/s-icon%20.jpg"
                    ]
                }
            ]
        };
    },
    methods: {
        goto: function(type, id) {
            console.info(arguments);
        }
    },
    components: {
        Swiper,
        SwiperItem,
        Recommend
    }
};
</script>

<style scoped>

</style>