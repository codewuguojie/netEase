import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
const config = {
    plugins: [createPersistedState()],
    state: {
        isLogin: false,
        username: '',
        token: '',
        current_song: {
          name: '歌名11111111111111111111111111111111111111111111111',
          author: '演唱者',
          img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1951756555,2588167396&fm=26&gp=0.jpg'
        },
        userInfo: {
            userName: '不管多远一起走',
            avatar: 'http://b-ssl.duitang.com/uploads/item/201707/10/20170710210234_y3Kf5.jpeg'
        },
        current_list: []
    },
    getters: {
        isLogin: state => state.isLogin,
        token: state => state.token,
        username: state => state.username
    },
    mutations: {
        updateLogin(state, payload) {
            state.isLogin = payload;
        },
        updateToken(state, payload) {
            state.token = payload;
        },
        updateUsername(state, payload) {
            state.username = payload;
        },
        updateUserInfo(state,userInfo){
            state.userInfo = userInfo
        },
        getCurrentSong(state,list) {
            state.current_list = list
        }
    },
    actions: {
        setUserInfo(state,userInfo){
            commit('updateUserInfo',userInfo)
        },
        setUsername(state,name){
          commit('updateUsername',name)
        },
        setCurrentSong(state,list) {
            commit('getCurrentSong',list)
        }
    }
}
const store = new Vuex.Store(config);
export default store;
