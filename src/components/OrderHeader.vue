<template>
    <div class="order-header">
        <div class="container">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="title">
                <h2>{{title}}</h2>
                <slot name="tip"></slot>
            </div>
            <div class="username">
                <a href="javascript:;">{{userName}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order-header',
    props: {
        title: String
    },
    computed: {
        userName(){
            return this.$store.state.username
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.order-header{
    padding: 30px 0;
    .container{
        @include flex();
        .title, .username{
            display: inline-block;
            height: 55px;
            line-height: 55px;
        }
        .title{
            width: 100%;
            margin-left: 54px;
            h2{
                display: inline;
                font-size: $fontC;
                color: $colorB;
            }
            span{
                font-size: $fontJ;
                margin-left: 17px;
                color: $colorD;
                font-weight: bold;
            }
        }
        .username{
            a{
                font-size: $fontI;
                color: $colorC;
            }
        }
    }
}
</style>