<template>
   <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in swipeList" :key="item.imgSrc">
  <img :src="item.imgSrc" alt="">
  
  </van-swipe-item>
  
</van-swipe>
</template>

<script setup lang="ts">
import {SwiperStore} from '@/store/Swiper/index'
import { ref } from 'vue';
import {storeToRefs} from "pinia"
const useSwiperStore=SwiperStore()
useSwiperStore.getSwiperList()
const {swipeList}=storeToRefs(useSwiperStore)

</script>

<style scoped lang="less">
 img{
   width: 100%;
   height: 100%;
 }
</style>