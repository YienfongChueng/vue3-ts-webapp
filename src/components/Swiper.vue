<script setup lang="ts">
import {ref, onMounted,onUnmounted} from "vue";
// 定义组件属性
const props = defineProps({
  list: { // 要轮播的图片的数组
    type: Array as () => Array<Object>,
    required: true,
    default: () => {
      return []
    }
  }
})
// 当前显示的图片在list数组中的下标
let active = ref<number>(1)
// 定时器
let timer: any = null;
// 开始轮播
const startCarousel = (): void => {
  if (timer) return
  timer = setInterval(() => {
    if (active.value >= props.list.length) {
      active.value = 1
      return
    }
    active.value++
  }, 2000)
}
// 停止轮播
const stopCarousel = (): void => {
  clearInterval(timer)
  timer = null
}
// 上一张
const pre = (): void => {
  if (active.value === 1) {
    active.value = props.list.length
    return
  }
  active.value--
}
// 下一张
const next = (): void => {
  if(active.value === props.list.length){
    active.value = 1
    return
  }
  active.value++
}
onMounted(()=> {
  startCarousel()
})
onUnmounted(()=> {
  stopCarousel()
})
</script>

<template>
  <div class="co-carousel"
       @mouseenter="stopCarousel"
       @mouseleave="startCarousel">
    <div class="co-carousel-container">
      <template v-for="(item,index) in list">
        <div class="co-carousel-item"
             v-show="active === index+1">
          <img
              :src="item.url"
              :alt="item.name"/>
        </div>
      </template>
    </div>
    <!--    轮播图操作区域：指示器、箭头等-->
    <div class="co-carousel-toggle">
      <div class="toggle-item" @click="pre">&larr;</div>
      <div class="toggle-item" @click="next">&rarr;</div>
    </div>
     <!--      指示器-->
    <div class="co-carousel-operation">
      <div class="co-carousel-indicator">
        <template v-for="n in list.length">
          <div
              class="indicator-item"
              :class="n === active ? 'is-active' :''"
              @mouseenter="active=n"
          ></div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.co-carousel {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
}

.co-carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
}

.co-carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  /*transition: width .5s ease-in-out;*/
}
.co-carousel-item__is-active{
  /*width: 100%;*/
}

.co-carousel-item > img {
  width: 100%;
  height: 100%;
}

.co-carousel-toggle {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  position: absolute;
  width: calc(100% - 20px);
  top: 45%;
}

.toggle-item {
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.5);
  color: #878789;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  opacity: 0;
  font-size: 18px;
  transition: opacity .3s ease-in-out;
}

.co-carousel-toggle:hover > .toggle-item,
.co-carousel-container:hover + .co-carousel-toggle > .toggle-item {
  opacity: 1;
}

.co-carousel-operation {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
}

.co-carousel-indicator {
  display: flex;
  position: relative;
  z-index: 10;
}

.indicator-item {
  width: 20px;
  height: 6px;
  opacity: 0.6;
  background: #FFFFFF;
  border-radius: 2px;
  margin: 2px;
  transition: width .3s ease-in-out;
}

.indicator-item:hover,
.indicator-item.is-active {
  opacity: 1;
  width: 40px;
  background: #63a7de;
}
</style>
