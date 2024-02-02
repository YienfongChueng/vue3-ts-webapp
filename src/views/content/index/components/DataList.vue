<template>
    <div class="good-list__wrap">
        <ul class="good_list">
            <li 
                class="good_list__item"
                v-for="item in list" 
                :key="item.product_id"
                @click="toDetail(item.product_id)"
            >
                <img :src="item.product_img_url" />
                <p>{{item.product_name}}</p>
                <p>
                    <strong>¥</strong>
                    <span class="uprice">{{item.product_uprice}}</span>
                    <span class="price">¥{{item.product_price}}</span>
                    <span class="shopping-cart" @click.stop="addCart(item)">
                            <i class="iconfont icon-gouwuche"></i>
                    </span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IGoodList } from '@/interface/index'
import { useRouter } from 'vue-router'
let {list} = defineProps({
    list:{
        type:Array as ()=> IGoodList[],  //类型断言   可以手动指定一个值的类型
        default:()=>[]
    }
})
const router = useRouter() 
const toDetail = (id: number) => {
    router.push(`/detail/${id}`)
}
function addCart(item) {

    alert(item.product_name)
}

</script>

<style lang="less" scoped>
.good-list__wrap {
    padding: 0 10px;
    .good_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &__item{
            flex: 0 1 49%;
            position: relative;
            box-shadow: 4px 5px 10px rgba(0,0,0,0.2);
            border-radius:@border-radius;
            padding: 10px;
            box-sizing: border-box;
             margin-bottom: 15px;
            img {
                width: 100%;
            }
            p {
                line-height: 19px;
            }
            .uprice {
                color: #ff0000;
                font-size: 18px;
            }
            .price {
                margin-left: 10px;
                text-decoration: line-through;
            }
            .shopping-cart {
                float: right;
                color: #dd2804;
                font-weight: 600;
            }

        }
    }

}

</style>