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
            swiperList: [],
            opuses: []
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
    },
    mounted: function() {
        let that = this;
        that.$api
            .get("/home")
            .then(function(data) {
                that.swiperList = data.swiperList;
                that.opuses = data.opuses;
            })
            .catch(that.$errorHandle);
    }
};
</script>

<style scoped>

</style>