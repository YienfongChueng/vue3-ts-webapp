<template>
    <div class="custom-list">
        <div class="categroy_wrap">
            <ul class="category_list">
                <li 
                    class="category_list__item"
                    v-for="item in props.categroyList" 
                    :key="item.category_id"
                    @click="getList(item.category_id)"
                >
                    <img :src="item.img" />
                    <p>{{item.category_name}}</p>
                </li>
            </ul>
        </div>
        <data-list :list="goodList"></data-list>
    </div>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue'
import { ICategory, IGoodList } from '@/interface/index'
import { getCategorygoods } from '@/api/index'
import DataList from './DataList.vue'

const props = defineProps({
    categroyList: {
        type: Array as ()=> ICategory[], // 类型断言   可以手动指定一个值的类型
        default:()=>[]
    }
})

const goodList = ref<IGoodList[]>()
const getList = (id:number|string)=> {
    sessionStorage.setItem('mId',id)
    getCategorygoods<IGoodList[]>(id).then(res => {
        goodList.value = res.data
    })
}

watch(() => props.categroyList, (newVal,oldVal) => {
    const id = sessionStorage.getItem('mId') || newVal[0].category_id
    getList(id)
})


</script>

<style lang="less" scoped>
.custom-list {
    height: calc(100% - 201px);
    overflow: auto;
}
.categroy_wrap {
    .category_list {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
        &__item {
            width: 15%;
            height: 70px;
            margin: 2%;
            img {
                width: 100%;
                height: 80%;
                border-radius: 50%;
            }
            p {
                text-align: center;
            }
        }

    }

}

</style>