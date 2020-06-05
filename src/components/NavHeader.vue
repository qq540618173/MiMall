<template>
    <div class="hearder">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="userName">{{userName}}</a>
                    <a href="javascript:;" v-if="!userName" @click="login">登录</a>
                    <a href="javascript:;" v-if="userName" @click="logout">退出</a>
                    <a href="/#/order/list" target="_blank" v-if="userName">我的订单</a>
                    <a class="my-cart" href="javascript:;" @click="gotoCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="item in phoneList" :key="item.id">
                                    <a :href="`/#/product/${item.id}`" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle" />
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>红米手机</span>
                    </div>
                    <div class="item-menu">
                        <span>小米电视</span>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
    name: 'nav-header',
    data(){
        return {
            phoneList: [],
            navList: ['小米手机', '红米手机', '小米电视']
        }
    },
    mounted(){
        this.getProductList()
        let params = this.$route.params
        if(params && params.from == 'login'){
            this.getCartCount()
        }
    },
    methods: {
        getProductList(){
            this.axios.get('/products', {
                params: {
                    categoryId: '100012'
                }
            }).then(res => {
                if(res.list.length>6){
                    this.phoneList = res.list.slice(0, 6)
                }
            })
        },
        getCartCount(){
            this.axios.get('/carts/products/sum').then((res=0)=>{
                this.$store.dispatch('saveCartCount',res);
            })
        },
        gotoCart(){
            this.$router.push('/cart')
        },
        login(){
            this.$router.push('/login')
        },
        logout(){
            this.axios.post('/user/logout').then(() => {
                Message.success('退出成功')
                this.$cookie.set('userId', '', {expires: '-1'})
                this.$store.dispatch('saveUserName', '')
                this.$store.dispatch('saveCartCount', 0)
            })
        }
    },
    computed: {
        userName(){
            return this.$store.state.username
        },
        cartCount(){
            return this.$store.state.cartCount
        }
    },
    filters: {
        currency(val){
            if(!val) return '0.00'
            return '¥' + val.toFixed(2) + '元'
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.hearder{
    .nav-topbar{
        height: 39px;
        line-height: 39px;
        background-color: #333333;
        color: #b0b0b0;

        .container{
            width: 1226px;
            margin: 0 auto;
            @include flex();

            a{
                display: inline-block;
                color: #b0b0b0;
                margin-right: 17px;
            }

            .my-cart{
                width: 110px;
                background-color: #ff6600;
                text-align: center;
                color: #ffffff;
                margin-right: 0;

                .icon-cart{
                    margin-right: 4px;
                    @include bgImg(16px, 12px, './../assets/imgs/icon-cart-checked.png', contain)
                }
            }
        }
    }
    .nav-header{
        .container{
            height: 112px;
            position: relative;
            @include flex();
            .header-menu{
                display: inline-block;
                padding-left: 209px;
                width: 643px;
                .item-menu{
                    display: inline-block;
                    color: #333333;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 112px;
                    margin-right: 20px;
                    span{
                        cursor: pointer;
                    }
                    &:hover{
                        color: $colorA;
                        .children{
                            height: 220px;
                            opacity: 1;
                            transition: 0.5s;
                        }
                    }
                    .children{
                        position: absolute;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        height: 0;
                        opacity: 0;
                        overflow: hidden;
                        border-top: 1px solid #E5E5E5;
                        box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                        background-color: #FFFFFF;
                        transition: 0.5s;
                        z-index: 10;
                        .product{
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;
                            float: left;
                            position: relative;
                            &::before{
                                content: "";
                                position: absolute;
                                top: 28px;
                                right: 0;
                                width: 1px;
                                height: 100px;
                                background-color: $colorF;
                            }
                            &:last-child::before{
                                display: none;
                            }
                            a{
                                display: inline-block;
                                width: 100%;
                            }
                            img{
                                max-width: 100%;
                                max-height: 100%;
                            }
                            .pro-img{
                                width: 100%;
                                height: 111px;
                                margin-top: 26px;
                            }
                            .pro-name{
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }
                            .pro-price{
                                color: $colorA;
                            }
                        }
                    }
                }
            }
            .header-search{
                width: 320px;
                .wrapper{
                    height: 50px;
                    border: 1px solid #E0E0E0;
                    display: flex;
                    align-items: center;
                    input{
                        border: none;
                        border-right: 1px solid #E0E0E0;
                        width: 263px;
                        height: 50px;
                        padding: 0 10px;
                        box-sizing: border-box;
                    }
                    a{
                        @include bgImg(55px, 50px, './../assets/imgs/icon-search.png', 24px)
                    }
                }
            }
        }
    }
}
</style>