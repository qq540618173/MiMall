<template>
    <div class="no-data">
        <img src="./../assets/imgs/icon-no-data.png" alt="">
        <p>当前暂无提交的订单记录</p>
    </div>
</template>

<script>
export default {
    name:'no-data'
}
</script>

<style lang="scss">
.no-data{
    text-align:center;
    font-size:20px;
    color:#999999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 444px - 143px);
    img{
        width:240px;
        height:180px;
        margin-bottom:30px;
    }
}
</style>