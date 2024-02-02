<template>
    <div class="container">
        <div class="serach-wrap">
            <!-- 左侧 -->
            <div class="search-left_wrap">
                <ul>
                    <li 
                        class="category-item"
                        :class="item.category_id === currentCategory.category_id ? 'category-item__active' : ''"
                        v-for="item in categoryList" 
                        :key="item.category_id"
                        @click="getList(item)">
                        {{item.category_name}}
                    </li>
                </ul>
            </div>
            <!-- 右侧 -->
            <div class="search-right_wrap">
                <div class="list-title">热卖</div>
                <ul>
                    <li class="list-item" 
                        v-for="item in goodList" 
                        :key="item.product_id"
                        @click="toDetail(item.product_id)"
                    >
                        <img :src="item.product_img_url"/>
                        <div class="goods-title">{{item.product_name}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref,onMounted,onUnmounted } from 'vue' 
import { useRouter } from 'vue-router'
import { ICategory,IGoodList } from '@/interface/index'
import { getCategory, getCategorygoods } from '@/api/index'

const categoryList = ref<ICategory[]>([])
const currentCategory = ref<ICategory>()
const getCategoryList = () => {
    getCategory<ICategory[]>().then(res => {
        categoryList.value = res.data
        currentCategory.value =  JSON.parse(sessionStorage.getItem('categoryItem')) || categoryList.value[0]
        getGoodList(currentCategory.value.category_id)
    })
}
const goodList = ref<IGoodList[]>([])
const getGoodList = (id: number) => {
     getCategorygoods<IGoodList[]>(id).then(res => {
        goodList.value = res.data || []
    })
}
const getList = (item:ICategory) => {
    currentCategory.value = item
    sessionStorage.setItem('categoryItem',JSON.stringify(currentCategory.value))
    getGoodList(item.category_id)
}
const router = useRouter()
const toDetail = (id:number) => {
    router.push(`/detail/${id}`)
}
onMounted(()=> {
    getCategoryList()
})


</script>

<style lang="less" scoped>
.serach-wrap {
    display: flex;
    .search-left_wrap {
        flex: 0 1 30%;
        text-align: center;
        height: 100%;
        overflow: auto;
        .category-item {
            padding: 10px;
            background: @background-color;
            color: #666;
            font-weight: 600;
        }
        .category-item__active {
            background: #4086f440;
            border-left:5px solid @primary-color;
        }
    }
    .search-right_wrap {
        flex: 0 1 70%;
        padding: 10px;
        .list-title {
            border-bottom: 1px solid @solid-color;
            padding-bottom: 5px;
        }
        .list-item {
            display: flex;
            display: flex;
            padding-bottom: 5px;
            padding-top: 5px;
            border-bottom: 1px solid @solid-color;
            img {
                width: 60px;
            }
            .goods-title{
                margin-left: 5px;
                font-size: 14px;
                color: #666;
            }
        }

    }
}

</style>