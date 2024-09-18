<template>
    <div>
        <div class="hero-section">
            <div class="hero-content">
                <h1 class="hero-title">Agentur für Websites</h1>
                <h2 class="hero-subtitle">die Erfolge erzielen</h2>
                <svg class="underline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 10" preserveAspectRatio="none">
                    <path d="M0 5 Q50 10 100 5 T200 5" stroke="black" stroke-width="2" fill="transparent" />
                </svg>
            </div>
        </div>

        <div class="sub-hero-section">
            <div class="sub-hero-content">
                <h1 class="sub-hero-title">Unsere Mission</h1>
                <h2 class="sub-hero-text">Unsere Mission ist es, Menschen und Unternehmen dabei zu unterstützen,
                    ihre Online–Präsenz zu stärken und ihre Ziele zu erreichen, indem wir klare,
                    innovative und nachhaltige Lösungen bieten. Wir streben danach, die Online–Reputation unserer Kunden zu verbessern,
                    ihr Wachstum zu fördern und ihre Visionen zu realisieren.</h2>
                <a href="#" class="custom-cta-button">
                    <span class="custom-cta-button__text">Jetzt Kostenloses Erstgespräch vereinbaren</span>
                </a>
            </div>
        </div>

        <div class="information">
            <div class="information-content">
                <h1 class="information-title">Schnauze voll von Luftpumpen</h1>
                <h2 class="information-text-title">
                    <span class="highlight">Haben Sie auch die Nase voll von leeren Versprechungen?</span>
                </h2>
                <p class="information-text-content">
                    Keine Lust mehr auf Agenturen, die behaupten, Ihre Website innerhalb von 8 Stunden
                    oder gefühlt einem halben Jahr zu erstellen für horrende Summen von 20.000 Euro oder
                    mehr?
                </p>
                <p class="information-text-content">
                    Sie investieren kostbare Zeit, ohne zu wissen, ob es wirklich funktioniert.
                </p>
                <p class="information-text-content">
                    Bei uns ist das anders. Wir bieten eine transparente und zielführende Lösung, die Ihre
                    Erwartungen übertrifft. Schließen Sie sich uns an und erleben Sie, wie wir mit Klarheit,
                    Kreativität und Kompetenz eine Webseite gestalten, die nicht nur beeindruckt, sondern
                    auch nachhaltigen Erfolg garantiert.
                </p>
            </div>
            <div class="information-image">
                <img src="@/assets/Klarheitsgarantie.png" alt="Frustrated Man" class="info-image">
            </div>
        </div>

        <div class="button-box">
            <div class="btn-kosten">
                <a href="#" class="custom-cta-button">
                    <span class="custom-cta-button__text">Kostenloses Erstgespräch vereinbaren</span>
                </a>
            </div>
        </div>

        <div class="content-container">
            <div class="reference-carousel">
                <el-carousel :interval="4000" type="card" height="200px" arrow="always">
                    <el-carousel-item v-for="ref in references" :key="ref.id">
                        <div class="reference-item">
                            <img :src="getReferenceImage(ref.image)" :alt="ref.title" class="reference-image">
                            <div class="reference-text">{{ ref.title }}</div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            references: [{
                    id: 1,
                    image: 'bmw.jpeg',
                    title: 'BMW'
                },
                {
                    id: 2,
                    image: 'face.png',
                    title: 'FACEBOOK'
                },
                {
                    id: 3,
                    image: 'allianz.jpeg',
                    title: 'ALLIANZ'
                },
            ],
        };
    },
    methods: {
        getReferenceImage(image) {
            return require(`@/assets/${image}`);
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@600&display=swap');

.hero-section {
    padding: 100px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero-content {
    padding: 30px 50px;
    border-radius: 16px;
    display: inline-block;
    position: relative;
    z-index: 1;
    max-width: 600px;
}

.hero-title {
    position: relative;
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    font-weight: 700;
    margin: 0;
    color: #1a1a1a;
    padding: 10px 20px;
    border-radius: 16px;
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
    position: relative;
    display: inline-block;
}

.underline {
    width: 50%;
    height: 10px;
    margin-top: 10px;
    margin-left: 0;
    align-self: flex-start;
}

.content-container {
    padding: 20px;
}

.sub-hero-section {
    padding: 100px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
}

.sub-hero-content {
    max-width: 1000px;
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
    0%, 100% {
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
    display: block;
}

.information-image .info-image:hover {
    transform: scale(0.95); /* Shrinks the image slightly */
}

.information .information-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    text-align: center;
    font-weight: 700;
    margin: 0 0 20px;
}

.information-text-title {
    font-family: 'Helvetica', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 30px;
    color: #000;
    background: rgba(182, 245, 175, 0.5); /* Light green background */
    padding: 10px 20px; /* Add some padding */
    border-radius: 10px; /* Rounded corners */
}

.information-text-content {
    font-family: 'Helvetica', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    color: #000;
    margin-bottom: 20px;
}

.btn-kosten {
    padding-top: 3%;
    padding-bottom: 3%;
    width: auto;
    height: 50px;
    text-align: center;
}

.reference-carousel {
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
}

.reference-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.reference-image {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    object-fit: cover;
    filter: grayscale(100%) brightness(90%) contrast(110%);
    background-color: transparent;
    box-shadow: none;
}

.reference-image:hover {
    filter: grayscale(0%);
}

.reference-text {
    margin-top: 10px;
    font-family: "Quicksand", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #333;
}
</style>
