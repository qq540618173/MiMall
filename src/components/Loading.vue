<template>
    <div class="loading">
        <img src="./../assets/imgs/loading-svg/loading-bars.svg" />
    </div>
</template>

<script>
export default {
    name: 'loading',
}
</script>

<style lang="scss">
.loading{
    height: calc(100vh - 444px);
    text-align: center;
    padding: 200px 0;
    box-sizing: border-box;
    img{
        height: 100%;
    }
}
</style>