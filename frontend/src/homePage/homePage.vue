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
import {
    defineComponent
} from 'vue';

import AppNavbar from '@/components/AppNavbar.vue';
import MainFooter from '@/components/MainFooter.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import ReferansSection from '@/components/home/ReferansSection.vue';
import InformationSection from '@/components/home/InformationSection.vue';
import OurServices from '@/components/home/OurServices.vue';
import WebSection from '@/components/home/WebSection.vue';
import FaqSection from '@/components/home/FaqSection.vue';
import BannerSection from '@/components/home/BannerSection.vue';

export default defineComponent({
    name: "HomePage",
    components: {
        WebSection,
        HeroSection,
        ReferansSection,
        OurServices,
        InformationSection,
        FaqSection,
        BannerSection,
        AppNavbar,
        MainFooter
    },
});
</script>

<style>
.body {
    background: black;
}

.el-row {
    padding: 0;
}
</style>
