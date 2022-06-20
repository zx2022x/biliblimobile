import {defineStore} from 'pinia'
import {VideosListState} from '@/type/VideosList'
import {reqVideosList} from "@/api/requests"
export const VideosListStore=defineStore({
    id:'VideosList',
    state:()=>({
        videosList:[] as VideosListState[]
    }),
    actions:{
      async getVideosList(){
          const {data}=await reqVideosList()
          if(data.code==0){
              this.videosList=data.result
          }
      }
    }

})