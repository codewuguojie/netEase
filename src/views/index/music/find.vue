<template>
    <div class="find">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
            <van-swipe-item v-for="(item,index) in swipe" :key="item+index">
                <img :src="item.img"/>
            </van-swipe-item>
        </van-swipe>
        <div class="find_nav">
            <div class="nav_item" v-for="(item,index) in findList" :key="item+index">
                <p class="icon_box"><span class="iconfont" :class="item.class"></span></p>
                <p class="text">{{item.text}}</p>
            </div>
        </div>
        <div class="song_sheet">
            <div class="title">
                <p class="title_name">发现好歌单</p>
                <p class="title_btn">查看更多</p>
            </div>
            <div class="song_list">
                <div class="song-item" v-for="(item,index) in sheetList" :key="item+index">
                    <div class="box">
                        <img :src="item.img">
                        <span class="num">{{item.num}}</span>
                    </div>
                    <p class="text">{{item.text}}</p>
                </div>
            </div>
        </div>
        <div class="song_recommend">
            <div class="title">
                <p class="title_name">推荐</p>
                <p class="title_btn">播放全部</p>
            </div>
            <div class="recommend_list">
                <van-swipe class="my-swipe list" :loop="false" :width="320">
                    <van-swipe-item v-for="(item,index) in list1" :key="item+index">
                        <div class="song_box" v-for="(subItem,subIndex) in item.list" :key="subItem+subIndex">
                            <img :src="subItem.img">
                            <div class="word">
                                <p class="text">
                                    <span class="name">{{subItem.name}}</span>
                                    <span class="tips">{{subItem.tips}}</span>
                                </p>
                                <p :class="{introduce:!subItem.introduce.state,redIntroduce:subItem.introduce.state}">{{subItem.introduce.text}}</p>
                            </div>
                        </div>
                    </van-swipe-item>
                    <template #indicator>
                        <div class="custom-indicator">
                        </div>
                    </template>
                </van-swipe>
            </div>
        </div>
        <play></play>
    </div>
</template>

<script>
    import play from '../../../components/play'
    export default {
        name: "find",
        components:{
          play
        },
        data(){
            return{
                swipe:[
                    {img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2193429896,1125567423&fm=26&gp=0.jpg'},{img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4245178465,215046506&fm=26&gp=0.jpg'},{img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=25213714,3947153134&fm=26&gp=0.jpg'},{img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3186606289,301427302&fm=26&gp=0.jpg'},{img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2038574895,1235160581&fm=15&gp=0.jpg'},{img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=617214144,3315049623&fm=15&gp=0.jpg'},{img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=490495170,3047936325&fm=26&gp=0.jpg'},{img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2482759233,725430734&fm=15&gp=0.jpg'}
                ],
                findList:[
                    {class: 'icon-rili',text: '每日推荐'},
                    {class: 'icon-yinle',text: '歌单'},
                    {class: 'icon-paihang',text: '排行版'},
                    {class: 'icon-diantai',text: '电台'},
                    {class: 'icon-zhibo',text: '直播'},
                    {class: 'icon-zhuanji',text: '数字专辑'},
                ],
                sheetList:[
                    {
                        img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1909214512,1842668198&fm=26&gp=0.jpg',
                        text: '万次评论只为这个旋律',
                        num: '302万'
                    },
                    {
                        img: 'http://img4.imgtn.bdimg.com/it/u=3360834600,1404834512&fm=26&gp=0.jpg',
                        text: '全球最高下载量单曲Top100',
                        num: '302万'
                    },
                    {
                        img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2119898429,4138437827&fm=26&gp=0.jpg',
                        text: '今天从《不将就》听起|私人雷达',
                        num: '302万'
                    },
                    {
                        img: 'http://img2.imgtn.bdimg.com/it/u=1243304407,1575405469&fm=26&gp=0.jpg',
                        text: '破万评论国风古筝哪一首藏着你的小秘密',
                        num: '302万'
                    },
                    {
                        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1132594178,2414727363&fm=26&gp=0.jpg',
                        text: '你绝对熟悉的蹦迪合集 摇摆至上',
                        num: '302万'
                    },
                ],
                list1:[
                    {
                        list: [
                            {
                                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=317499634,704889872&fm=26&gp=0.jpg',
                                name: '咖喱咖喱',
                                tips: '电视剧《欢乐颂2》插曲 - 牛奶咖啡',
                                introduce: {
                                    state:0,
                                    text: '一首东南亚旅游指南'
                                },
                                song: ''
                            },
                            {
                                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=317499634,704889872&fm=26&gp=0.jpg',
                                name: '咖喱咖喱',
                                tips: '电视剧《欢乐颂2》插曲 - 牛奶咖啡',
                                introduce: {
                                    state:1,
                                    text: '一首东南亚旅游指南'
                                },
                                song: ''
                            },
                            {
                                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=317499634,704889872&fm=26&gp=0.jpg',
                                name: '咖喱咖喱',
                                tips: '电视剧《欢乐颂2》插曲 - 牛奶咖啡',
                                introduce: {
                                    state:0,
                                    text: '一首东南亚旅游指南'
                                },
                                song: ''
                            }
                        ]
                    },
                    {
                        list: [
                            {
                                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=317499634,704889872&fm=26&gp=0.jpg',
                                name: '咖喱咖喱',
                                tips: '电视剧《欢乐颂2》插曲 - 牛奶咖啡',
                                introduce: {
                                    state:0,
                                    text: '一首东南亚旅游指南'
                                },
                                song: ''
                            },
                            {
                                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=317499634,704889872&fm=26&gp=0.jpg',
                                name: '咖喱咖喱',
                                tips: '电视剧《欢乐颂2》插曲 - 牛奶咖啡',
                                introduce: {
                                    state:0,
                                    text: '一首东南亚旅游指南'
                                },
                                song: ''
                            }
                        ]
                    },
                ]
            }
        },

    }
