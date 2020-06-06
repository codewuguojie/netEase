<template>
    <div class="play_area">
        <div class="song_img"><img :src="$store.state.current_song.img"></div>
        <div class="song_info" @click="toPlay()">
            <p class="song_name">
                <van-notice-bar>
                    {{$store.state.current_song.name}}
                </van-notice-bar>
            </p>
            <p class="song_author">{{$store.state.current_song.author}}</p>
        </div>
        <span class="iconfont" :class="{'icon-bofang_huaban':!playing,'icon-zanting':playing}" @click="togger()"></span>
        <span class="iconfont icon-gedan"></span>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NoticeBar } from 'vant';

    Vue.use(NoticeBar);
    export default {
        name: "play",
        data(){
            return{
                playing: false
            }
        },
        methods:{
            toPlay(){
              this.$router.push()
            },
            togger(){
                this.playing = !this.playing
            }
        }
    }
</script>

<style scoped lang="less">
    .play_area{
        width: 100%;
        position: fixed;
        left: 0;
        bottom: -1px;
        height: 8vh;
        background: #fff;
        display: flex;
        .song_img{
            width: 6vh;
            height: 6vh;
            margin: 1vh 10px;
            border-radius: 50%;
            img{
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .song_info{
            width: 56%;
            height: 6vh;
            margin: 1vh 0;
            .song_name{
                .van-notice-bar{
                    height: 20px !important;
                    color: #000 !important;
                    font-size: 12px !important;
                    background: none !important;
                    padding: 0 !important;
                }
            }
            .song_author{
                margin-top: 5px;
                font-size: 12px;
            }
        }
        .iconfont{
            font-size: 30px;
            line-height: 8vh;
            margin: 0 auto;
        }
    }
</style>
