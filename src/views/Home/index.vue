<template>
    <div>
         <appHeader/>
         <homeChannelVue/>
         <homeSwipeVue />
         <HomeVideoList/>
    </div>
</template>

<script setup lang="ts">
import appHeader from '@/components/app-header.vue';
import homeChannelVue from '@/views/Home/components/home-channel.vue';
import homeSwipeVue from './components/home-swipe.vue';
import HomeVideoList from "@/views/Home/components/home-video-list.vue"
</script>

<style scoped>
</style>