<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item, index) in menuList" :key="index">
                                    <li v-for="sub in item" :key="sub.id">
                                        <a :href="`/#/product/${sub.id}`">
                                            <img v-lazy="sub.img" alt="sub.name">{{sub.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="item in sliderList" :key="item.id">
                        <a :href="`/#/product/${item.id}`">
                            <img v-lazy="item.img">
                        </a>
                    </swiper-slide>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    
                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a :href="`/#/product/${item.id}`" v-for="item in adsList" :key="item.id">
                    <img v-lazy="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img v-lazy="require('./../assets/imgs/banner-1.png')" alt="">
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35">
                            <img v-lazy="require('./../assets/imgs/mix-alpha.jpg')" alt="">
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr, index) in productList" :key="index">
                            <div class="item" v-for="(item, i) in arr" :key="i" @click="gotoDetail(item.id)">
                                <span class="tag" :class="{'new': i%2 == 0}">新品</span>
                                <div class="item-img">
                                    <img v-lazy="item.mainImage" :alt="item.name">
                                </div>
                                <div class="item-info">
                                    <h3>{{item.name}}</h3>
                                    <p class="name">{{item.subtitle}}</p>
                                    <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <Modal title="提示" sureText="查看购物车" btnType="1" modalType="middle" :showModal="showModal" @submit="gotoCart" @cancel="showModal=false">
            <template v-slot:body>
                <p>商品添加成功！</p>
            </template>
        </Modal>
    </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Modal from './../components/Modal'
import 'swiper/css/swiper.css'
export default {
    name: 'index',
    components: {
        Swiper,
        SwiperSlide,
        ServiceBar,
        Modal,
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
            ],
            menuList: [
                [
                    {
                        id: 30,
                        img: require('./../assets/imgs/item-box-1.png'),
                        name: '小米CC9'
                    },
                    {
                        id: 31,
                        img: require('./../assets/imgs/item-box-2.png'),
                        name: '小米8青春版'
                    },
                    {
                        id: 32,
                        img: require('./../assets/imgs/item-box-3.jpg'),
                        name: 'Redmi K20 Pro'
                    },
                    {
                        id: 33,
                        img: require('./../assets/imgs/item-box-4.jpg'),
                        name: '移动4G专区'
                    }
                ],
                [
                    {
                        id: 30,
                        img: require('./../assets/imgs/item-box-1.png'),
                        name: '小米CC9'
                    },
                    {
                        id: 31,
                        img: require('./../assets/imgs/item-box-2.png'),
                        name: '小米8青春版'
                    },
                    {
                        id: 32,
                        img: require('./../assets/imgs/item-box-3.jpg'),
                        name: 'Redmi K20 Pro'
                    },
                    {
                        id: 33,
                        img: require('./../assets/imgs/item-box-4.jpg'),
                        name: '移动4G专区'
                    }
                ],
                [
                    {
                        id: 30,
                        img: require('./../assets/imgs/item-box-1.png'),
                        name: '小米CC9'
                    },
                    {
                        id: 31,
                        img: require('./../assets/imgs/item-box-2.png'),
                        name: '小米8青春版'
                    },
                    {
                        id: 32,
                        img: require('./../assets/imgs/item-box-3.jpg'),
                        name: 'Redmi K20 Pro'
                    },
                    {
                        id: 33,
                        img: require('./../assets/imgs/item-box-4.jpg'),
                        name: '移动4G专区'
                    }
                ],
                [
                    {
                        id: 30,
                        img: require('./../assets/imgs/item-box-1.png'),
                        name: '小米CC9'
                    },
                    {
                        id: 31,
                        img: require('./../assets/imgs/item-box-2.png'),
                        name: '小米8青春版'
                    },
                    {
                        id: 32,
                        img: require('./../assets/imgs/item-box-3.jpg'),
                        name: 'Redmi K20 Pro'
                    },
                    {
                        id: 33,
                        img: require('./../assets/imgs/item-box-4.jpg'),
                        name: '移动4G专区'
                    }
                ],
                [
                    {
                        id: 30,
                        img: require('./../assets/imgs/item-box-1.png'),
                        name: '小米CC9'
                    },
                    {
                        id: 31,
                        img: require('./../assets/imgs/item-box-2.png'),
                        name: '小米8青春版'
                    },
                    {
                        id: 32,
                        img: require('./../assets/imgs/item-box-3.jpg'),
                        name: 'Redmi K20 Pro'
                    },
                    {
                        id: 33,
                        img: require('./../assets/imgs/item-box-4.jpg'),
                        name: '移动4G专区'
                    }
                ],
                [
                    {
                        id: 30,
                        img: require('./../assets/imgs/item-box-1.png'),
                        name: '小米CC9'
                    },
                    {
                        id: 31,
                        img: require('./../assets/imgs/item-box-2.png'),
                        name: '小米8青春版'
                    },
                    {
                        id: 32,
                        img: require('./../assets/imgs/item-box-3.jpg'),
                        name: 'Redmi K20 Pro'
                    },
                    {
                        id: 33,
                        img: require('./../assets/imgs/item-box-4.jpg'),
                        name: '移动4G专区'
                    }
                ]
            ],
            adsList: [
                {
                    id: 33,
                    img: require('./../assets/imgs/ads/ads-1.png')
                },
                {
                    id: 48,
                    img: require('./../assets/imgs/ads/ads-2.jpg')
                },
                {
                    id: 45,
                    img: require('./../assets/imgs/ads/ads-3.png')
                },
                {
                    id: 47,
                    img: require('./../assets/imgs/ads/ads-4.jpg')
                }
            ],
            productList: [],
            showModal: false
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        init(){
            this.axios.get('/products', {
                params: {
                    categoryId: 100012,
                    pageSize: 14
                }
            }).then(res => {
                res.list = res.list.slice(6,14)
                this.productList = [res.list.slice(0, 4), res.list.slice(4, 8)]
            })
        },
        addCart(){
            this.showModal = true
            return
            // this.axios.post('/carts', {
            //     productId: id,
            //     selected: true
            // }).then(res => {
            //     console.log(res)
            // }).catch(() => {
            //     this.showModal = true
            // })
        },
        gotoCart(){
            this.$router.push('/cart')
        },
        gotoDetail(id){
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.index{
    .swiper-box{
        position: relative;
        .swiper-container {
            height: 460px;
            .swiper-button-prev{
                left: 274px;
            }
            img{
                max-width: 100%;
            }
        }
        .nav-menu{
            width: 264px;
            height: 460px;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 9;
            padding: 26px 0;
            background: rgba(0,0,0,0.25);
            box-sizing: border-box;
            .menu-wrap{
                .menu-item{
                    height: 50px;
                    line-height: 50px;
                    a{
                        font-size: 16px;
                        color: $colorG;
                        padding-left: 30px;
                        display: block;
                        position: relative;
                        &:after{
                            content: "";
                            position: absolute;
                            right: 30px;
                            top: 17.5px;
                            @include bgImg(10px, 15px, './../assets/imgs/icon-arrow.png', contain)
                        }
                    }
                    &:hover{
                        background-color: $colorA;
                        .children{
                            display: block;
                        }
                    }
                    .children{
                        width: 962px;
                        height: 460px;
                        background-color: $colorG;
                        position: absolute;
                        top: 0;
                        left: 264px;
                        border: 1px solid $colorH;
                        box-sizing: border-box;
                        display: none;
                        ul{
                            display: flex;
                            justify-content: space-between;
                            height: 75px;
                            li{

                                height: 75px;
                                line-height: 75px;
                                flex: 1;
                                a{
                                    color: $colorB;
                                    font-size: 14px;
                                }
                                img{
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .ads-box{
        @include flex();
        margin-top: 14px;
        margin-bottom: 31px;
        a{
            width: 296px;
            height: 167px;
        }
    }
    .banner{
        margin-bottom: 50px;
    }
    .product-box{
        background-color: $colorJ;
        padding: 30px 0 50px;
        h2{
            font-size: $fontF;
            height: 21px;
            line-height: 21px;
            color: $colorB;
            margin-bottom: 20px;
        }
        .wrapper{
            display: flex;
            .banner-left{
                margin-right: 16px;
                img{
                    width: 224px;
                    height: 618px;
                }
            }
            .list-box{
                .list{
                    @include flex();
                    width: 986px;
                    margin-bottom: 14px;
                    &:last-child{
                        margin-bottom: 0;
                    }
                    .item{
                        width: 236px;
                        height: 302px;
                        background-color: $colorG;
                        text-align: center;
                        span{
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            line-height: 24px;
                            color: $colorG;
                            border-radius: 0 0 5px 5px;
                            &.new{
                                background-color: #7ECF68;
                            }
                            &.hot{
                                background-color: #E82626;
                            }
                        }
                        img{
                            height: 195px;
                        }
                        .item-info{
                            h3{
                                color: $colorB;
                                font-size: $fontJ;
                                line-height: 14px;
                            }
                            .name{
                                color: $colorD;
                                line-height: 13px;
                                margin: 6px 0 13px;
                            }
                            .price{
                                color: #F20A0A;
                                font-size: $fontJ;
                                font-weight: bold;
                                cursor: pointer;
                                &::after{
                                    @include bgImg(22px, 22px, './../assets/imgs/icon-cart-hover.png', contain);
                                    content: "";
                                    margin-left: 5px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>