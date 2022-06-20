import { defineStore } from "pinia";
import {getNavList} from "@/api/requests"
import {navState} from "@/type/Nav"
export const NavStore=defineStore({
    id:'NavStore',
    state:()=>({
        navList:[] as navState[],

    }),
    actions:{
        async getNavList(){
            const res=await getNavList()
            if(res.data.code==0){
                console.log(res.data.result)
                this.navList=res.data.result
            }
        //    console.log(res)
        }
    },
    getters:{
        getNavList1(state){
            return state.navList
        }
    }
})