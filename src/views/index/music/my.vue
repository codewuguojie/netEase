<template>
    <div class="my">
        <div class="user">
            <div class="user_img"><img :src="user_img"></div>
            <div class="user_info">
                <div class="user_msg"><p class="nick_name">{{nick_name}}</p><p class="user_btn">开通黑胶vip</p></div>
                <div class="user_level"><p :class="{vip_yes:user_vip,vip_no:!user_vip}">黑胶vip</p><i class="vip_level">LV.{{user_level}}</i></div>
            </div>
        </div>
        <div class="my_nav">
            <div class="nav_item" v-for="(item,index) in nav" :key="item+index">
                <span class="icon_title iconfont" :class="item.class"></span>
                <p class="nav_btn">{{item.item}}</p>
            </div>
        </div>
        <div class="content">
            <div class="title">
                我的音乐
            </div>
            <div class="recommend">
                <div class="rec_item" v-for="(item,index) in recommend" :key="item+index">
                    <span class="custom iconfont" :class="item.class"></span>
                    <p class="text">{{item.text}}</p>
                    <p class="tips">{{item.tips}}</p>
                </div>
            </div>
            <div class="record">
                <div class="title">
                    <h5>最近播放</h5>
                    <p>更多</p>
                </div>
                <div class="record_list">
                    <div class="record_item" v-for="(item,index) in record" :key="item+index">
                        <div class="play">
                            <img class="play_bg" :src="item.img">
                            <span class="iconfont icon-bofang_huaban
"></span>
                        </div>
                        <div class="play_info">
                            <p class="text">{{item.text}}</p>
                            <p class="tips">{{item.tips}}</p>
                        </div>
                    </div>
                </div>
                <div class="title">
                    <h5>收藏歌单</h5>
                    <p>更多</p>
                </div>
                <div class="record_list">
                    <div class="record_item" v-for="(item,index) in record" :key="item+index">
                        <div class="play">
                            <img class="play_bg" :src="item.img">
                            <span class="iconfont icon-bofang_huaban
