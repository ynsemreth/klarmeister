<template>
<div class="navbar">
    <nav class="nav-links">
        <a href="/">Home</a>
        <a>
            <router-link to="leistungen">Leistungen</router-link>
        </a>
        <a>
            <router-link to="uberuns">Über Uns</router-link>
        </a>
    </nav>
</div>
</template>

<script lang="ts">
export default {
    name: 'AppNavbar',
};
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

.logo img {
    height: 50px;
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
</style>
