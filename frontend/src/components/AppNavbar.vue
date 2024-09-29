<template>
<div class="navbar">
    <el-icon class="menu-icon" @click="toggleMenu">
        <Menu />
    </el-icon>
    <nav class="nav-links" :class="{ 'active': isMenuOpen }">
        <a href="/">Home</a>
        <a>
            <router-link to="leistungen">Datenschutz</router-link>
        </a>
        <a>
            <router-link to="uberuns">Impressum</router-link>
        </a>
    </nav>
</div>
</template>

<script lang="ts">
import {
    Menu
} from '@element-plus/icons-vue';
import {
    defineComponent
} from 'vue';

export default defineComponent({
    name: 'AppNavbar',
    components: {
        Menu,
    },
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
});
</script>

<style>
.navbar {
    background: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    position: relative;
    z-index: 10;
}

.nav-links {
    display: flex;
    margin-left: auto;
}

.nav-links a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 14px;
    position: relative;
}

.nav-links a::after {
    content: '';
    display: block;
    height: 2px;
    background: white;
    width: 0;
    transition: width 0.3s;
    position: absolute;
    left: 0;
    bottom: -5px;
}

.nav-links a:hover::after {
    width: 100%;
}

.menu-icon {
    display: none;
    cursor: pointer;
}

@media (max-width: 768px) {
    .nav-links {
        flex-direction: column;
        max-height: 0;
        transition: max-height 0.3s ease;
        z-index: 20;
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        overflow: hidden;
        top: 60px;
        right: 0;
    }

    .nav-links.active {
        max-height: 220px;
        max-width: 100px;
        right: 0;
    }

    .nav-links a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 100px;
        text-align: center;
        color: white;
        text-decoration: none;
        margin: 0;
        font-size: 10px;
        right: 0;
    }

    .menu-icon {
        display: block;
        margin-left: auto;
    }
}
</style>
