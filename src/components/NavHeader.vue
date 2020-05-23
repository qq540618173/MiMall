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
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a class="my-cart" href="javascript:;"><span class="icon-cart"></span>购物车</a>
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
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>红米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>小米电视</span>
                        <div class="children"></div>
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
export default {
    name: 'nav-header'
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
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
            @include flex();
            .header-logo{
                display: inline-block;
                width: 55px;
                height: 55px;
                background-color: #FF6600;
                a{
                    display: inline-block;
                    width: 110px;
                    height: 55px;
                    &::before{
                        content: "";
                        transition: .3s;
                        @include bgImg(55px, 55px, './../assets/imgs/mi-home.png', 55px)
                    }
                    &::after{
                        content: "";
                        display: inline-block;
                        @include bgImg(55px, 55px, './../assets/imgs/mi-home.png', 55px)
                    }
                    &:hover::before{
                        margin-left: -55px;
                        transition: .3s;
                    }
                }
            }
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