<template>
<div class="navbar">
    <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
    </div>
    <el-icon class="menu-icon" @click="toggleMenu">
        <Menu />
    </el-icon>
    <nav class="nav-links" :class="{ 'active': isMenuOpen }">
        <a href="/">Home</a>
        <a class="angebot-link">
            <router-link to="/anfrage">Zur Anfrage - 1 Minute</router-link>
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
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    position: relative;
    z-index: 10;
}

.logo img {
    height: 40px;
    margin-top: 10px;
}

.nav-links {
    display: flex;
    align-items: center;
}

.nav-links a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 14px;
    position: relative;
}

.nav-links a:not(.angebot-link)::after {
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

.nav-links a:not(.angebot-link):hover::after {
    width: 100%;
}

.angebot-link {
    background-color: #0def95;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    color: black;
    animation: flash 1.5s infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.angebot-link:hover {
    background-color: #0abf7e;
    color: white;
}

@keyframes flash {

    0%,
    100% {
        box-shadow: 0 0 10px rgba(13, 239, 149, 0.5), 0 0 20px rgba(13, 239, 149, 0.3);
    }

    50% {
        box-shadow: 0 0 20px rgba(13, 239, 149, 0.8), 0 0 30px rgba(13, 239, 149, 0.5);
    }
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
    }

    .nav-links a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        text-align: center;
        color: white;
        text-decoration: none;
        margin: 0;
        font-size: 12px;
    }

    .menu-icon {
        display: block;
        margin-left: auto;
    }

    .angebot-link {
        width: 100%;
        text-align: center;
    }
}
</style>
