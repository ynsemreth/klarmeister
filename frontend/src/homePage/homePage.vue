<template>
    <AppNavbar />
    <el-row justify="center" class="body" style="overflow-x: hidden;">
      <HeroSection />
      <WebSection />
      <ReferansSection />
      <InformationSection />
      <OurServices />
      <FaqSection />
      <BannerSection />
    </el-row>
    <MainFooter />
  </template>
  
  <script lang="ts">
  import { defineComponent, defineAsyncComponent } from 'vue';
  
  export default defineComponent({
    name: 'HomePage',
    components: {
      AppNavbar: defineAsyncComponent(() => import('@/components/AppNavbar.vue')),
      MainFooter: defineAsyncComponent(() => import('@/components/MainFooter.vue')),
      HeroSection: defineAsyncComponent(() => import('@/components/home/HeroSection.vue')),
      WebSection: defineAsyncComponent(() => import('@/components/home/WebSection.vue')),
      ReferansSection: defineAsyncComponent(() => import('@/components/home/ReferansSection.vue')),
      InformationSection: defineAsyncComponent(() => import('@/components/home/InformationSection.vue')),
      OurServices: defineAsyncComponent(() => import('@/components/home/OurServices.vue')),
      FaqSection: defineAsyncComponent(() => import('@/components/home/FaqSection.vue')),
      BannerSection: defineAsyncComponent(() => import('@/components/home/BannerSection.vue')),
    },
  });
  </script>
  
  <style>
  .body {
    background: linear-gradient(to bottom, #52c885, #000000);
  }
  
  .el-row {
    padding: 0;
  }
  </style>
  