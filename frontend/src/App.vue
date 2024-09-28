<template>
<router-view />
</template>

<script lang="ts">
export default {
    name: "App",
    components: {},
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
}

#app {
    min-height: 100vh;
    background: linear-gradient(to bottom, #053c05, #000000);
    margin: 0 auto;
    width: 100%;
    overflow-x: hidden;
}

@media (max-width: 768px) {
    body {
        overflow-x: hidden;
    }
}

</style>

