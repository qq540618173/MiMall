<template>
    <div class="order-confirm">
        <order-header title="订单确认">
            <template v-slot:tip>
                <span>温馨提示：订单确认</span>
            </template>
        </order-header>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
export default {
    name: 'orderConfirm',
    components: {
        OrderHeader
    }
}
</script>

<style lang="scss">

</style>