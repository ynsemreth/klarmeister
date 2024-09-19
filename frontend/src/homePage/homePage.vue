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
        <a href="#" class="custom-cta-button">
            <span class="custom-cta-button__text">Jetzt Kostenloses Erstgespräch vereinbaren</span>
        </a>
    </el-col>

    <!-- Overlay Video Section -->
    <el-col :span="24" class="overlay-video-container" :class="{ 'normal-view': isInView }">
        <img src="@/assets/sahne.png" class="mockup-image" alt="Mockup Image" />

        <!-- Responsive ve Şekilli Video Kapsayıcısı -->
        <div class="custom-video-container">
            <div class="custom-video">
                <video controls muted class="custom-video-player">
                    <source src="@/assets/wrapper.mp4" type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                </video>
            </div>
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

    <!-- Additional Section - Inspired by the Screenshot -->
    <el-col :span="24" class="new-section">
        <el-card shadow="hover" class="card-container">
            <el-row :gutter="10">
                <!-- Tek Kartta Birleştirilmiş Case Study -->
                <el-col :span="24" class="case-study-section">
                    <el-card shadow="hover" class="big-case_card">
                        <!-- Sol Logo ve Görsel -->
                        <div class="big-case_left">
                            <div class="big-case_logo-wrapper">
                                <img src="@/assets/sehlen_logo.png" loading="lazy" alt="Sehlen Studios" class="big-case_logo" />
                            </div>
                            <img src="@/assets/sehlen_site.png" loading="lazy" width="555" height="294" alt="Sehlen Studio Site" class="big-case_featured-image" />
                        </div>

                        <!-- Sağ Kısım (Video ve Metinler) -->
                        <div class="big-case_right">
                            <!-- Video Alanı -->
                            <div class="big-case_right-video">
                                <video controls muted class="custom-card-player">
                                    <source src="@/assets/sehlen_video.mp4" type="video/mp4" />
                                    Tarayıcınız video etiketini desteklemiyor.
                                </video>
                            </div>

                            <!-- Sağ Taraf Metin ve Detaylar -->
                            <div class="big-case_right-text">
                                <h3 class="big-case_right-title">Nicolas Karges</h3>
                                <div class="big-case_right-text-details">
                                    <span class="big-case_right-description is-first">Geschäftsführer</span>
                                    <span class="big-case_right-description">Sehlen Studios GmbH</span>
                                </div>
                            </div>
                        </div>

                        <!-- Başlık ve Etiketler -->
                        <div class="big-case_meta">
                            <h3 class="big-case_title">
                                Entwicklung einer neuen Agentur Webseite inkl. Automationen & Karriere Bereich
                            </h3>
                            <div class="case_tags-collection">
                                <div class="case_tags is-big-case">
                                    <div class="case_tag">
                                        <div class="case_tag-text">Automations</div>
                                    </div>
                                    <div class="case_tag">
                                        <div class="case_tag-text">Design System</div>
                                    </div>
                                    <div class="case_tag">
                                        <div class="case_tag-text">Figma to WordPress</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Buton -->
                            <div class="big-case_actions">
                                <div class="big-case_actions-open">
                                    <a href="http://217.138.160.215:8450/home" class="btn w-inline-block">
                                        <el-button type="primary" class="btn_wrapper">
                                            <span class="btn_label">Casestudy ansehen</span>
                                        </el-button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </el-col>
</el-row>
</template>

<script lang="ts">
import {
    ref,
    onMounted,
    onUnmounted
} from 'vue';

