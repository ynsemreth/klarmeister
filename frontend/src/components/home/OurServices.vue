<template>
<el-col :span="24" class="our_services">
    <div class="services_title-group">
        <div class="left-section">
            <h1 class="services-title">
                Nachfolgend zeigen wir Ihnen, wie wir Ihre Webseite 
                mit Handlungsbedarf in eine leistungsstarke Power-Webseite 
                verwandeln – und das in nur 3 Zoom-Calls und mit einem 
                Zeitaufwand von durchschnittlich 4 Stunden.
            </h1>
        </div>

        <div class="right-section">
            <h3 class="services-subtitle">
                Mit unserem erfahrenen Expertenteam und einem 
                klaren System verwandeln wir Ihre Webseite in eine 
                powervolle Kundenmaschine – schnell, präzise und mit
                minimalem Zeitaufwand. Das ist Klarheit mit Meisterschaft.
            </h3>
            <router-link to="/anfrage">
                <el-button class="btn-services">Jetzt Angebot einholen
                    <el-icon>
                        <Right />
                    </el-icon>
                </el-button>
            </router-link>
        </div>
    </div>

    <div class="services-card">
        <el-card class="card1">
            <h3 class="service-card-title">WebDesign</h3>
            <div class="text">
                Schritt 1: Klarheit schaffen. In unserem gemeinsamen Kick-Off besprechen wir Ihre Ziele, Zielgruppe und den genauen Plan für die Transformation Ihrer Webseite.
                <br />Ihr Zeitaufwand: ca. 2 Std
            </div>
            <div class="img-wrapper">
                <img src="@/assets/figma.png" alt="webdesign" />
            </div>
        </el-card>

        <el-card class="card2">
            <h3 class="service-card-title">Feedback-Schleifen</h3>
            <div class="text">
                Wir erstellen die Inhalte, das Konzept und das Design Ihrer neuen Webseite.
                In durchschnittlich 2 Zoom-Calls präsentieren wir Ihnen die Texte und Designs.
                Alle Änderungswünsche, die Sie haben, notieren wir und setzen sie um.
                Danach zeigen wir Ihnen die aktualisierten Ergebnisse.
            </div>
            <ul class="card-li">
                <li>
                    <el-icon>
                        <Key />
                    </el-icon> In durchschnittlich 2 Zoom-Calls
                </li>
                <li>
                    <el-icon>
                        <SwitchFilled />
                    </el-icon> Änderungswünsche werden umgesetzt
                </li>
                <li>
                    <el-icon>
                        <Paperclip />
                    </el-icon> Zufriedenheit garantiert
                </li>
                <li>
                    <el-icon>
                        <Platform />
                    </el-icon> Ihr Zeitaufwand: ca. 1 Std. pro Zoom Call
                </li>
            </ul>
        </el-card>

        <div class="card-list">
            <el-card>
                <h3 class="service-card-title">Konzept, Text & Design</h3>
                <div class="text">
                    Unser Team erstellt die Inhalte, das Konzept und das Design Ihrer neuen Webseite.
                    Sie geben uns nur Ihr Feedback, und wir setzen alles um – von den Texten bis hin zum modernen Layout.
                    <br />Ihr Zeitaufwand: 0 Min
                </div>
            </el-card>
            <el-card>
                <h3 class="service-card-title">Technische Umsetzung & Optimierung</h3>
                <div class="text">
                    Wir programmieren Ihre Webseite professionell und optimieren sie für beste PageSpeed-Ergebnisse (GOOGLE TÜV).
                    <br />Ihr Zeitaufwand: 0 Min
                </div>
            </el-card>
        </div>
    </div>
</el-col>
</template>

<style>
.our_services {
    position: relative;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.services_title-group {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 95%;
    margin-bottom: 40px;
}

.left-section {
    width: 60%;
}

.right-section {
    width: 40%;
}

.services-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    color: #fff;
    line-height: 1.5;
}

.services-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #d1d1d1;
    margin-bottom: 20px;
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

.btn-services {
    background-color: #0def95;
    border: none;
    color: black;
    padding: 10px 20px;
    align-items: center;
    animation: flash 1.5s infinite;
    transition: background-color 0.3s;
}

.btn-services:hover {
    animation: none;
    background-color: #0def95;
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
    height: 340px;
    background: linear-gradient(to bottom, #212121, #111111);
    color: white;
    border-radius: 16px;
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
    font-size: 10px;
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
    gap: 40px;
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

@media (max-width: 768px) {
    .services_title-group {
        flex-direction: column;
        max-width: 100%;
        margin-left: 20%;
    }

    .services-title {
        font-size: 20px;
        text-align: left;
        max-width: 300px;
        margin: 0;
    }

    .services-subtitle {
        text-align: left;
        font-size: 10px;
        margin: 0;
    }

    .btn-services {
        width: 80%;
        font-size: 8px;
    }
}
</style>
