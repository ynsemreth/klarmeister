<template>
<div>
    <AppNavbar />
    <div class="container">

        <h3 class="daten-h3-title">IN GUTEN HÄNDEN</h3>
        <h1 class="daten-h1-subtitle">Datenschutz</h1>
        <div class="card">

            <h2 class="gradient-title">1. Datenschutz auf einen Blick</h2>
            <h3 class="gradient-title">Allgemeine Hinweise</h3>
            <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,<br />
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese<br />
                Website besuchen. Personenbezogene Daten sind alle Daten, mit<br />
                denen Sie persönlich identifiziert werden können. Ausführliche<br />
                Informationen zum Thema Datenschutz entnehmen Sie unserer<br />
                unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 class="gradient-title">Datenerfassung auf dieser Website</h3>
            <h4 class="gradient-title">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den<br />
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt<br />
                „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung<br />
                entnehmen.
            </p>

            <h4 class="gradient-title">Wie erfassen wir Ihre Daten?</h4>
            <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese<br />
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in<br />
                ein Kontaktformular eingeben. Andere Daten werden automatisch<br />
                oder nach Ihrer Einwilligung beim Besuch der Website durch unsere<br />
                IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.<br />
                Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).<br />
                Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese<br />
                Website betreten.
            </p>

            <h4 class="gradient-title">Wofür nutzen wir Ihre Daten?</h4>
            <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung<br />
                der Website zu gewährleisten. Andere Daten können zur Analyse<br />
                Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h4 class="gradient-title">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,<br />
                Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten<br />
                zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder<br />
                Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur<br />
                Datenverarbeitung erteilt haben, können Sie diese Einwilligung<br />
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,<br />
                unter bestimmten Umständen die Einschränkung der Verarbeitung<br />
                Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht<br />
                Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>

            <h2 class="gradient-title">2. Hosting</h2>
            <h4 class="gradient-title">Externes Hosting</h4>
            <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten,<br />
                die auf dieser Website erfasst werden, werden auf den Servern des<br />
                Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,<br />
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,<br />
                Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über<br />
                eine Website generiert werden, handeln.
            </p>

            <h2 class="gradient-title">3. Allgemeine Hinweise und Pflicht­informationen</h2>
            <h4 class="gradient-title">Datenschutz</h4>
            <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen<br />
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten<br />
                vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften<br />
                sowie dieser Datenschutzerklärung.
            </p>
        </div>
    </div>
    <MainFooter />
</div>
</template>

<script lang="ts">
import AppNavbar from '@/components/AppNavbar.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
    name: 'FooterLeistungen',
    components: {
        AppNavbar,
        MainFooter,
    },
}
</script>

<style scoped>
.container {
    max-width: 1200px;
    height: auto;
    margin: 20px auto;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.daten-h3-title{
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: rgb(54, 189, 54);
    text-align: center;
}

.daten-h1-subtitle{
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-bottom: 60px;
}

.card {
    background: linear-gradient(to bottom, #212121, #111111);
    border-radius: 16px;
    border: 5px solid rgba(255, 255, 255, 0.1);
    color: white;
    padding: 20px;
    height: auto;
    font-family: 'Poppins', sans-serif;
}

.card p {
    margin: 10px 0;
    line-height: 1.6;
    color: white;
    font-weight: 400;
}

.gradient-title {
    background-color: white;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 600;
    margin-bottom: 15px;
    border-bottom: 2px solid #4caf50;
}


@media (max-width: 768px) {
    .container {
        padding: 0 10px;
    }

    .card {
        padding: 15px;
        margin-bottom: 30px;
    }
}
</style>
