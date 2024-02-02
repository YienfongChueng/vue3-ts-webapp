<template>
    <div class="nav-tab__wrap">
        <div class="nav-tab__item" 
        v-for="item in menus" 
        :key="item.name"
        @click="clearStorage">
            <router-link 
                :to="item.path" 
                active-class="selected"
                class="nav-tab__item-wrap" >
                <i class="iconfont" :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute,useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const menus = ref([])
const routes = router.options.routes
menus.value = routes.filter(d => !d.meta.hidden)

function clearStorage() {
    sessionStorage.clear()
}
</script>

<style lang="less" scoped>
.iconfont {
    font-size: 20px;
    font-weight: 600;
}
.nav-tab__wrap {
    width: 100%;
    height: @nav-tab-height;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index:999;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
    background: #fff;
    .nav-tab__item {
        width: 25%;
        height: 100%;
        text-align: center;
        .selected {
            color: @primary-color;
            font-weight: 600;
        }
        &-wrap {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            color: #666;
        }
    }
}
</style>