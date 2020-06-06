<template>
    <div class="login">
        <img class="logo" src="../../assets/img/logo.png">
        <div v-if="login_type" class="user_info">
            <van-cell-group>
                <van-field v-model="mobile" label="手机号" placeholder="请输入手机号" />
            </van-cell-group>
            <van-field v-model="mobile_pwd" type="password" label="密码" />
        </div>
        <div v-else class="user_info">
            <van-cell-group>
                <van-field v-model="email" label="邮箱" placeholder="请输入邮箱" />
            </van-cell-group>
            <van-field v-model="email_pwd" type="password" label="密码" />
        </div>
        <p @click="toRegister()" style="color: #aaa; text-align: right; font-size: 12px; width: 90%; margin: 10px auto">去注册</p>
        <div class="login_btn">立即登录</div>
        <div class="login_type">
            <div class="img_box" @click="login_type=true"><img src="../../assets/img/mobile.svg"></div>
            <div class="img_box" @click="login_type=false"><img src="../../assets/img/email.svg"></div>
        </div>
        <div class="login_rule">
            <div class="checkbox">
                <div class="checkbox_border" @click="checked=!checked">
                    <img v-if="checked" src="../../assets/img/right.svg">
                </div>
                <p>同意</p>
            </div>
            <div class="agreement">
                <a href="">《用户协议》</a>
                <a href="">《隐私政策》</a>
                <a href="">《儿童隐私政策》</a><br>
                <a href="">《中国移动认证服务协议》</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                login_type: true,   // 登录方式（手机还是邮箱）
                mobile: '',   // 手机号
                mobile_pwd: '',   // 手机密码
                email: '',   // 邮箱
                email_pwd: '',   // 邮箱密码
                checked: true
            }
        },
        methods:{
            toRegister(){
                this.$router.push('register')
            }
        }
    }
</script>

<style scoped lang="less">
    .login{
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
        background: #DC2C1F;
        .logo{
            display: block;
            width: 10vh;
            height: 10vh;
            margin: 20vh auto;
        }
        .user_info{
            width: 90%;
            margin: 0 auto;
        }
        .login_btn{
            width: 90%;
            height: 7vh;
            margin: 3vh auto;
            line-height: 7vh;
            text-align: center;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 30px;
        }
        .login_type{
            width: 50%;
            margin: 3vh auto;
            display: flex;
            flex-wrap: nowrap;
            .img_box{
                width: 5vh;
                height: 5vh;
                border-radius: 50%;
                border: 1px solid #e6e6e6;
                margin: auto;
                img{
                    display: block;
                    width: 70%;
                    height: 70%;
                    margin: 15% auto;
                }
            }
        }
        .login_rule{
            width: 90%;
            margin: 14vh auto 0;
            display: flex;
            flex-wrap: nowrap;
            font-size: 12px;
            .checkbox{
                display: flex;
                width: 13%;
                .checkbox_border{
                    width: 1.8vh;
                    height: 1.8vh;
                    border: 1px solid #e6e6e6;
                    border-radius: 3px;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                p{
                    color: #ccc;
                    margin-left: 5px;
                }
            }
            .agreement{
                width: 87%;
                text-align: center;
                a{
                    color: #e6e6e6;
                }
            }
        }
    }
</style>