"></span>
                        </div>
                        <div class="play_info">
                            <p class="text">{{item.text}}</p>
                            <p class="tips">{{item.tips}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <play></play>
    </div>
</template>

<script>
    import play from '../../../components/play'
    export default {
        name: "my",
        components:{
          play
        },
        data(){
            return{
                user_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591002119819&di=93974d3cc8dd4bfc016c17b58aeb7edf&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-deff985cfcb7690bc71fdf8676438146_hd.jpg',   // 用户头像
                nick_name: '不管多远一起走',   //用户昵称
                user_level: 7,   // 用户vip等级
                user_vip: 1,
                nav:[
                    {class: 'icon-yinle',item: '本地音乐'},
                    {class: 'icon-download-1-copy',item: '下载管理'},
                    {class: 'icon-diantai',item: '我的电台'},
                    {class: 'icon-shoucang',item: '我的收藏'},
                    {class: 'icon-chakantieziguanzhu',item: '关注新歌'},
                ],
                recommend:[
                    {class: 'icon-xin',text: '我喜欢的音乐',tips: '心动模式'},
                    {class: 'icon-diantai',text: '私人FM',tips: '你的私人曲库'},
                    {class: 'icon-liebiao',text: '最嗨电音',tips: '专业电音平台'},
                    {class: 'icon-a',text: 'ACG专区',tips: '好听好玩ACG'},
                    {class: 'icon-guigetubiao-',text: '古典专区',tips: '专业古典大全'},
                ],
                record:[
                    {img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3264365282,3478722125&fm=11&gp=0.jpg', text: '全部已播放', tips: '300首'},
                    {img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1057544708,3299220796&fm=26&gp=0.jpg', text: '歌单：看小说听的歌曲', tips: '继续播放'},
                    {img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3264365282,3478722125&fm=11&gp=0.jpg', text: '[欧美流行]那些你想找都找不到的歌', tips: '192首'},
                    {img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1057544708,3299220796&fm=26&gp=0.jpg', text: '歌单：永远听不腻的英文歌', tips: '98首'}
                ]
            }
        }
    }
</script>

<style scoped lang="less">
.my{
    width: 100%;
    height: 94vh;
    overflow: hidden;
    background: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1808076491,1297961742&fm=26&gp=0.jpg") no-repeat;
    background-size: 100% 100%;
    .user{
        width: 94%;
        height: 10vh;
        margin: 10px auto 5px;
        display: flex;
        flex-wrap: nowrap;
        color: #fff;
        .user_img{
            width: 8vh;
            height: 8vh;
            border-radius: 50%;
            margin-right: 2vh;
            img{
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .user_info{
            height: 8vh;
            width: 80%;
            margin: 1vh 0;
            .user_msg{
                height: 3vh;
                clear: both;
                margin-bottom: 5px;
                .nick_name{
                    float: left;
                }
                .user_btn{
                    float: right;
                    font-size: 12px;
                    color: #aaa;
                }
            }
            .user_level{
                height: 3vh;
                display: flex;
                .vip_yes{
                    background: red;
                    width: 9vh;
                    height: 3vh;
                    text-align: center;
                    line-height: 3vh;
                    border-radius: 10px;
                    font-size: 12px;
                    color: #fff;
                    font-weight: bold;
                }
                .vip_no{
                    background: #ccc;
                    width: 9vh;
                    height: 3vh;
                    text-align: center;
                    line-height: 3vh;
                    border-radius: 10px;
                    font-size: 12px;
                    color: rgba(0,0,0,.6);
                    font-weight: bold;
                }
                .vip_level{
                    margin-left: 10px;
                    background: #2B2B2B;
                    width: 6vh;
                    height: 3vh;
                    text-align: center;
                    line-height: 3vh;
                    border-radius: 10px;
                    font-size: 12px;
                    color: #eee;
                }
            }
        }
    }
    .my_nav{
        color: #fff;
        width: 94%;
        height: 10vh;
        margin: 0 auto 10px;
        display: flex;
        flex-wrap: nowrap;
        color: #fff;
        .nav_item{
            width: 20%;
            height: 10vh;
            margin: auto;
            .icon_title{
                display: block;
                width: 100%;
                height: 6vh;
                margin-bottom: 1vh;
                font-size: 30px;
                text-align: center;
                line-height: 7vh;
            }
            .nav_btn{
                width: 100%;
                height: 2vh;
                text-align: center;
                line-height: 2vh;
                font-size: 14px;
            }
        }
    }
    .content{
        width: 100%;
        height: 70.3vh;
        overflow-y: scroll;
        background: #fff;
        border-radius: 15px 15px 0 0;
        .title{
            width: 94%;
            margin: 10px auto;
            font-size: 14px;
            font-weight: bold;
        }
        .recommend{
            width: 94%;
            margin: 10px auto;
            height: 18vh;
            display: flex;
            overflow-x: scroll;
            .rec_item{
                background: #999;
                flex-shrink: 0;
                width: 25%;
                height: 100%;
                margin: 0 5px;
                border-radius: 10px;
                .custom{
                    display: block;
                    width: 100%;
                    height: 4vh;
                    text-align: center;
                    font-size: 24px;
                    margin-top: 4vh;
                }
                .text{
                    font-size: 12px;
                    margin-top: 5px;
                    text-align: center;
                }
                .tips{
                    font-size: 12px;
                    margin-top: 25px;
                    text-align: center;
                    color: #ccc;
                }
            }
            .rec_item:nth-child(1){
                background: #000;
                color: #fff;
                .custom{
                    color: red;
                }
            }
            .rec_item:nth-child(2){
                background: #000;
                color: #fff;
                .custom{
                    color: #fff;
                }
            }
        }
        .record{
            width: 100%;
            margin-bottom: 9vh;
            .title{
                width: 94%;
                height: 3vh;
                margin: 10px auto;
                clear: both;
                h5{
                    float: left;
                }
                p{
                    float: right;
                    font-weight: 100;
                    font-size: 12px;
                    color: #666;
                }
            }
            .record_list{
                overflow: hidden;
                width: 94%;
                margin: 10px auto;
                .record_item{
                    float: left;
                    width: 46%;
                    margin: 5px 4% 5px 0;
                    height: 8vh;
                    display: flex;
                    flex-wrap: nowrap;
                    .play{
                        height: 8vh;
                        border-radius: 10px;
                        position: relative;
                        margin-right: 2px;
                        .play_bg{
                            display: block;
                            width: 8vh;
                            height: 100%;
                            border-radius: 10px;
                        }
                        span{
                            position: absolute;
                            font-size: 26px;
                            width: 4vh;
                            height: 4vh;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            margin: auto;
                        }
                    }
                    .play_info{
                        font-size: 14px;
                        width: 16vh;
                        .text{
                            margin: 5px;
                            font-size: 14px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            line-clamp: 2;
                            -webkit-box-orient: vertical;
                            max-height: 5vh;
                        }
                        .tips{
                            padding: 0 5px;
                            font-size: 12px;
                            color: #999;
                        }
                    }
                }
            }
        }
    }
}
</style>
