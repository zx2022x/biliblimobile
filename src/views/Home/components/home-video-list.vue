<template>
  <div class="list">
    <!-- <AppVideoItem v-for="item in list" :key="item.id" :video="item" /> -->
    <AppVideoItem v-for="item in videosList" :key="item.id" :video="item"/>
  </div>
</template>

<script setup lang="ts">
import AppVideoItem from '@/components/app-video-item.vue'
import {VideosListStore} from '@/store/VideosList/index'
import {storeToRefs} from "pinia"

const useVideosListStore=VideosListStore()
useVideosListStore.getVideosList()
const {videosList}=storeToRefs(useVideosListStore)

// const video = reactive<VideosListState>({})
// interface IVideoItem {
//   id: number;
//   imgSrc: string;
//   desc: string;
//   playCount: string;
//   commentCount: string;
//   videoSrc: string;
// }

// const list = ref<IVideoItem[]>([])


// axios({
//   method: 'get',
//   url: '/videosList'
// }).then(res => {
//   console.log('视频列表的数据', res.data.result)
//   list.value = res.data.result
// })


</script>

<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>
