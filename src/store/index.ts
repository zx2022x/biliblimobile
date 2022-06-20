import { defineStore } from "pinia";
import {getNavList} from "@/api/requests"
export const NavStore=defineStore({
    id:'NavStore',
    state:()=>({
        navList:[],

    }),
    actions:{
        async getNavList(){
            const res=await getNavList()
            console.log(res)
        }
    },
    getters:{
        getNavList(state){
            return state.navList
        }
    }
})