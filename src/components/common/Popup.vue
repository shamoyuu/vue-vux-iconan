<template>
    <transition name="fade">
        <div class="popup-area" v-show="show">
            <div class="close-btn" type="button" @click="show = false">×</div>
            <span @click="foo">继续看{{popusInfo.opusName | substr(8)}}{{popusInfo.chapterName | substr(8)}}</span>
        </div>
    </transition>
</template>

<script>
import router from "@/tools/router";

export default {
    props: {
        show: Boolean
    },
    data() {
        return {
            popusInfo: JSON.parse(localStorage.getItem("read-history"))
        };
    },
    methods: {
        foo: function () {
            let that = this;
            that.show = false;
            router.push({
                path: "/picture/" + that.popusInfo.chapterid
            });
        }
    },
    mounted: function () {
        //localStorage.removeItem("read-history");
    }
};
</script>

<style scoped>
.popup-area {
    position: fixed;
    bottom: 55px;
    left: 0;
    width: 90vw;
    height: 9vh;
    line-height: 9vh;
    margin: 0 5vw;
    border: 1px solid #fb7279;
    border-radius: 6px;
    background: #fff;
    text-align: center;
    vertical-align: middle;
    color: #fb7279;
    text-decoration: underline;
    z-index: 9;
}
.close-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    line-height: 20px;
    padding: 5px;
    text-align: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s;
}
.fade-enter,
.fade-leave-active {
    transform: translate3d(0, 25px, 0) scale3d(1, 0, 1);
    opacity: 0.2;
}
</style>
