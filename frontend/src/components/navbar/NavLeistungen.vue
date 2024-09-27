<template>
    <AppNavbar />
    <div class="container">
        <h1>{{ $t('navbar.services') }}</h1>
        <el-card class="service-card" :body-style="{ padding: '20px' }">
            <h2>Hizmetlerimiz</h2>
            <el-row :gutter="20">
                <el-col :span="8" v-for="(service, index) in services" :key="index">
                    <el-card class="service-item" :body-style="{ padding: '20px' }">
                        <h3>{{ service.title }}</h3>
                        <p>{{ service.description }}</p>
                        <el-button type="primary" @click="handleServiceClick(service)">Detaylar</el-button>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </div>
    <MainFooter />
</template>

<script lang="ts">
import AppNavbar from '@/components/AppNavbar.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'NavLeistungen',
    components: {
        AppNavbar,
        MainFooter,
    },
    data() {
        return {
            services: [
                { title: 'Hizmet 1', description: 'Hizmet 1 açıklaması.' },
                { title: 'Hizmet 2', description: 'Hizmet 2 açıklaması.' },
                { title: 'Hizmet 3', description: 'Hizmet 3 açıklaması.' },
                { title: 'Hizmet 4', description: 'Hizmet 4 açıklaması.' },
            ]
        };
    },
}
</script>

<style scoped>
.container {
    padding: 20px;
}

.service-card {
    margin-top: 20px;
}

.service-item {
    text-align: center;
    margin-bottom: 20px;
}
</style>
