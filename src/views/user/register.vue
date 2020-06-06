<template>
    <div class="register">
        <img class="logo" src="../../assets/img/logo.png">
        <div class="user_info">
            <van-cell-group>
                <van-field v-model="mobile" type="tel" label="手机号" placeholder="请输入手机号" />
            </van-cell-group>
        </div>
        <div class="user_info">
            <van-cell-group>
                <van-field v-model="mobile_pwd" type="password" label="密码" placeholder="请输入密码" />
            </van-cell-group>
        </div>
        <div class="user_info">
            <van-cell-group>
                <van-field v-model="nick_name" label="昵称" placeholder="请输入昵称" />
            </van-cell-group>
        </div>
        <div class="user_info">
            <van-field
                    v-model="mobile_code"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
            >
                <template #button>
                    <van-button size="small" type="danger" @click="get_code()">{{code_msg}}</van-button>
                </template>
            </van-field>
        </div>
        <div class="register_btn">立即注册</div>
        <p class="go_login" @click="go_login()">已有账号，去登陆</p>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Notify } from 'vant';

    Vue.use(Notify);
    export default {
        name: "register",
        data(){
            return{
                mobile: '',   // 手机号
                mobile_pwd: '',   // 密码
                nick_name: '',   // 昵称
                mobile_code: '',   // 验证码
                code_msg: '发送验证码',
            }
        },
        methods:{
            get_code(){
                if(!this.mobile){
                    Notify({
                        type: 'warning',
                        message: '请填写手机号',
                        duration: 2000
                    })
                    return
                }
                if(!this.mobile_pwd){
                    Notify({
                        type: 'warning',
                        message: '请填写密码',
                        duration: 2000
                    })
                    return
                }
                if(!this.nick_name){
                    Notify({
                        type: 'warning',
                        message: '请填写昵称',
                        duration: 2000
                    })
                    return
                }
                let timeClock,that = this
                this.$axios.get(`/captcha/sent?phone=${this.mobile}`).then((res,a) => {
                    console.log(1111,res,a)
                    let timer_num = 60;
                    timeClock=setInterval(function(){
                        timer_num--;
                        that.code_msg = timer_num + 's';

                        if (timer_num == 0) {
                            clearInterval(timeClock);
                            that.code_msg = '重新发送'
                        }
                    },1000)
                })
            },
            go_login(){
                this.$router.push('login')
            }
        }
    }
</script>

<style scoped lang="less">
    .register{
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
        background: #DC2C1F;
        .logo{
            display: block;
            width: 10vh;
            height: 10vh;
            margin: 10vh auto;
        }
        .user_info{
            width: 90%;
            margin: 10px auto;
        }
        .register_btn{
            width: 90%;
            height: 7vh;
            margin: 3vh auto;
            line-height: 7vh;
            text-align: center;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 30px;
        }
        .go_login{
            width: 90%;
            text-align: right;
            font-size: 12px;
            color: #aaa;
        }
    }
</style>
