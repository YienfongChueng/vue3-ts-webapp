<template>
    <div class="container">
        <custom-header></custom-header>
        <custom-list :categroy-list="categroyList"></custom-list>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import CustomHeader from './components/CustomHeader.vue'
import CustomList from './components/CustomList.vue'
import { getCategoryBanner } from '@/api/index'
import { ICategory } from '@/interface/index'

const categroyList = ref<ICategory[]>()
const getCategory = ()=> {
    getCategoryBanner<ICatagory[]>().then(res => {
        categroyList.value = res.data
    })
}

onMounted(()=> {
    getCategory()
})

</script>

<style lang="less" scoped>

</style>