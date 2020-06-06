<template>
  <div class="container">
    <div class="header">
      <div class="menu" @click="show=true">
        <span class="iconfont icon-chakanxiangqinggengduo"></span>
      </div>
      <div class="nav">
        <router-link class="navItem" active-class="active" v-for="(item,index) in navList" :key="item+index" :to="item.link">{{item.nav}}</router-link>
      </div>
      <div class="search">
        <span class="iconfont icon-sousuochazhao"></span>
      </div>
    </div>
    <router-view></router-view>
    <van-popup v-model="show" position="left" :style="{ width: '80%',height: '100%' }" >
      <div class="center">
        <div class="user">
          <img :src="$store.state.userInfo.avatar">
          <span class="name">{{$store.state.userInfo.userName}}</span>
        </div>
        <div class="userNav">
          <dl v-for="(item,index) in userNav">
            <dt class="iconfont" :class="item.class"></dt>
            <dd>{{item.text}}</dd>
          </dl>
        </div>
        <div class="create">
          <span class="iconfont icon-bulb"></span>
          <span class="create_text">创作者中心</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-huatong"></span>
          <span class="create_text">听歌识曲</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-piao"></span>
          <span class="create_text">演出</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-gouwuche"></span>
          <span class="create_text">商城</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-fujin"></span>
          <span class="create_text">附近的人</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-cailing"></span>
          <span class="create_text">口袋彩铃</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-dingdan"></span>
          <span class="create_text">我的订单</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-ico_dingshitixing"></span>
          <span class="create_text">定时停止播放</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-saoyisao"></span>
          <span class="create_text">扫一扫</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-yinle"></span>
          <span class="create_text">音乐闹钟</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-yun"></span>
          <span class="create_text">音乐云盘</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-mianliuliangfuwu"></span>
          <span class="create_text">在线听歌免流量</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-zhuanji"></span>
          <span class="create_text">音乐红包</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-youhuiquan"></span>
          <span class="create_text">优惠券</span>
        </div>
        <div class="normal">
          <span class="iconfont icon-anquan"></span>
          <span class="create_text">青少年模式</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        show:true,
        navList: [
          {nav: '我的',link: '/index/my'},
          {nav: '发现',link: '/index/find'},
          {nav: '云村',link: '/index/cloud'}
        ],
        userNav:[
          {
            class: 'icon-tubiao209',
            text: '我的消息'
          },
          {
            class: 'icon-haoyou',
            text: '我的好友'
          },
          {
            class: 'icon-zhuye',
            text: '个人主页'
          },
          {
            class: 'icon-yifu',
            text: '个性装扮'
          },
        ]
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    .header{
      width: 100%;
      height: 6vh;
      display: flex;
      background: #fff;
      .menu{
        width: 15%;
        height: 100%;
        text-align: center;
        line-height: 6vh;
        span{
          font-size: 24px;
        }
      }
      .nav{
        width: 50%;
        margin: auto;
        display: flex;
        flex-wrap: nowrap;
        .navItem{
          width: 20%;
          text-align: center;
          line-height: 6vh;
          margin: auto;
        }
        .active{
          font-weight: bold;
        }
      }
      .search{
        width: 15%;
        height: 100%;
        text-align: center;
        line-height: 6vh;
        span{
          font-size: 24px;
        }
      }
    }
    .center{
      width: 100%;
      height: 100vh;
      overflow-y: scroll;
      background: #fff;
      .user{
        width: 94%;
        margin: 10px auto;
        display: flex;
        img{
          display: block;
          width: 8vh;
          height: 8vh;
          border-radius: 50%;
          margin-right: 10px;
        }
        .name{
          line-height: 8vh;
          font-size: 18px;
          font-weight: 500;
        }
      }
      .userNav{
        width: 94%;
        margin: 10px auto;
        display: flex;
        dl{
          width: 22%;
          height: 8vh;
          flex-shrink: 0;
          margin: auto;
          dt{
            font-size: 28px;
            color: red;
            text-align: center;
            line-height: 6vh;
            margin-bottom: 5px;
          }
          dd{
            font-size: 13px;
            text-align: center;
          }
        }
      }
      .create{
        width: 94%;
        height: 10vh;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        margin: 20px auto 0;
        line-height: 10vh;
        .iconfont{
          font-size: 26px;
          padding: 0 10px;
        }
        .create_text{
          font-size: 16px;
        }
      }
      .normal{
        width: 94%;
        height: 8vh;
        margin: 0 auto;
        line-height: 8vh;
        display: flex;
        .iconfont{
          font-size: 26px;
          padding: 0 10px;
        }
        .create_text{
          font-size: 16px;
          line-height: 8vh;
        }
      }
    }
  }
</style>
