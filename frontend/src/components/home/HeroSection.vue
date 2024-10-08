<template>
<el-row justify="center" class="body">
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
                <img src="@/assets/laptop.png" class="laptop-image" alt="Laptop">

                <div class="video-overlay">
                    <video id="video" autoplay controls muted playsinline class="media-video">
                        <source src="@/assets/klarmeistervideo.mp4" type="video/mp4" />
                        Tarayıcınız video etiketini desteklemiyor.
                    </video>
                </div>
            </div>
        </div>
    </el-col>
</el-row>
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
.content-and-media {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 5%;
}

.hero-content {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.media-container {
    position: relative;
    width: 1200px;
    height: auto;
    margin-top: 0;
}

.laptop-image {
    width: 100%;
    height: auto;
}

.video-overlay {
    position: absolute;
    top: 210px;
    left: 133px;
    width: 460px;
    height: 290px;
}

.media-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-section {
    text-align: left;
    background: linear-gradient(to bottom, #053c05, #000000);
    padding: 20px;
}

.hero-h3 {
    font-family: 'Poppins', monospace;
    font-size: 13px;
    color: #36bd36;
}

.hero-text {
    font-family: 'Poppins', monospace;
    font-size: 13px;
    color: #d1d1d1;
}

.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;
    display: inline-block;
    padding-bottom: 0.25rem;
    position: relative;
}

.hero-title::before{
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px; 
    background-color: #0def95;
    transition: width 0.3s ease; 
}

.hero-title:hover::before{
    width: 100%;
}

.hero-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: #d1d1d1;
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
        background-color: #0def95;
        box-shadow: none;
    }

    50% {
        background-color: #0abf7e;
        box-shadow: 0 0 15px rgba(13, 239, 149, 0.5), 0 0 30px rgba(13, 239, 149, 0.3);
    }
}

.btn-services {
    background-color: #0def95;
    border: none;
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
    max-width: 50px;
    margin-left: 10px;
}
</style>
