<template>
    <div class="footer">
        <div class="container">
            <div class="footer-logo">
                <img src="./../assets/imgs/logo-footer.png" alt="">
                <p>小米商城</p>
            </div>
            <div class="footer-link">
                <a href="#">百度</a> |
                <a href="#">百度</a> |
                <a href="#">百度</a> |
                <a href="#">百度</a> |
                <a href="#">百度</a>
            </div>
            <div class="copyright">Copyright © 2020-2020 All Rights Reserved</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer'
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
.footer{
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        margin-bottom: 13px;
        a{
            color: $colorD;
            display: inline-block;
            margin: 0 10px;
        }
    }
}
</style>