export default {
    setup() {
        const isInView = ref(false);

        const handleScroll = () => {
            const videoSection = document.querySelector('.overlay-video-container');
            if (videoSection) {
                const sectionPosition = videoSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.5;

                if (sectionPosition < screenPosition) {
                    isInView.value = false; // Video düz hale gelir, resim kaybolur
                } else {
                    isInView.value = false; // Video eski perspektife döner, resim geri gelir
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
    background: linear-gradient(to bottom, #0b3d0b, #000000);
    overflow-x: hidden;
}

.hero-section,
.sub-hero-section,
.overlay-video-container {
    background: transparent;
    padding: 100px 20px;
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
    width: 80%;
    height: auto;
    display: block;
    position: relative;
    z-index: 1;
    transition: opacity 1s ease-in-out;
}

.custom-video-container {
    position: absolute;
    top: 20%;
    /* Slightly adjusted vertical position */
    left: 20%;
    /* Slightly adjusted horizontal position */
    width: 35%;
    /* Adjusted width for a tighter fit */
    height: 43.5%;
    /* Adjusted height to fit screen */
    transform: perspective(500px) rotateX(3deg) rotateY(8deg) skewY(2deg);
    /* Fine-tuned perspective */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: transform 1s ease-in-out;
}

.overlay-video-container.normal-view .custom-video-container {
    transform: none;
    /* Video düz konuma gelir */
}

.overlay-video-container.normal-view .mockup-image {
    opacity: 0;
    /* Resim yavaşça kaybolur */
}

.custom-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    /* Yuvarlatılmış köşeler */
}

.custom-video-player {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Video içeriğinin kapsayıcıya göre ayarlanması */
    border-radius: 15px;
    /* Videonun da kenarları yuvarlanır */
}

.custom-cta-button {
    display: inline-block;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(162, 250, 207, 1);
    border: 2px solid rgba(255, 255, 255, 1);
    border-radius: 100px;
    padding: 9px 100px;
    font-family: 'Arial', sans-serif;
    font-weight: 800;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    position: relative;
    overflow: hidden;
}

.custom-cta-button__text {
    position: relative;
    z-index: 2;
}

.custom-cta-button:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.8);
}

/* Flash Animation */
.custom-cta-button::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 100px;
    transition: opacity 0.3s ease, top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease;
    opacity: 0;
    z-index: 1;
}

.custom-cta-button:hover::before {
    opacity: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: flash-animation 3s infinite;
}

@keyframes flash-animation {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

.information {
    background-color: #e8e9ea;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.information-content {
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
    text-align: center;
    font-weight: 700;
}

.information-text-title {
    font-family: 'Helvetica', sans-serif;
    font-size: 24px;
    font-weight: 400;
    background: rgba(182, 245, 175, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
}

.information-text-content {
    font-family: 'Helvetica', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    color: #000;
    margin-bottom: 20px;
}

.content-container {
    padding: 20px;
}

.button-box {
    padding-top: 4%;
    text-align: center;
    padding-bottom: 4%;
}

.new-section {
    display: flex;
    justify-content: center;
    padding: 40px 20px;
}

.case-study-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    gap: 20px;
}

.big-case_left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}

.big-case_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}

.big-case_logo-wrapper {
    margin-bottom: 15px;
}

.big-case_logo {
    width: 100px;
    height: auto;
}

.big-case_featured-image {
    width: 100%;
    height: auto;
    border-radius: 15px;
}

.big-case_meta {
    text-align: center;
}

.big-case_title {
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
}

.case_tags-collection {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.case_tag {
    display: flex;
    align-items: center;
    gap: 5px;
}

.case_tag-text {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
}

.big-case_actions {
    margin-top: 20px;
}

.btn_wrapper {
    display: inline-block;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background-color: #007bff;
    border-radius: 30px;
    text-decoration: none;
}

.card-container {
    display: flex;
    justify-content: center;
    background: linear-gradient(to right, #330867, #D13256);
    border-radius: 20px;
    padding: 30px;
}

.custom-card-player {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
}

.big-case_right-text {
    text-align: center;
    margin-top: 20px;
}

.big-case_right-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
}

.big-case_right-description {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #666;
    margin-bottom: 5px;
}

.big-case_right-video {
    width: 100%;
    margin-top: 20px;
    border-radius: 15px;
    overflow: hidden;
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

    .custom-cta-button {
        padding: 9px 50px;
        font-size: 16px;
    }

    .information-text-title {
        font-size: 20px;
    }

    .information-text-content {
        font-size: 16px;
    }

    /* Kartların tam genişlikte ve eşit boyutta olması için */
    .feature-card {
        width: 100%;
        /* Kart genişliği mobilde tam ekran olur */
        margin-bottom: 20px;
        /* Kartlar arasında boşluk bırak */
        display: flex;
        justify-content: center;
        align-items: stretch;
        /* Kartları aynı boyutta yapar */
    }

    /* Her kartın içeriğinin aynı yükseklikte olmasını sağla */
    .feature-box {
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        height: 100%;
        /* Kartın yüksekliği diğerleriyle eşitlenir */
    }

    .feature-box h3 {
        font-size: 18px;
        margin: 10px 0;
    }

    .feature-box p {
        font-size: 14px;
        margin: 10px 0;
    }
}
</style>
