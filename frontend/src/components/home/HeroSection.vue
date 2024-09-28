<template>
<el-row justify="center" class="body">
    <el-col :span="24" class="hero-section">
        <div class="hero-content">
            <h3 class="hero-h3">IHR EXTERNES WEBDESIGN TEAM</h3>
            <h1 class="hero-title">
                Verkaufsstarke Webseiten, die Ihre Kunden überzeugen
            </h1>
            <h2 class="hero-subtitle">
                Entfachen Sie das Potenzial Ihres Unternehmens mit einem
                beeindruckenden Online-Auftritt, der Ihren Umsatz steigert und Ihre
                Marke stärkt.
            </h2>
            <div class="hero-button">
                <router-link to="/anfrage">
                    <el-button class="hero-button-btn">
                        Jetzt Angebot einholen
                        <el-icon>
                            <Right />
                        </el-icon>
                    </el-button>
                </router-link>
                <img src="@/assets/garanti.png" alt="garanti" />
            </div>
        </div>
    </el-col>

    <el-col :span="24" class="overlay-video-container" :class="{ 'normal-view': isInView }">
        <img src="@/assets/laptop.png" class="mockup-image" alt="Mockup Image" />
        <div class="custom-video-container">
            <div class="custom-video">
                <video autoplay controls muted playsinline class="custom-video-player">
                    <source src="@/assets/video.mp4" type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                </video>
            </div>
        </div>

        <div class="custom-text-container">
            <h3 class="custom-text-title">Unsere Qualität</h3>
            <p class="custom-text-description">
                Unsere Website besticht nicht nur durch beeindruckendes Design, sondern auch durch hervorragende Benutzerfreundlichkeit und Leistung.
            </p>
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
        Right,
    },
    data() {
        return {
            isInView: false,
        };
    },
    methods: {
        handleScroll() {
            const videoSection = document.querySelector('.overlay-video-container');
            if (videoSection) {
                const sectionPosition = videoSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 5;

                this.isInView = sectionPosition < screenPosition;
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>
  
  
<style>
.hero-section {
    text-align: center;
    background: linear-gradient(to bottom, #053c05, #000000);
    position: relative;
}

.overlay-video-container {
    text-align: center;
    position: relative;
}

.hero-content {
    position: relative;
    display: inline-block;
    max-width: 900px;
    padding: 20px;
}

.hero-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
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

.hero-button-btn {
    background-color: #0def95;
    border: none;
    color: black;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    animation: flash 1.5s infinite;
    transition: background-color 0.3s;
}

.hero-button-btn:hover {
    animation: none;
    background-color: #0def95;
    color: black;
}

.hero-button img {
    max-width: 50px;
    min-width: 50px;
    max-height: 50px;
    min-height: 50px;
    display: block;
    margin-left: 10px;
}

.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 64px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;
}

@keyframes slide-up {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.hero-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #d1d1d1;
    margin: 20px 0 0;
    animation: slide-up 3s ease forwards;
}

.hero-h3 {
    font-family: 'Poppins', Courier, monospace;
    font-size: 13px;
    color: rgb(54, 189, 54);
}

.mockup-image {
    left: 10%;
    width: 50%;
    height: auto;
    display: block;
    position: relative;
    z-index: 1;
    transition: opacity 1s ease-in-out;
    border-radius: 6%;
}

.custom-video-container {
    position: absolute;
    top: 23%;
    left: 18.5%;
    width: 23%;
    height: 27.8%;
    transform: perspective(800px) rotateX(-8deg) rotateY(8deg) skewY(-27deg);
    border-radius: 10px;
    overflow: hidden;
    z-index: 2;
    transition: transform 1s ease-in-out, top 1s ease-in-out, left 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out;
}

.overlay-video-container.normal-view .custom-video-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) perspective(800px);
    width: 50%;
    height: auto;
}

.overlay-video-container.normal-view .mockup-image {
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.overlay-video-container.normal-view .custom-text-container {
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.custom-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.custom-video-player {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
}

.custom-text-container {
    position: absolute;
    top: 22%;
    left: 55%;
    width: 40%;
    padding: 20px;
    color: white;
    text-align: left;
    z-index: 3;
}

.custom-text-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 10px;
}

.custom-text-description {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #d1d1d1;
    margin: 0;
    line-height: 1.6;
}
</style>
