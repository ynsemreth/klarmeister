<template>
<el-col :span="24" class="web-section">
    <div class="web-content">
        <h1 class="web-title">
            In 4 Schritten zur Neukunden - und <br /> Mitarbeitergewinnung auf Knopfdruck:
        </h1>
    </div>
    <div class="card-wrapper">
        <!-- Kart 01 -->
        <article class="card">
            <img class="card__background" v-lazy="analysisMeetingImage" alt="Klarheit schaffen" />
            <h2 class="card__title">Klarheit schaffen</h2>
            <div class="card__content | flow">
                <div class="card__content--container | flow">
                    <p class="card__description">
                        Zunächst analysieren wir die Situation Ihres Unternehmens. Wir identifizieren Ihre Ziele, Ihre Zielgruppe und welche Bereiche Ihrer Strategie verstärkt werden müssen. Egal ob es um die Gewinnung neuer Kunden oder Mitarbeiter geht – wir schaffen Klarheit über Ihre Bedürfnisse und richten die Strategie danach aus.
                    </p>
                </div>
            </div>
        </article>

        <!-- Kart 02 -->
        <article class="card">
            <img class="card__background" v-lazy="webDesignImage" alt="Webseite mit Power" />
            <h2 class="card__title">Webseite mit Power transformieren</h2>
            <div class="card__content | flow">
                <div class="card__content--container | flow">
                    <p class="card__description">
                        Wir nehmen Ihre bestehende Webseite und wandeln sie in ein leistungsstarkes Tool zur Kundengewinnung um. Mit modernem Design und zielgerichteter Funktionalität schaffen wir eine Plattform, die Ihre Zielgruppe effektiv anspricht und überzeugt.
                    </p>
                </div>
            </div>
        </article>

        <!-- Kart 03 -->
        <article class="card">
            <img class="card__background" v-lazy="videoProductionImage" alt="Verkaufspsychologisches Video" />
            <h2 class="card__title">Verkaufspsychologisches Video erstellen</h2>
            <div class="card__content | flow">
                <div class="card__content--container | flow">
                    <p class="card__description">
                        Wir entwickeln ein verkaufspsychologisches Video, das Ihre Botschaft klar und überzeugend vermittelt. Dieses Video dient nicht nur als Werbemittel, sondern hilft auch dabei, potenziellen Kunden oder neuen Mitarbeitern ein tiefes Verständnis Ihrer Firma und deren Werte zu geben.
                    </p>
                </div>
            </div>
        </article>

        <!-- Kart 04 -->
        <article class="card">
            <img class="card__background" v-lazy="linkedinNetworkingImage" alt="LinkedIn-Kundenakquise" />
            <h2 class="card__title">LinkedIn-Kundenakquise</h2>
            <div class="card__content | flow">
                <div class="card__content--container | flow">
                    <p class="card__description">
                        Zum Abschluss bieten wir Ihnen eine 1:1-Betreuung bei der Akquise neuer Kunden über LinkedIn. Dabei setzen wir all unser Wissen und die Erfahrungen, die wir in Seminaren und durch über 250.000 € an Investitionen gesammelt haben, direkt für Sie um. Wir liefern messbare Ergebnisse, und das schnell.
                    </p>
                </div>
            </div>
        </article>
    </div>
</el-col>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';

// Görselleri import edin
import analysisMeetingImage from '@/assets/analysis-meeting.png';
import webDesignImage from '@/assets/web-design.png';
import videoProductionImage from '@/assets/video-production.png';
import linkedinNetworkingImage from '@/assets/linkedin-networking.png';

export default defineComponent({
    name: 'WebSection',
    setup() {
        return {
            analysisMeetingImage,
            webDesignImage,
            videoProductionImage,
            linkedinNetworkingImage,
        };
    },
});
</script>

<style>
.web-section {
    text-align: center;
    position: relative;
    padding: 50px 0;
}

.web-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.web-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: black;
    margin-bottom: 40px;
}

.card-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    justify-items: center;
    margin: 0 auto;
    align-items: center;
    margin-left: 270px;
}

.card {
    background: white;
    border-radius: 0.625rem;
    box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
    overflow: hidden;
    position: relative;
    transition: transform 500ms ease-in-out;
    width: 100%;
    max-width: 20rem;
    height: 25rem;
}

.card__background {
    object-fit: cover;
    width: 100%;
    height: calc(100% - 3rem);
    margin-top: 3rem;
}

.card__title {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: black;
    position: absolute;
    top: 1rem;
    left: 1rem;
}

.card__content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 500ms ease-out;
}

.card__description {
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
}

@media (any-hover: hover) {
    .card:hover .card__content {
        opacity: 1;
    }
}

@media (max-width: 768px) {
    .web-title {
        font-size: 20px;
        padding: 20px;
    }

    .card-wrapper {
        grid-template-columns: 1fr;
        width: 80%;
    }

    .card {
        height: auto;
        margin-bottom: 1.5rem;
    }
}

@media (max-width: 480px) {

    .web-title,
    .card__title {
        font-size: 18px;
    }

    .card__description {
        font-size: 14px;
    }
}
</style>