</script>

<style scoped lang="less">
.find{
    width: 100%;
    height: 94vh;
    overflow-y: scroll;
    .my-swipe{
        width: 94%;
        height: 22vh;
        border-radius: 10px;
        margin: 0 auto 10px;
        img{
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }
    .find_nav{
        width: 94%;
        height: 12vh;
        display: flex;
        margin: 0 auto 10px;
        overflow-x: scroll;
        .nav_item{
            width: 20%;
            margin: 0 10px;
            flex-shrink: 0;
            .icon_box{
                width: 7vh;
                height: 7vh;
                text-align: center;
                line-height: 7vh;
                background: #C83729;
                border-radius: 50%;
                margin: 0 auto;
                .iconfont{
                    font-size: 26px;
                    color: #fff;
                }
            }
            .text{
                text-align: center;
                margin: 5px 0;
                font-size: 12px;
            }
        }
    }
    .song_sheet{
        width: 100%;
        height: 32vh;
        .title{
            width: 94%;
            margin: 5px auto;
            display: flex;
            justify-content: space-between;
            .title_name{
                font-weight: 600;
                line-height: 6vh;
            }
            .title_btn{
                height: 3vh;
                padding: 2px 5px;
                margin-top: 1.5vh;
                border: 1px solid #aaa;
                border-radius: 8px;
                font-size: 12px;
            }
        }
        .song_list{
            width: 94%;
            height: 24vh;
            margin: 0 auto;
            display: flex;
            overflow-x: scroll;
            .song-item{
                flex-shrink: 0;
                width: 30%;
                height: 18vh;
                margin: 0 10px 5px;
                .box{
                    width: 100%;
                    height: 18vh;
                    border-radius: 5px;
                    position: relative;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                        border-radius: 5px;
                    }
                    .num{
                        position: absolute;
                        font-size: 12px;
                        color: #fff;
                        top: 5px;
                        right: 2px;
                    }
                }
                .text{
                    width: 100%;
                    height: 5vh;
                    line-height: 16px;
                    margin-top: 1vh;
                    font-size: 14px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
            }
        }
    }
    .song_recommend{
        width: 100%;
        height: 36vh;
        margin-bottom: 9vh;
        .title{
            width: 94%;
            margin: 5px auto;
            display: flex;
            justify-content: space-between;
            .title_name{
                font-weight: 600;
                line-height: 6vh;
            }
            .title_btn{
                height: 3vh;
                padding: 2px 5px;
                margin-top: 1.5vh;
                border: 1px solid #aaa;
                border-radius: 8px;
                font-size: 12px;
            }
        }
        .recommend_list{
            width: 100%;
            height: 28vh;
            margin: 1vh 0;
            .list{
                width: 90%;
                height: 100%;
                .song_box{
                    width: 100%;
                    height: 8vh;
                    margin-top: 1vh;
                    display: flex;
                    img{
                        display: block;
                        width: 8vh;
                        height: 8vh;
                        border-radius: 10px;
                        margin-right: 10px;
                    }
                    .word{
                        width: 80%;
                        .text{
                            width: 100%;
                            display: flex;
                            margin-bottom: 2vh;
                            .name{
                                flex-shrink: 0;
                                font-size: 16px;
                                color: #000;
                                margin-right: 5px;
                            }
                            .tips{
                                font-size: 13px;
                                line-height: 14px;
                                color: #999;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 1;
                                overflow: hidden;
                            }
                        }
                        .introduce{
                            font-size: 13px;
                            color: #666;
                        }
                        .redIntroduce{
                            display: inline-block;
                            font-size: 13px;
                            color: red;
                            padding: 2px 5px;
                            border-radius: 5px;
                            background: rgba(255,0,0,.2);
                        }
                    }
                }
            }
        }
    }
}
</style>
