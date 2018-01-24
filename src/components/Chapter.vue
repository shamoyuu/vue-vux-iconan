<template>
    <div>
        <h1>{{count}}</h1>
        <hr>
        <button @click="$store.commit('add')">加</button>
        <hr>
        <button @click="$store.commit('reduce')">减</button>
        <hr>
        <button @click="foo">查看</button>
        <hr> {{author}}
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
    data() {
        return {};
    },
    methods: {
        foo: function() {
            console.info(this.$store.state.count);
        }
    },
    mounted: function() {},
    computed: {
        ...mapState(["count"]),
        ...mapGetters(["author"])
    }
};
</script>

<style scoped>

</style>