<template>
    <div class="custom-header__wrap">
        <div class="header">
            <Suspense>
                <template #default>
                    <Banner />
                </template>
                <template #fallback>
                    <div class="loading">loading...</div>
                </template>
            </Suspense>
        </div>
        <div class="title">
            <ul>
                <li v-for="(item,index) in titleList" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Banner from './Banner.vue'
const titleList = ref<string[]>([
    '七日退换',
    '官方正品',
    '29元包邮'
])

</script>

<style lang="less" scoped>
.custom-header__wrap {
    .header {
        height: 150px;
    }
    .title {
        border-bottom: 1px solid @solid-color;
        ul {
            height: 50px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-weight:600;
        }
    }

}

</style>