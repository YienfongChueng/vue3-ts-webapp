//轮播数据类型
export interface ISwiper {  
    id:number,
    img_url:string
}

// 商品分类
export interface ICategory{  
    category_id:number,
    category_name:string,
    category_pid?:number,
    img:string
}

// 商品列表
export interface IGoodList {
    category_id:number,
    category_name:string,
    category_pid:number,
    img:string,
    product_comment_num:number,
    product_detail:string,
    product_hot:number,
    product_id:number,
    product_img_url:string,
    product_name:string,
    product_num:string,
    product_price:number,
    product_search_hot:number,
    product_special:number,
    product_uprice:number,
    shop_id:number
}

//详情页数据类型-详情页图片
export interface IDetailImg{  
    image_url:string
}
//详情页数据类型-详情页数据
export interface IDetailInfo{ 
    category_id:number,
    product_id:number,
    product_name:string,
    product_img_url:string,
    product_detail:string,
    product_uprice:number,
    product_price:number,
    [propname:string]:any
}