import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
    count: 1,
    author: "静茹♂鱼",
    ifShowNavBar: true
};

const mutations = {
    add(state) {
        state.count += 1;
    },
    reduce(state) {
        state.count -= 1;
    },
    hideNavBar(state) {
        state.ifShowNavBar = false;
    },
    showNavBar(state) {
        state.ifShowNavBar = true;
    }
};

const getters = {
    author(state) {
        return "❤❤❤" + state.author + "❤❤❤";
    }
};

export default new Vuex.Store({
    state,
    mutations,
    getters
});
