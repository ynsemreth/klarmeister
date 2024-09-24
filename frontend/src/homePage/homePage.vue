<template>
<el-row justify="center" class="body">
    <!-- Hero Section -->
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
                <el-button class="hero-button-btn">Jetzt Angebot einholen <el-icon>
                        <Right />
                    </el-icon>
                </el-button>
                <img src="@/assets/garanti.png" alt="garanti">
            </div>
        </div>
    </el-col>

    <!-- Overlay Video Section -->
    <el-col :span="24" class="overlay-video-container" :class="{ 'normal-view': isInView }">
        <img src="@/assets/laptop.png" class="mockup-image" alt="Mockup Image" />

        <!-- Responsive ve Şekilli Video Kapsayıcısı -->
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

        <div class="sub-hero-content">
            <h1 class="sub-hero-title">Unsere Mission</h1>
            <h2 class="sub-hero-text">
                Unsere Mission ist es, Menschen und Unternehmen dabei zu unterstützen,
                ihre Online–Präsenz zu stärken und ihre Ziele zu erreichen, indem wir klare,
                innovative und nachhaltige Lösungen bieten.
            </h2>
        </div>
    </el-col>

    <el-col style="text-align: center; font-size: 20px; font-family: 'Poppins', Courier, monospace;
    color: rgb(54, 189, 54);">
        <h3>REFERENZ</h3>
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
                                <el-icon>
                                    <Document />
                                </el-icon>
                                <div class="case_tag-text">Design System</div>
                            </div>

                            <div class="case_tag">
                                <el-icon>
                                    <Refresh />
                                </el-icon>
                                <div class="case_tag-text">Figma to Webflow</div>
                            </div>
                            <div class="case_tag">
                                <el-icon>
                                    <MagicStick />
                                </el-icon>
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
                    <div class="big-case_right-content">
                        <video controls muted class="custom-card-player">
                            <source src="@/assets/sehlen_video.mp4" type="video/mp4" />
                            Tarayıcınız video etiketini desteklemiyor.
                        </video>

                        <div class="big-case_right-text">
                            <h3 class="big-case_right-title">Sehlen Tourismus</h3>
                            <div class="big-case_right-text-details">
                                <span class="big-case_right-description">Dies ist das Einführungsvideo der Website</span>
                            </div>
                        </div>
                    </div>
                    <el-card class="box-card">
                        <div class="image-section">
                            <img src="@/assets/bilet.png" alt="Bilet Image" class="bilet-image" />
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </el-col>

    <el-col :span="24">
        <div class="line"></div>
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

    <el-col :span="24">
        <div class="line"></div>
    </el-col>

    <el-col :span="24" class="our_services">
        <div class="services_title-group">
            <h1 class="services-title"> Transformieren Sie Ihre langweilige <br>
                Webseite zu einer unvergleichbaren <br>
                Online Präsenz mit Premium Charakter</h1>

            <div class="services-subtitle">
                <h3>Eine neue, moderne Webseite bekommen <br>
                    Sie mittlerweile günstig an jeder Ecke.<br>
                    Deshalb liegt unser Fokus zu 100% auf <br>
                    einzigartigem Service und Premiumqualität.</h3>
                <el-button class="btn-services">Jetzt Angebot einholen <el-icon>
                        <Right />
                    </el-icon>
                </el-button>
            </div>
        </div>
        <div class="services-card">
            <el-card class="card1">
                <h3 class="service-card-title">WebDesign</h3>
                <div class="text">Exzellente Designideen, für digitale Erlebnisse, die Ihre Kunden begeistern.</div>
                <div class="img-wrapper">
                    <img src="@/assets/figma.png" alt="webdesign">
                </div>
            </el-card>
            <el-card class="card2">
                <h3 class="service-card-title">Webentwicklung</h3>
                <div class="text">Zielgerichteter Fokus auf die Technik, die Ihre neue Webseite wirklich benötigt.</div>
                <ul class="card-li">
                    <li>
                        <el-icon>
                            <Key />
                        </el-icon>WebFlow
                    </li>
                    <li>
                        <el-icon>
                            <SwitchFilled />
                        </el-icon> WordPress
                    </li>
                    <li>
                        <el-icon>
                            <Paperclip />
                        </el-icon> Integrationen & API
                    </li>
                    <li>
                        <el-icon>
                            <Platform />
                        </el-icon> Business Automationen
                    </li>
                </ul>
            </el-card>
            <div class="card-list">
                <el-card>
                    <h3 class="service-card-title">SEO & SEA</h3>
                    <div class="text">Organische Suchmaschinenoptimierung <br>
                        oder bezahlte Google Ads verhelfen <br>
                        Ihnen zu mehr Sichtbarkeit und Anfragen.</div>
                </el-card>
                <el-card>
                    <h3 class="service-card-title">Branded Content Creation</h3>
                    <div class="text">Neue Texte, Fotos und Videos <br>
                        garantieren Ihnen sofort mehr Vertrauen <br>
                        und Zuspruch Ihrer Zielgruppe.</div>
                </el-card>
            </div>
        </div>
    </el-col>

    <el-col :span="24" class="web-section">
        <div class="web-content">
            <h3 class="web-subtitle">DIE VIERLESS EXPERIENCE</h3>
            <h1 class="web-title">
                In 4 einfachen Schritten <br> zu Ihrem neuen Online Auftritt
            </h1>
        </div>
        <div class="web-card">
            <el-card class="web-card-one">
                <div class="number">01</div>
                <div class="web-card-title">Sie haben Ihre Lage erkannt</div>
                <div class="web-card-subtitle">
                    <span>Der Sachverhalt ist klar:</span>
                    <span>Eine neue Webseite muss her!</span>
                    <span>Der erste Schritt ist abgehakt.</span>
                </div>
                <div class="web-card-icon">
                    <el-icon>
                        <CircleCheck />
                    </el-icon>
                </div>
            </el-card>

            <el-card class="web-card-two active-card">
                <div class="number">02</div>
                <div class="web-card-title">Füllen Sie unser Formular aus</div>
                <div class="web-card-subtitle">
                    <span>Damit wir wissen, wer</span>
                    <span>Sie sind und was Sie vorhaben,</span>
                    <span>haben wir einige Fragen vorbereitet.</span>
                </div>
                <div class="web-card-button">
                    <el-button type="primary" class="web-card-btn">
                        <span class="btn_label">Jetzt anfragen</span>
                    </el-button>
                </div>
            </el-card>

            <el-card class="web-card-one">
                <div class="number">03</div>
                <div class="web-card-title">Hören Sie sich unsere Ideen an</div>
                <div class="web-card-subtitle">
                    <span>In einem ersten Telefonat</span>
                    <span>besprechen wir erste Details</span>
                    <span>und den weiteren Ablauf.</span>
                </div>
            </el-card>

            <el-card class="web-card-one">
                <div class="number">04</div>
                <div class="web-card-title">Lehnen Sie sich entspannt zurück</div>
                <div class="web-card-subtitle">
                    <span>Profitieren Sie mit dem</span>
                    <span>Start der Zusammenarbeit von</span>
                    <span>der VIERLESS Experience.</span>
                </div>
            </el-card>
        </div>
    </el-col>

    <el-col :span="24" class="faq-section">
        <div class="faq-header">
            <h3 class="faq-subtitle">Finden Sie Antworten</h3>
            <h1 class="faq-title">Noch Fragen zu uns?</h1>
        </div>

        <el-collapse class="faq-collapse" accordion>
            <el-collapse-item name="1">
                <template #title>
                    Was kostet eine Webseite von VIERLESS?
                    <el-icon class="header-icon">
                        <info-filled />
                    </el-icon>
                </template>
                <div>
                    Die Kosten hängen von den individuellen Anforderungen ab. Kontaktieren Sie uns für ein maßgeschneidertes Angebot.
                </div>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template #title>
                    Wie läuft eine Zusammenarbeit mit VIERLESS ab?
                    <el-icon class="header-icon">
                        <info-filled />
                    </el-icon>
                </template>
                <div>
                    Wir führen Sie Schritt für Schritt durch den gesamten Prozess, angefangen bei einem ersten Beratungsgespräch bis zur finalen Veröffentlichung Ihrer Webseite.
                </div>
            </el-collapse-item>
            <el-collapse-item name="3">
                <template #title>
                    Wie unterscheidet sich VIERLESS zu anderen Dienstleistern?
                    <el-icon class="header-icon">
                        <info-filled />
                    </el-icon>
                </template>
                <div>
                    Unsere Lösungen sind maßgeschneidert, transparent und auf Qualität fokussiert. Keine versteckten Kosten, keine falschen Versprechen.
                </div>
            </el-collapse-item>
            <el-collapse-item name="4">
                <template #title>
                    Wieviel Zeit muss ich für eine Zusammenarbeit mit VIERLESS einplanen?
                    <el-icon class="header-icon">
                        <info-filled />
                    </el-icon>
                </template>
                <div>
                    Die Projektdauer hängt von der Komplexität ab. Die meisten Projekte sind innerhalb von wenigen Wochen abgeschlossen.
                </div>
            </el-collapse-item>
        </el-collapse>
    </el-col>

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
    </el-col>

    <el-col :span="24" class="banner-section">
        <div class="banner-link">
            <h3>Jetzt anfragen</h3>
            <div class="banner-text">
                Lust auf ein Projekt<br>mit VIERLESS?
            </div>
            <el-button class="banner-button">Termin vereinbaren</el-button>
        </div>
    </el-col>
