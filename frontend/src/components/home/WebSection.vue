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
            <img class="card__background" src="@/assets/analysis-meeting.png" alt="Klarheit schaffen" />
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
            <img class="card__background" src="@/assets/web-design.png" alt="Webseite mit Power" />
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
            <img class="card__background" src="@/assets/video-production.png" alt="Verkaufspsychologisches Video" />
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
            <img class="card__background" src="@/assets/linkedin-networking.png" alt="LinkedIn-Kundenakquise" />
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

<script>
export default {
    name: 'WebSection'
};
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
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    justify-items: center;
    width: 40rem;
    margin: 0 auto;
}

@media (max-width: 768px) {

    .web-title {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 700;
        padding: 20px;
        color: black;
    }

    .card-wrapper {
        grid-template-columns: 1fr;
        width: 80%;
        gap: 1.5rem;
    }

    .card {
        max-width: 100%;
        height: auto;
        margin-bottom: 1.5rem;
    }

    .card__background {
        object-fit: cover;
        width: 100%;
        height: auto;
        margin-top: 0;
    }

    .card__content {
        opacity: 1;
        position: relative;
        background: none;
    }

    .card__description {
        opacity: 0;
        color: white;
    }

    .card__title {
        font-size: 1.2rem;
        color: black;
        position: static;
        margin-bottom: 0.5rem;
    }

    .card:hover .card__background {
        transform: none;
    }

    .card:hover .card__title {
        opacity: 0;
    }

    .card:hover .card__content {
        opacity: 1;
    }

    .card:hover .card__description {
        opacity: 1;
    }

    .hero-content {
        padding: 20px;
    }

    .hero-title {
        font-size: 28px;
    }

    .hero-subtitle {
        font-size: 14px;
        margin: 15px 0;
    }

    .media-container {
        width: 100%;
        margin-top: 20px;
    }

    .media-video {
        width: 100%;
        height: auto;
    }
}

@keyframes flash-card {

    0%,
    100% {
        background-color: white;
        box-shadow: none;
    }

    75% {
        background-color: white;
        box-shadow: 0 0 15px rgba(48, 12, 12, 0.5), 0 0 30px rgba(62, 69, 66, 0.3);
    }
}

.card {
    width: 100%;
    max-width: 20rem;
    background: white;
    height: 25rem;
    overflow: hidden;
    border-radius: 0.625rem;
    box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
    transition: transform 500ms ease-in-out;
    animation: flash-card 1.5s infinite;
    position: relative;
}

.card__background {
    object-fit: cover;
    width: 100%;
    height: calc(100% - 3rem);
    margin-top: 3rem;
    transition: transform 500ms ease-in-out;
}

.card__title {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: black;
    position: absolute;
    top: 1rem;
    left: 1rem;
    transition: opacity 500ms ease-in-out;
}

.card__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding: 1rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%);
    opacity: 0;
    transition: opacity 500ms ease-out;
    position: absolute;
    bottom: 0;
    width: 100%;
}

.card__description {
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    opacity: 0;
    transition: opacity 500ms ease-out;
}

@media (any-hover: hover) {
    .card:hover .card__background {
        transform: scale(1.2);
    }

    .card:hover .card__content {
        opacity: 1;
    }

    .card:hover .card__title {
        opacity: 0;
    }

    .card:hover .card__description {
        opacity: 1;
    }
}
</style>
