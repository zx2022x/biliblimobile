import { defineStore } from "pinia";
import {reSwiperList} from "@/api/requests"
import {swiperState} from "@/type/Swiper"
export const SwiperStore=defineStore({
    id:'SwiperStore',
    // state:()=>({
    //     navList:[],

    // }),
    state:()=>({
        swipeList:[] as swiperState[]
    }),
    // actions:{
    //     async getNavList(){
    //         const res=await getNavList()
    //         if(res.data.code==0){
    //             console.log(res.data.result)
    //             this.navList=res.data.result
    //         }
    //     //    console.log(res)
    //     }
    // },
            actions:{
                    async getSwiperList(){
                        const {data}=await reSwiperList()
                        if(data.code==0){
                           this.swipeList=data.result
                           console.log(data.code)
                        }
                    }
            },
    // getters:{
    //     getNavList1(state){
    //         return state.navList
    //     }
    // }
    getters:{
         tteSwiperList(state){
             return state.swipeList
         }
    }
})