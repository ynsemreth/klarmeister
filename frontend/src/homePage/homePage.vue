<template>
<el-row justify="center" class="body">
    <!-- Hero Section -->
    <el-col :span="24" class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title">
                Verkaufsstarke Webseiten, die Ihre Kunden überzeugen
            </h1>
            <h2 class="hero-subtitle">
                Entfachen Sie das Potenzial Ihres Unternehmens mit einem
                beeindruckenden Online-Auftritt, der Ihren Umsatz steigert und Ihre
                Marke stärkt.
            </h2>
        </div>
    </el-col>

    <!-- Overlay Video Section -->
    <el-col :span="24" class="overlay-video-container" :class="{ 'normal-view': isInView }">
        <img src="@/assets/laptop.png" class="mockup-image" alt="Mockup Image" />

        <!-- Responsive ve Şekilli Video Kapsayıcısı -->
        <div class="custom-video-container">
            <div class="custom-video">
                <video autoplay loop muted playsinline class="custom-video-player">
                    <source src="@/assets/wrapper.mp4" type="video/mp4" />
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

        <div class="sub-hero-content">
            <h1 class="sub-hero-title">Unsere Mission</h1>
            <h2 class="sub-hero-text">
                Unsere Mission ist es, Menschen und Unternehmen dabei zu unterstützen,
                ihre Online–Präsenz zu stärken und ihre Ziele zu erreichen, indem wir klare,
                innovative und nachhaltige Lösungen bieten.
            </h2>
        </div>
    </el-col>

    <!-- Information Section -->
    <el-col :span="24" class="information">
        <div class="information-content">
            <h1 class="information-title">Schnauze voll von Luftpumpen</h1>
            <h2 class="information-text-title">
                <span class="highlight">Haben Sie auch die Nase voll von leeren Versprechungen?</span>
            </h2>
            <p class="information-text-content">
                Keine Lust mehr auf Agenturen, die behaupten, Ihre Website innerhalb
                von 8 Stunden oder gefühlt einem halben Jahr zu erstellen für
                horrende Summen von 20.000 Euro oder mehr?
            </p>
            <p class="information-text-content">
                Bei uns ist das anders. Wir bieten eine transparente und zielführende
                Lösung, die Ihre Erwartungen übertrifft.
            </p>
        </div>
        <div class="information-image">
            <img src="@/assets/Klarheitsgarantie.png" alt="Frustrated Man" class="info-image" />
        </div>
    </el-col>

    <el-col :span="24" class="new-section">
        <el-row :gutter="10">
            <el-col :span="14" class="left-section">
                <div class="big-case_left">
                    <div class="big-case_logo-wrapper">
                        <img src="@/assets/sehlen_logo.png" loading="lazy" alt="Sehlen Studios" class="big-case_logo" />
                    </div>

                    <div class="big-case_image-wrapper">
                        <img src="@/assets/sehlen_site.png" loading="lazy" alt="Sehlen Studio Site" class="big-case_featured-image" />
                    </div>

                    <div class="big-case_meta">
                        <h3 class="big-case_title">
                            Landingpage für Recruiting Marktführer, losgelöst von internen Blockaden.
                        </h3>
                        <div class="case_tags-collection">
                            <div class="case_tag">
                                <el-icon><Document /></el-icon>
                                <div class="case_tag-text">Design System</div>
                            </div>
                            
                            <div class="case_tag">
                                <el-icon><Refresh /></el-icon>
                                <div class="case_tag-text">Figma to Webflow</div>
                            </div>
                            <div class="case_tag">
                                <el-icon><MagicStick /></el-icon>
                                <div class="case_tag-text">Dynamic Lotties</div>
                            </div>
                        </div>

                        <div class="big-case_actions">
                            <div class="big-case_actions-open">
                                <el-button type="primary" class="btn_wrapper">
                                    <span class="btn_label">Casestudy ansehen</span>
                                </el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>

            <el-col :span="10" class="right-section">
                <div class="big-case_right">
                    <div class="big-case_right-video">
                        <video controls muted class="custom-card-player">
                            <source src="@/assets/sehlen_video.mp4" type="video/mp4" />
                            Tarayıcınız video etiketini desteklemiyor.
                        </video>
                    </div>

                    <div class="big-case_right-text">
                        <h3 class="big-case_right-title">Gian-Marco Blum</h3>
                        <div class="big-case_right-text-details">
                            <span class="big-case_right-description is-first">Geschäftsführer</span>
                            <span class="big-case_right-description">Candidate Flow GmbH</span>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </el-col>

</el-row>
</template>

