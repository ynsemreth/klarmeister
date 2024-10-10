<template>
<el-col :span="24" class="hero-section">
    <div class="content-and-media">
        <div class="hero-content">
            <h3 class="hero-h3">WIR SIND KLARMEISTER</h3>
            <h1 class="hero-title">
                Deine Webseite braucht kein Facelift - sie braucht Power
            </h1>
            <h2 class="hero-subtitle">
                Mit uns erhalten Sie eine neue, leistungsstarke Webseite zur Neukunden und
                Mitarbeitergewinnung - und das in nur 3 kurzen Online-Terminen. Der gesamte
                Zeitaufwand für Sie beträgt dabei durchschnittlich nur 4 Stunden.
            </h2>
            <h3 class="hero-text">
                Starte jetzt und hol dir die Webseite, die Kunden gewinnt - oder die passenden Mitarbeiter!
            </h3>
            <div class="hero-button">
                <router-link to="/anfrage">
                    <el-button class="btn-services">
                        Jetzt Angebot einholen
                        <el-icon>
                            <Right />
                        </el-icon>
                    </el-button>
                </router-link>
                <img src="@/assets/garanti.png" alt="garanti" />
            </div>
        </div>

        <div class="media-container">
            <img src="@/assets/laptop.png" alt="Laptop" class="laptop-image">
            <div class="video-overlay">
                <video id="video" autoplay controls loading="lazy" class="media-video">
                    <source src="@/assets/klarmeistervideo.mp4" type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                </video>
            </div>
        </div>
    </div>
</el-col>
</template>

<script>
import {
    Right
} from '@element-plus/icons-vue';

export default {
    name: 'HomeSection',
    components: {
        Right
    }
};
</script>

<style>
.hero-section {
    text-align: left;
    max-width: 1200px;
    margin: 0 auto;
}

.content-and-media {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.hero-content {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 50%;
}

.media-container {
    position: relative;
    width: 100%;
    max-width: none; 
    height: auto;
    margin-top: 0;
    flex-basis: 100%; 
}

.laptop-image {
    width: 100%;
    height: auto;
}

.video-overlay {
    position: absolute;
    top: 28.5%;
    left: 18%;
    width: 63.5%;
    height: 40%;
}

.media-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-h3 {
    font-family: 'Poppins', monospace;
    font-size: 13px;
    color: white;
    text-align: center;
}

.hero-text {
    font-family: 'Poppins', monospace;
    font-size: 13px;
    color: black;
}

.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    word-wrap: break-word;
    font-style: italic;
    font: bold;
    font-weight: 1500;
    color: black;
    margin: 0;
    line-height: 1.2;
    display: inline-block;
    padding-bottom: 0.25rem;
    position: relative;
}

.hero-title::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
}

.hero-title:hover::before {
    width: 100%;
}

.hero-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color: black;
    margin: 20px 0;
}

.hero-button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
}

@keyframes flash {

    0%,
    100% {
        background-color: black;
        box-shadow: none;
    }

    50% {
        background-color: black;
        box-shadow: 0 0 15px rgba(13, 239, 149, 0.5), 0 0 30px rgba(13, 239, 149, 0.3);
    }
}

.btn-services {
    background-color: #0def95;
    border: none;
    height: 50px;
    color: black;
    padding: 10px 20px;
    align-items: center;
    animation: flash 1.5s infinite;
    transition: background-color 0.3s;
}

.btn-services:hover {
    animation: none;
    background-color: #0def95;
    color: black;
}

.hero-button img {
    max-width: 100px;
    max-height: 60px;
    margin-left: 10px;
}

@media (max-width: 768px) {
    .content-and-media {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .hero-content {
        max-width: 100%;
        text-align: center;
        padding: 50px;
        margin-bottom: 0px;
    }

    .hero-title {
        font-size: 24px;
        line-height: 1.2;
    }

    .hero-subtitle {
        font-size: 14px;
        margin: 15px 0;
    }

    .hero-button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
    }

    .hero-h3,
    .hero-text {
        font-size: 11px;
    }

    .media-container {
        width: 100%;
        margin-top: 0px;
        margin-bottom: 0px;
        position: relative;
    }

    .laptop-image {
        width: 100%;
    }

    .video-overlay {
        position: absolute;
        top: 28.5%;
        left: 18%;
        width: 63.7%;
        height: 41%;
    }

    .media-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
