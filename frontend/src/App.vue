<template>
<AppNavbar />
<router-view />
<MainFooter />
</template>

<script lang="ts">
import AppNavbar from '@/components/AppNavbar.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: "App",
    components: {
        AppNavbar,
        MainFooter,
    },
};
</script>

<style lang="scss">
body {
    margin: 0;
    height: auto;
    background-color: black;
}
</style>
