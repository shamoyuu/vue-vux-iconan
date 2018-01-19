<template>
    <div class="opus">
        <h4 class="title">{{opus.title}}</h4>
        <div class="summary">{{opus.summary}}</div>
        <div class="opus-imgs">
            <img :src="opus.imgs[0]" class="opus-img">
            <img :src="opus.imgs[1]" class="opus-img">
            <img :src="opus.imgs[2]" class="opus-img">
        </div>
    </div>
</template>
<script>
    export default {
        props: ["opus"]
    }
</script>
<style scoped lang="less">
    .opus {
        padding: 3vw 2.22vw 5vw 2.22vw;
        border-bottom: 2px solid #efefef;
    }
    .summary {
        color: #6a6a6a;
        font-size: 14px;
    }
    .opus-imgs {
        display: flex;
        justify-content: space-between;
        
        .opus-img {
            width: 30.93vw;
            height: 30.93vw;
            border-radius: 7px;
        }
    }
</style>