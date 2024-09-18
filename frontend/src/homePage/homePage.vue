<template>
<el-row justify="center">

    <el-col :span="24" class="hero-section">
        <!-- Video Background -->
        <div class="video-container">
            <video autoplay muted loop playsinline class="hero-video">
                <source src="@/assets/videoplayback.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        <!-- Hero Content -->
        <div class="hero-content">
            <h1 class="hero-title">Agentur für Websites</h1>
            <h2 class="hero-subtitle">die Erfolge erzielen</h2>
            <svg class="underline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0 5 Q50 10 100 5 T200 5" stroke="black" stroke-width="2" fill="transparent" />
            </svg>
        </div>
    </el-col>

    <!-- Sub-Hero Section -->
    <el-col :span="24" class="sub-hero-section">
        <div class="sub-hero-content">
            <h1 class="sub-hero-title">Unsere Mission</h1>
            <h2 class="sub-hero-text">
                Unsere Mission ist es, Menschen und Unternehmen dabei zu unterstützen,
                ihre Online–Präsenz zu stärken und ihre Ziele zu erreichen, indem wir klare,
                innovative und nachhaltige Lösungen bieten.
            </h2>
            <!-- Custom styled button -->
            <a href="#" class="custom-cta-button">
                <span class="custom-cta-button__text">Jetzt Kostenloses Erstgespräch vereinbaren</span>
            </a>
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
                Keine Lust mehr auf Agenturen, die behaupten, Ihre Website innerhalb von 8 Stunden
                oder gefühlt einem halben Jahr zu erstellen für horrende Summen von 20.000 Euro oder mehr?
            </p>
            <p class="information-text-content">
                Bei uns ist das anders. Wir bieten eine transparente und zielführende Lösung, die Ihre Erwartungen übertrifft.
            </p>
        </div>
        <div class="information-image">
            <img src="@/assets/Klarheitsgarantie.png" alt="Frustrated Man" class="info-image" />
        </div>
    </el-col>

    <!-- Button Section -->
    <el-col :span="24" class="button-box">
        <a href="#" class="custom-cta-button">
            <span class="custom-cta-button__text">Kostenloses Erstgespräch vereinbaren</span>
        </a>
    </el-col>

    <el-col :span="24" class="features">
        <h1 class="information-title">Unser Angebot</h1>
        <el-row justify="center" class="features-container">
            <el-col :span="12" md="12" sm="24" class="feature-card">
                <div class="feature-box">
                    <el-icon>
                        <Message />
                    </el-icon>
                    <h3>Kreative Lösungen für modernes Design</h3>
                    <p>
                        Maßgeschneiderte Design-Beratung: Innovative Konzepte, erstklassige Ergebnisse für Ihre
                        individuellen Projekte.
                    </p>
                </div>
            </el-col>
            <el-col :span="12" md="12" sm="24" class="feature-card">
                <div class="feature-box">
                    <el-icon>
                        <Document />
                    </el-icon>
                    <h3>Zuverlässig Kunden gewinnen leicht gemacht</h3>
                    <p>
                        Erfolgreiche Strategien für nachhaltigen Kundengewinn: Vertrauen aufbauen, Zielgruppen
                        erreichen, langfristige Beziehungen stärken.
                    </p>
                </div>
            </el-col>
            <el-col :span="12" md="12" sm="24" class="feature-card">
                <div class="feature-box">
                    <el-icon>
                        <Edit />
                    </el-icon>
                    <h3>Besser gefunden werden online</h3>
                    <p>
                        Wir erstellen Inhalte, die auffallen: Optimierte Texte, höhere Sichtbarkeit, gezielte
                        Ansprache Ihrer Zielgruppen.
                    </p>
                </div>
            </el-col>
            <el-col :span="12" md="12" sm="24" class="feature-card">
                <div class="feature-box">
                    <el-icon>
                        <Camera />
                    </el-icon>
                    <h3>Abmahnfallen sicher vermeiden</h3>
                    <p>
                        Rechtssicher handeln: Tipps und Strategien, um teure Abmahnfallen zuverlässig zu
                        vermeiden.
                    </p>
                </div>
            </el-col>
        </el-row>
    </el-col>

</el-row>
</template>

<script lang="ts">
import {
    Message,
    Document,
    Edit,
    Camera
} from '@element-plus/icons-vue';

export default {
    components: {
        Message,
        Document,
        Edit,
        Camera,
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@600&display=swap');

.hero-section {
    position: relative;
    padding: 100px 20px;
    text-align: center;
    overflow: hidden;
}

.video-container {
    position: absolute;
    top: 10px;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;

}

.hero-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(300%);
}

.hero-content {
    position: relative;
    padding: 30px 50px;
    border-radius: 16px;
    display: inline-block;
    max-width: 600px;
    z-index: 1;
}

.hero-title {
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    font-weight: 700;
    margin: 0;
    color: #1a1a1a;
    padding: 10px 20px;
    z-index: 1;
}

.hero-title::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(182, 245, 175, 0.9), rgba(182, 245, 175, 0));
    border-radius: 16px;
    z-index: -1;
}

.hero-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin: 10px 0 0;
    color: #ffffff;
}

.underline {
    width: 70%;
    height: 30px;
    margin-left: 0;
}

.sub-hero-section {
    padding: 100px 20px;
    text-align: center;
    color: black;
}

.sub-hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    font-weight: 700;
    margin: 0 0 20px;
}

.sub-hero-text {
    font-family: 'Helvetica', sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 30px;
    color: #000;
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

/* Animation effect */
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

.features {
    background-image: url('@/assets/Startseite.png');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(150%);
}

.features-container {
    padding: 40px 150px;
    display: flex;
    flex-wrap: wrap;
}

.feature-card {
    padding: 10px;
}

.feature-box {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    flex-direction: column;
}

.feature-box h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 15px 0;
}

.feature-box p {
    font-family: 'Helvetica', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.6;
}

.feature-box el-icon {
    font-size: 30px;
    color: #409eff;
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
