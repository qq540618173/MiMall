<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="item in sliderList" :key="item.id">
                        <a :href="`/#/product/${item.id}`">
                            <img :src="item.img">
                        </a>
                    </swiper-slide>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'index',
    components: {
        Swiper,
        SwiperSlide,
        ServiceBar,
    },
    data() {
        return {
            swiperOptions: {
                autoplay: true,
                loop: true,
                effect: "cube",
                cubeEffect: {
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            },
            sliderList: [
                {
                    id: 42,
                    img: require('./../assets/imgs/slider/slide-1.jpg')
                },
                {
                    id: 45,
                    img: require('./../assets/imgs/slider/slide-2.jpg')
                },
                {
                    id: 46,
                    img: require('./../assets/imgs/slider/slide-3.jpg')
                },
                {
                    id: 47,
                    img: require('./../assets/imgs/slider/slide-4.jpg')
                },
                {
                    id: 48,
                    img: require('./../assets/imgs/slider/slide-5.jpg')
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.index{
    .swiper-box{
        .swiper-container {
            height: 451px;
            img{
                max-width: 100%;
            }
        }
    }
}
</style>