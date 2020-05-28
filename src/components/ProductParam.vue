<template>
    <div class="nav-bar" :class="{'isfixed': isFixed}">
        <div class="container">
            <div class="product-title">{{title}}</div>
            <div class="product-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-bar',
    props: {
        title: String,
    },
    data(){
        return {
            isFixed: false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.initHeight)
    },
    methods: {
        initHeight(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.isFixed = scrollTop > 152?true:false
        }
    },
    destroyed(){
        window.removeEventListener('scroll', this.initHeight, false)  //true捕获 false冒泡 通过冒泡清除所有事件
    }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.nav-bar{
    height: 70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    background-color: $colorG;
    z-index: 10;
    &.isfixed{
        position: fixed;
        top: 0;
        width: 100%;
        box-shadow: 0 5px 5px $colorF;
    }
    .container{
        @include flex();
        .product-title{
            font-size: $fontH;
            color: $colorB;
            font-weight: bold;
        }
        .product-param{
            font-size: $fontJ;
            color: $colorC;
            span{
                margin: 0 10px;
            }
            a{
                color: $colorC;
            }
            .btn{
                margin-left: 10px;
            }
        }
    }
}
</style>