</el-row>
</template>

<script lang="ts">
import {
    ref,
    onMounted,
    onUnmounted
} from 'vue';
import {
    Document,
    Refresh,
    MagicStick,
    CircleCheck
} from '@element-plus/icons-vue';

export default {
    components: {
        Document,
        Refresh,
        MagicStick,
        CircleCheck,
    },
    setup() {
        const isInView = ref(false);

        const handleScroll = () => {
            const videoSection = document.querySelector('.overlay-video-container');
            if (videoSection) {
                const sectionPosition = videoSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 5;

                isInView.value = sectionPosition < screenPosition;
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@600&display=swap');

.body {
    height: 100%;
    max-width: 100%;
    margin: 0;
    background: black;
    overflow-x: hidden;
    cursor: url('@/assets/cursor.png'), auto;
}

.hero-section {
    text-align: center;
    background: linear-gradient(to bottom, #053c05, #000000);
    position: relative;
}

.web-section {
    text-align: center;
    background: black;
    position: relative;
}

.overlay-video-container {
    text-align: center;
    position: relative;
}

.our_services {
    position: relative;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin: 10 auto;
    max-width: 1200px;
}

.banner-section {
    position: relative;
    text-align: center;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
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
    background-color: black;
    padding: 10px;
    border-radius: 5px;
}

.hero-button-btn {
    background-color: #0def95;
    border: none;
    color: black;
    padding: 10px 20px;
    display: flex;
    align-items: center;
}

.hero-button-btn:hover {
    background-color: #0def95;
    border: none;
    color: black;
    padding: 10px 20px;
    display: flex;
    align-items: center;
}

.hero-button img {
    max-width: 50px;
    min-width: 50px;
    max-height: 50px;
    min-height: 50px;
    background: transparent;
    display: block;
    margin-left: 10px;
}

.line {
    width: 70%;
    height: 2px;
    background-color: #333;
    margin: 2px auto;
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

.hero-h3 {
    flex: 1;
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
    margin-bottom: 0;
    padding-bottom: 0;
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
    padding-bottom: 0;
    margin-bottom: 0;
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
    padding: 120px;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.information-content {
    color: #fff;
    max-width: 60%;
    padding-left: 5%;
}

.information-image {
    max-width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.information-image .info-image {
    max-width: 80%;
    transition: transform 0.3s ease;
}

.information-image .info-image:hover {
    transform: scale(0.95);
}

.information-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    color: #fff;
    text-align: left;
    font-weight: 700;
}

.information-text-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: #fff;
    font-weight: 100;
    background: linear-gradient(to right, #135b13, #000000);
    padding: 10px 20px;
    border-radius: 10px;
}

.information-text-content {
    font-family: 'Poppins', Courier, monospace;
    font-size: 18px;
    color: #fff;
    font-weight: 300;
    line-height: 1.8;
}

.new-section {
    display: flex;
    justify-content: center;
    padding: 35px 20px;
    background: linear-gradient(to right, #121640, #000000);
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
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.big-case_right-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
}

.custom-card-player {
    width: 50%;
    height: auto;
    border-radius: 10px;
}

.big-case_right-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: left;
    color: white;
    line-height: 1.4;
}

.big-case_right-title {
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-bottom: 5px;
    line-height: 1.6;
}

.big-case_right-description {
    font-size: 15px;
    font-weight: 400;
    color: white;
    margin-bottom: 0;
    display: inline;
}

.box-card {
    display: flex;
    margin-top: 10%;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.bilet-image {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 8px;
}

.web-content {
    display: flex;
    flex-direction: column;
    align-self: center;
}

.web-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
}

.web-subtitle {
    font-family: 'Poppins', Courier, monospace;
    text-align: center;
    font-size: 13px;
    font-size: 300;
    color: green;
    margin-bottom: 10px;
}

.web-card {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 0 250px;
}

.web-card-icon {
    margin-top: 20px;

}

.web-card-one {
    display: flex;
    font-family: 'Montserrat', sans-serif;
    flex-direction: row;
    width: 100%;
    background: linear-gradient(to bottom, #212121, #111111);
    color: white;
    border-radius: 16px;
    box-shadow: 5px 4px 12px rgb(255, 254, 254);
    border: 5px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.web-card-two {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(to bottom, #23573f, #193427);
    color: green;
    border-radius: 16px;
    border: 5px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.web-card-title {
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
}

.web-card-subtitle {
    font-size: 0.75rem;
    color: #d1d1d1;
    line-height: 1.5;
    margin-top: 20px;
}

.web-card .number {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.web-card-title {
    padding-top: 3%;
    text-align: left;
}

.web-card-subtitle {
    padding-top: 3%;
    text-align: left;
}

.web-section {
    background-color: #000;
    padding: 50px 0;
}

.web-card-button {
    margin-top: 20px;
    text-align: center;
}

.web-card-button .web-card-btn {
    background-color: #0def95;
    border: transparent;
    color: black;
}

.faq-section {
    background-color: #000;
    padding: 50px 20px;
    color: white;
    text-align: center;
    border-radius: 20px;
}

.faq-header {
    margin-bottom: 20px;
}

.faq-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
}

.faq-subtitle {
    font-family: 'Poppins', Courier, monospace;
    font-size: 13px;
    color: green;
    margin-bottom: 10px;
}

.faq-collapse {
    max-width: 800px;
    margin: 0 auto;
    background-color: #000;
    border-radius: 10px;
    border: 1px solid #333;
    padding: 15px;
}

.faq-collapse .el-collapse-item {
    background-color: #222;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
}

.el-collapse-item__header {
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #222;
    color: #fff;
    transition: background-color 0.3s ease;
}

.el-collapse-item.is-active .el-collapse-item__header {
    background-color: #193427;
    color: #fff;
}

.el-collapse-item__content {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #d1d1d1;
    background-color: #000;
    padding: 15px;
    border: 2px solid black;
    margin: 0;
}

.services_title-group {
    padding-top: 3%;
    padding-bottom: 3%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding-left: 0;
    justify-content: center;
}

.services-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    color: #d1d1d1;
}

.services-subtitle {
    font-family: 'Poppins', Courier, monospace;
    font-size: 13px;
    color: #d1d1d1;
}

.btn-services {
    background-color: #0def95;
    border: none;
    color: black;
}

.btn-services:hover {
    background-color: #0def95;
    border: 1px solid #fff;
    color: black;
}

.services-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.card1,
.card2 {
    width: 320px;
    height: 320px;
    background: linear-gradient(to bottom, #212121, #111111);
    color: white;
    border-radius: 16px;
    box-shadow: 5px 4px 12px rgb(255, 254, 254);
    border: 5px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    text-align: left;
}

.card1 .service-card-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
}

.card2 .service-card-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
}

.services-card .text {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 100;
    color: #d4d4d4;
}

.card1 .img-wrapper {
    margin-top: 20px;
    position: relative;
    left: -0px;
}

.card1 .img-wrapper img {
    width: 150%;
    height: auto;
    border-radius: 10px;
}

.card2 .card-li {
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 100;
    color: #ffffff;
    padding-left: 0;
}

.card2 .card-li li {
    border-bottom: 1px solid #ffffff;
    padding-bottom: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    margin: 5px 0;
}

.card2 .card-li li el-icon {
    margin-right: 8px;
}

.card-list {
    display: flex;
    flex-direction: column;
    gap: 47px;
}

.card-list .el-card {
    width: 320px;
    height: 150px;
    background: linear-gradient(to bottom, #212121, #111111);
    border-radius: 16px;
    border: 5px solid rgba(255, 255, 255, 0.1);
    color: white;
    transition: transform 0.3s ease-in-out;
}

.card-list .service-card-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    margin-top: 0;
}

.card-list .text {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 100;
    color: #d4d4d4;
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
    border: 1px solid #000;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.banner-button:hover {
    background-color: #0def95;
    border: 1px solid #fff;
    color: black;
}

@media (max-width: 768px) {

    .custom-text-container {
        display: none;
    }

    .overlay-video-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .mockup-image {
        width: 100%;
        height: auto;
    }

    .custom-video-container {
        position: absolute;
        top: 23%;
        left: 25%;
        width: 45%;
        height: 45%;
        transform: perspective(800px) rotateX(-8deg) rotateY(8deg) skewY(-27deg);
        border-radius: 10px;
        overflow: hidden;
        z-index: 2;
        transition: transform 1s ease-in-out, top 1s ease-in-out, left 1s ease-in-out, width 1s ease-in-out, height 1s ease-in-out;
    }

    .custom-video-player {
        width: 100%;
        height: auto;
    }

    .information {
        flex-direction: column;
        padding: 50px;
    }

    .information-content {
        max-width: 100%;
        text-align: center;
        padding: 10px;
    }

    .information-image {
        max-width: 100%;
        margin-top: 20px;
    }

    .new-section {
        flex-direction: column;
        padding: 20px;
    }

    .left-section,
    .right-section {
        width: 100%;
        padding: 10px 0;
        text-align: center;
    }

    .case_tag {
        padding: 10px 0;
    }

    .big-case_featured-image,
    .custom-card-player,
    .bilet-image {
        width: 100%;
        height: auto;
    }

    .big-case_right-content {
        flex-direction: column;
    }

    .box-card {
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

}
</style>
