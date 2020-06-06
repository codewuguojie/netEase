<template>
    <div class="cloud">
        <div class="time">
            <div  class="left">
                <div class="hot">云村热评墙</div>
                <div class="message"><span class="user_name">{{$store.state.userInfo.userName}}</span><span>，这里的评论总有一条让你感触</span></div>
            </div>
            <div class="right">
                <p class="month">{{initTime.month}}</p>
                <p class="day">{{initTime.day}}</p>
            </div>
        </div>
        <div class="content">
            <div class="list_item" :class="{attr:item.state===0,story:item.state===1,new:item.state===2}" v-for="(item,index) in list">
                <div style="width: 100%;height: 100%;">
                    <img class="song_img" :src="item.img">
                    <div class="tips" v-if="item.tips">{{item.tips}}</div>
                    <div class="user_info" v-if="item.userInfo">
                        <div class="info_box">
                            <img class="avatar" :src="item.userInfo.avatar">
                            <span class="nick_name">{{item.userInfo.nickName}}</span>
                        </div>
                        <span class="num">{{item.userInfo.num}}赞</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cloud",
        data(){
            return{
                list:[
                    {
                      img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=730953933,1744509485&fm=26&gp=0.jpg',
                      state: 0
                    },
                    {
                        img: 'http://img.duoziwang.com/2016/12/17/10255243994.jpg',
                        state: 1,
                        tips: '有些人相遇就已经彼此成就了对方，从相遇的那天开始',
                        userInfo:{
                            avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1094769585,2056471422&fm=26&gp=0.jpg',
                            nickName: '不管多远一起走',
                            num: '302'
                        }
                    },
                    {
                        img: 'http://img4.imgtn.bdimg.com/it/u=3202483240,2016057232&fm=15&gp=0.jpg',
                        state: 2,
                        tips: '有些人相遇就已经成就了对方，从相遇的那天开始',
                    },
                    {
                        img: 'http://img4.imgtn.bdimg.com/it/u=3116768879,1582333797&fm=15&gp=0.jpg',
                        state: 1,
                        tips: '有些人相遇就已经彼此成就了对方，从相遇的那天开始',
                        userInfo:{
                            avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1094769585,2056471422&fm=26&gp=0.jpg',
                            nickName: '不管多远一起走',
                            num: '302'
                        }
                    }
                ]
            }
        },
        computed:{
            initTime:function () {
                let date = new Date()
                let arr = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
                return {
                    month: arr[date.getMonth()],
                    day: date.getDate()<10?`0${date.getDate()}`:date.getDate()
                }
            }
        },
        methods:{

        }
    }
</script>

<style scoped lang="less">
    .cloud{
        width: 100%;
        height: 94vh;
        overflow-y: scroll;
        background: #F8F8F8;
        .time{
            width: 94%;
            height: 12vh;
            margin: 1vh auto;
            border-radius: 6px;
            background: -webkit-linear-gradient(left,#A8AEA2,#879389);
            background: -o-linear-gradient(left,#A8AEA2,#879389);
            background: -moz-linear-gradient(left,#A8AEA2,#879389);
            background: -mos-linear-gradient(left,#A8AEA2,#879389);
            background: linear-gradient(left,#A8AEA2,#879389);
            display: flex;
            .left{
                width: 70%;
                margin: auto;
                .hot{
                    margin: 10px;
                    color: #fff;
                    font-size: 18px;
                }
                .message{
                    margin: 10px;
                    font-size: 13px;
                    color: #ccc;
                    display: flex;
                    .user_name{
                        width: 16%;
                        line-height: 18px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                    }
                }
            }
            .right{
                width: 20%;
                margin: auto;
                text-align: center;
                color: #fff;
                .month{
                    line-height: 26px;
                }
                .day{
                    font-size: 22px;
                }
            }
        }
        .content{
            width: 94%;
            margin: 0 auto;
            column-count: 2;
            -moz-column-count:2; /* Firefox */
            -webkit-column-count:2; /* Safari 和 Chrome */
            column-gap:10px;
            -moz-column-gap:10px;
            -webkit-column-gap:10px;
            .list_item{
                width: 100%;
                border-radius: 10px;
                box-shadow: 0 0 3px 3px #ccc;
                break-inside: avoid;
                margin-bottom: 10px;
            }
            .attr{
                height: 32vh;
                .song_img{
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }
            .story{
                height: 38vh;
                .song_img{
                    display: block;
                    height: 26vh;
                    width: 100%;
                    border-radius: 10px 10px 0 0;
                }
                .tips{
                    margin: 5px 0;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    line-height: 20px;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 0 5px;
                }
                .user_info{
                    display: flex;
                    padding: 0 5px;
                    margin-top: 1vh;
                    color: #666;
                    .info_box{
                        width: 80%;
                        height: 4vh;
                        display: flex;
                        .avatar{
                            display: block;
                            width: 3vh;
                            height: 3vh;
                            border-radius: 50%;
                            margin-top: 0.5vh;
                            margin-right: 1vh;
                        }
                        .nick_name{
                            line-height: 4vh;
                            font-size: 13px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                        }
                    }
                    .num{
                        flex-shrink: 0;
                        line-height: 4vh;
                        font-size: 13px;
                    }
                }
            }
            .new{
                height: 38vh;
                .song_img{
                    display: block;
                    height: 30vh;
                    width: 100%;
                    border-radius: 10px 10px 0 0;
                }
                .tips{
                    margin: 5px 0;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    line-height: 20px;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 0 5px;
                }
            }
        }
    }
</style>
