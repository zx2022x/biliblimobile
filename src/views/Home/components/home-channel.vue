<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in navList" :key="item.id" :title="item.text">
    </van-tab>
    
  </van-tabs>
</template>

<script setup lang="ts">
import { ref} from "vue"
import { NavStore } from "@/store/NavList/index"
import {storeToRefs} from "pinia"

      const active = ref("")
      const useNavStore = NavStore()
      useNavStore.getNavList()
      // useNavStore
      // let navList1=reactive<navItem[]>([])
      const {navList} =storeToRefs(useNavStore)
      //  const {navList} =useNavStore
      //  navList1=navList
      
//         defineExpose({
//            navList1
// })
</script>

<style scoped>
</style>