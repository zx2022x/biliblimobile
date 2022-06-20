import request from "@/api/index"
export const getNavList=()=>request({url:'/navList',method:'get'})
export const reSwiperList=()=>request({url:'/swiperList',method:'get'})
export const reqVideosList=()=>request({url:'/videosList',method:'get'})