<template>
<el-col :span="24">
    <div class="social-media">
        <a href="https://www.facebook.com" target="_blank" class="facebook">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" class="linkedin">
            <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" class="instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com" target="_blank" class="tiktok">
            <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" class="youtube">
            <i class="fab fa-youtube"></i>
        </a>
    </div>

    <div class="banner-section">
        <div class="banner-link">
            <h3>Jetzt anfragen</h3>
            <div class="banner-text">
                Lust auf ein Projekt<br>mit VIERLESS?
            </div>
            <router-link to="/anfrage">
                <el-button class="banner-button">Termin vereinbaren</el-button>
            </router-link>
        </div>
    </div>
</el-col>
</template>

<script lang="ts">
export default {
    name: 'BannerSection',
};
</script>

<style scoped>
.banner-section {
    position: relative;
    text-align: center;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
}

.social-media {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.social-media a {
    color: white;
    font-size: 20px;
    text-decoration: none;
    transition: all 0.3s ease;
    background: linear-gradient(to bottom, #212121, #111111);
    padding: 8px;
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
}

.social-media a.facebook:hover {
    color: #3b5998;
}

.social-media a.instagram:hover {
    color: #E1306C;
}

.social-media a.linkedin:hover {
    color: #0077B5;
}

.social-media a.tiktok:hover {
    color: #69C9D0;
}

.social-media a.youtube:hover {
    color: #FF0000;
}

.banner-link {
    background: linear-gradient(to right, #2a5844, #122119);
    padding: 40px 270px;
    border-radius: 8px;
}

.banner-link h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 300;
    color: lightgreen;
    margin-bottom: 10px;
}

.banner-text {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #d4d4d4;
    margin-bottom: 20px;
}

.banner-button {
    background-color: #0def95;
    color: black;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 4px;
    border: transparent;
    transition: background-color 0.3s ease, color 0.3s ease;
    animation: flash 1.5s infinite;
}

.banner-button:hover {
    background-color: #0def95;
    border: transparent;
    color: black;
}

@media (max-width: 768px) {
    .banner-link {
        padding: 20px 100px;
    }

    .banner-link h3 {
        font-size: 12px;
    }

    .banner-text {
        font-size: 20px;
    }

    .social-media a {
        font-size: 18px;
        width: 30px;
        height: 30px;
    }
}
</style>
