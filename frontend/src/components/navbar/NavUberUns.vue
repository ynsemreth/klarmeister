<template>
<div>
    <AppNavbar />
    <div class="container">
        <h3 class="uber-h3-title">DAS SIND WIR</h3>
        <h1 class="uber-h1-subtitle">Impressum</h1>
        <h1 class="uber-subtitle">Angaben gemäß § 5 TMG</h1>
        <div class="info-grid">
            <div class="info-left">
                <h2>Abdullah Aydin (CEO)</h2>
                <p>KlarMeister.de (Einzelunternehmer)<br />Friedrichstrasse 29<br />95706 Schirnding</p>

                <div class="info-section">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Wir kommen auch in Ihre Stadt!</p>
                </div>

                <h2>Kontakt</h2>
                <p>E-Mail: <a href="mailto:info@klarmeister.de">info@klarmeister.de</a></p>

                <h2>EU-Streitschlichtung</h2>
                <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank">https://ec.europa.eu/consumers/odr/</a>.<br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>

                <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
                <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </div>

            <div class="info-right">
                <h2>KlarMeister Facts</h2>
                <ul class="facts-list">
                    <li class="fact-item">
                        <span>Team Größe</span>
                        <span>10</span>
                    </li>
                    <li class="fact-item">
                        <span>Kunden</span>
                        <span>150+</span>
                    </li>
                    <li class="fact-item">
                        <span>Einsatzorte</span>
                        <span>
                            <img src='@/assets/germany-flag-icon.png' alt="Germany" class="flag-icon" />
                            <img src="@/assets/turkey-flag-icon.png" alt="Turkey" class="flag-icon" />
                        </span>
                    </li>
                    <li class="fact-item">
                        <span>Startpreis</span>
                        <span>Auf Anfrage</span>
                    </li>
                    <li class="fact-item">
                        <span>Ø Projekt</span>
                        <span>1 Woche</span>
                    </li>
                    <li class="fact-item">
                        <span>Angebot</span>
                        <span>In 24 Stunden</span>
                    </li>
                </ul>
            </div>
        </div>

        <router-link to="/anfrage">
            <el-button class="banner-button">Termin vereinbaren</el-button>
        </router-link>
    </div>
    <MainFooter />
</div>
</template>

<script lang="ts">
import AppNavbar from '@/components/AppNavbar.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'FirmDetails',
    components: {
        AppNavbar,
        MainFooter,
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    color: white;
}

.uber-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: white;
}

.uber-h3-title {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: rgb(54, 189, 54);
    text-align: center;
}

.uber-h1-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-bottom: 60px;
}

.info-grid {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.info-left,
.info-right {
    flex: 1;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    margin: 10px;
    margin-bottom: 20px;
}

.info-left h2 {
    font-size: x-large;
    margin-bottom: 10px;
    margin-top: 10px;
}

.info-left p {
    margin-left: 20px;
    font-size: smaller;
}

.info-section {
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.info-right h2{
    margin-bottom: 10px;
}

.info-section i {
    font-size: 20px;
    margin-right: 10px;
    color: lightgreen;
}

.facts-list {
    list-style-type: none;
    padding: 0;
}

.fact-item {
    background-color: #333;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}

.flag-icon {
    width: 32px;
    height: 32px;
    margin-left: 5px;
}

.fact-item span {
    font-family: 'Poppins', sans-serif;
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
    .info-grid {
        flex-direction: column;
    }
}
</style>
