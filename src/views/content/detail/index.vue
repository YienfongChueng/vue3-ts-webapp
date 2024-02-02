<template>
    <div class="detail-container">
        <div class="back-btn" @click="back">返回</div>
        <Swiper v-if="swiperList.length > 0" :list="swiperList"/>
        <div class="detail-wrap" v-if="detailInfo.length > 0">
            <p class="detail-price">¥{{detail.product_uprice}}</p>
            <p class="detail-title">{{detail.product_name}}</p>
            <div class="detail-info">
                <pre>{{detail.product_detail}}</pre>
            </div>
        </div>
        <div class="shopcart-btn" @click="addCart()">加入购物车</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted,computed } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getDetail } from '@/api/index'
import { IDetailImg,IDetailInfo } from '@/interface/index'
import Swiper from '@/components/Swiper.vue'
const route = useRoute()
const router = useRouter()
const store = useStore()
const imgList = ref<IDetailImg[]>([])
const detailInfo = ref<IDetailInfo[]>([])

const getData = () => {
    getDetail<[IDetailImg[],IDetailInfo[]]>(route.params.id).then(res => {
        imgList.value = res.data[0]
        detailInfo.value = res.data[1]
    })
}
const swiperList = computed(() => {
    return imgList.value.map(d => {
        return {
            name: d.image_url,
            url: d.image_url
        }
    })
})
const detail = computed(()=> {
    return detailInfo.value[0]
})

function addCart() {
    alert('add cart')
}
function back() {
    router.go(-1)
}

onMounted(()=> {
    store.commit('setNavShow',false)
    getData()
})
onUnmounted(()=> {
    store.commit('setNavShow',true)
})


</script>

<style lang="less" scoped>
.detail-container {
    position: relative;
    width: 100vw;
    .back-btn {
        border-radius:@border-radius;
        padding: 10px;
        color: #000;
        background: rgb(234 226 226 / 50%);
        width: 50px;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        z-index:10;
    }
    .shopcart-btn {
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: #fff;
        background: rgb(232 153 101);
        text-align: center;
        font-size: 20px;
        margin-top: 10px;
        cursor: pointer;
    }
    .detail-wrap {
        .detail-price {
            font-size: 25px;
            color: #ff0000;
            text-indent: 1em;
            padding-top: 10px;
        }
        .detail-title {
            padding: 5px 10px;
            font-size: 18px;
            font-weight: 600;
            text-indent: 1em;
        }
        .detail-info {
            font-size: 16px;
            background: @background-color;
        }
    }
}

</style>