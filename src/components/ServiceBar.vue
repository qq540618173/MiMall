<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>预约维修服务</li>
                <li><span class="icon-7day"></span>7天无理由退货</li>
                <li><span class="icon-15day"></span>15天免费换货</li>
                <li><span class="icon-post"></span>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'service-bar'
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.service{
    padding: 33px 0;
    color: $colorC;
    font-size: 16px;
    li{
        text-align: center;
        display: inline-block;
        width: 25%;
        border-right: 1px solid #e5e5e5;
        box-sizing: border-box;
        span{
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
        }
        .icon-setting{
            margin-right: 8px;
            @include bgImg(20px, 20px, './../assets/imgs/icon-setting.png', 20px)
        }
        .icon-7day{
            margin-right: 8px;
            @include bgImg(20px, 20px, './../assets/imgs/icon-7day.png', 20px)
        }
        .icon-15day{
            margin-right: 8px;
            @include bgImg(20px, 20px, './../assets/imgs/icon-15day.png', 20px)
        }
        .icon-post{
            margin-right: 8px;
            @include bgImg(20px, 20px, './../assets/imgs/icon-post.png', 20px)
        }
        &:last-child{
            border-right: 0;
        }
    }
}
</style>