import request from '@/utils/request'
import { AxiosResponse } from 'axios'

// 图片轮播 
// export function getSwiper<T>():Promise<AxiosResponse<T>> {
//     return request({
//         method:'get',
//         url: '/swiper',
//     })
// }
// 图片轮播 箭头函数写法
export const getSwiper = <T>():Promise<AxiosResponse<T>> => {
    return request({
        method: 'get',
        url: '/swiper'
    })
}


// 首页商品分类
export function getCategoryBanner<T>():Promise<AxiosResponse<T>> {
    return request({
        method: 'get',
        url: '/categoryBanner'
    })
}

// 商品列表
export function getCategorygoods<T>(id:number): Promise<AxiosResponse<T>>{
    return request({
        method: 'get',
        url: `/categorygoods`,
        params: {mId:id}
    })
}

// 商品列表详情
export function getDetail<T>(id:number): Promise<AxiosResponse<T>> {
    return request({
        method: 'get',
        url: '/detail',
        params: {mId:id}
    })
}

// 所有商品分类
export function getCategory<T>(): Promise<AxiosResponse<T>>{
    return request({
        method: 'get',
        url: '/category'
    })
}