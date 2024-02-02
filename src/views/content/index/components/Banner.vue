<template>
    <div class="banner_wrap">
        <img 
            class="banner_img"
            v-for="(item,index) in bannerList" 
            :key="item.id"
            :src="item.img_url"
            v-show="index === current" />
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted,onUnmounted} from 'vue'
import { getSwiper } from '@/api/index'
import { ISwiper } from '@/interface/index'

const bannerList = await getSwiper<ISwiper[]>().then(res => {
    return res.data
})

let current = ref<number>(0)
let timmer = ref<any>(null)

const autoPlay = ():void => {
    current.value ++;
    if(current.value === bannerList.length) {
        current.value = 0
    }
}
const play = ():void => {
    timmer.value = setInterval(autoPlay,2000)
}

onMounted(() => {
    play()
})
onUnmounted(()=> {
    clearInterval( timmer.value)
})


</script>

<style lang="less" scoped>
.banner_wrap {
    height: 100%;
    .banner_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

}

</style>