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
                    title: "标题",
                    summary: "这是一个很好看的漫画",
                    imgs: [
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover1.jpg",
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover2.jpg",
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover3.jpg"
                    ]
                },
                {
                    id: 2,
                    title: "标题标题标题",
                    summary: "这是一个很好看的漫画，可能很好看，应该很好看",
                    imgs: [
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover3.jpg",
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover1.jpg",
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover2.jpg"
                    ]
                },
                {
                    id: 1,
                    title: "标题标题标题标题标题",
                    summary:
                        "这是一个很好看的漫画，可能很好看，可能很好看，应该很好看",
                    imgs: [
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover1.jpg",
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover3.jpg",
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover2.jpg"
                    ]
                },
                {
                    id: 2,
                    title: "标题标题标题",
                    summary: "这是一个很好看的漫画，应该很好看",
                    imgs: [
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover3.jpg",
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover1.jpg",
                        "http://shamoyuu.bj.bcebos.com/iconan%2Ftest%2Fconan-cover3.jpg"
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