<script lang="ts">
import {
    ref,
    onMounted,
    onUnmounted
} from 'vue';
import { Document, Refresh, MagicStick } from '@element-plus/icons-vue';

export default {
    components:{
        Document,
        Refresh,
        MagicStick
    },
    setup() {
        const isInView = ref(false);

        const handleScroll = () => {
            const videoSection = document.querySelector('.overlay-video-container');
            if (videoSection) {
                const sectionPosition = videoSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 5;

                if (sectionPosition < screenPosition) {
                    isInView.value = true;
                } else {
                    isInView.value = false;
                }
            }
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            isInView,
        };
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@600&display=swap');

.body {
    height: 100%;
    margin: 0;
    background: black;
    overflow-x: hidden;
}

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

.hero-title {
    padding-top: 4%;
    font-family: 'Montserrat', sans-serif;
    font-size: 64px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;
}

.hero-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #d1d1d1;
    margin: 20px 0 0;
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
    top: 20%;
    left: 18.5%;
    width: 23%;
    height: 27.8%;
    transform: perspective(800px) rotateX(-8deg) rotateY(8deg) skewY(-27deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
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
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: transform 1s ease-in-out, top 1s ease-in-out, left 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out;
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

.information {
    background-color: #000;
    color: #fff;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.information-content {
    color: #fff;
    max-width: 60%;
}

.information-image {
    max-width: 35%;
    display: flex;
    align-items: flex-end;
}

.information-image .info-image {
    max-width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.information-image .info-image:hover {
    transform: scale(0.95);
}

.information-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    color: #fff;
    text-align: center;
    font-weight: 700;
}

.information-text-title {
    font-family: 'Helvetica', sans-serif;
    font-size: 24px;
    color: #fff;
    font-weight: 400;
    background: linear-gradient(to right, #135b13, #000000);
    padding: 10px 20px;
    border-radius: 10px;
}

.information-text-content {
    font-family: 'Helvetica', sans-serif;
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 20px;
}

.new-section {
    display: flex;
    justify-content: center;
    padding: 35px 20px;
    background: linear-gradient(to bottom, #121640, #000000);
    border-radius: 30px;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 5%;
    border: 3px solid transparent;
    transition: border-color 0.8s ease, background-color 0.8s ease;
}

.new-section:hover {
    border-color: #fff;
}

.left-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 20px;
}

.right-section {
    display: flex;
    flex-direction: column;
}

.big-case_logo-wrapper {
    margin-bottom: 15px;
}

.big-case_logo {
    width: 50px;
    height: auto;
}

.big-case_image-wrapper {
    margin-bottom: 15px;
}

.big-case_featured-image {
    width: 80%;
    height: auto;
    border-radius: 10px;
}

.big-case_meta {
    text-align: left;
}

.big-case_title {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    width: 80%;
    font-weight: 600;
    color: white;
    margin-bottom: 15px;
}

.case_tags-collection {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 20px; 
    margin-bottom: 20px;
    width: 70%;
}

.case_tag {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1); 
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    transition: background-color 0.3s ease, color 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.3); 
    width: 80%;
}

.case_tag:hover {
    background-color: rgba(255, 255, 255, 0.3); 
    color: white;
    border-color: white; 
}

.case_tag .el-icon {
    margin-right: 8px; 
}

.case_tag-text {
    font-family: 'Poppins', sans-serif;
    font-size: 8px;
    font-weight: 200;
    color: white;
}
.btn_wrapper {
    background-color: rgba(255, 255, 255, 0.1); 
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    transition: background-color 0.3s ease, color 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.3); 
    font-weight: 600;
    text-transform: uppercase;
}

.btn_wrapper:hover {
    background-color: rgba(255, 255, 255, 0.3); 
    color: white;
    border-color: white; 
}

.right-section .big-case_right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.big-case_right-video {
    width: 100%;
    margin-bottom: 20px;
}

.custom-card-player {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.big-case_right-text {
    text-align: right;
    color: white;
}

.big-case_right-title {
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-bottom: 5px;
}

.big-case_right-description {
    font-size: 16px;
    font-weight: 400;
    color: white;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 32px;
    }

    .hero-subtitle {
        font-size: 24px;
    }

    .information {
        flex-direction: column;
    }

    .information-content,
    .information-image {
        max-width: 100%;
        text-align: center;
    }

    .information-text-title {
        font-size: 20px;
    }

    .information-text-content {
        font-size: 16px;
    }

    .new-section {
        flex-direction: column;
    }

    .left-section,
    .right-section {
        width: 100%;
        text-align: center;
    }
}
</style>
