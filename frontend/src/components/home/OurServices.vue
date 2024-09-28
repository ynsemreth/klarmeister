<template>
<el-col :span="24" class="our_services">
    <div class="services_title-group">
        <h1 class="services-title">
            Transformieren Sie Ihre langweilige <br />
            Webseite zu einer unvergleichbaren <br />
            Online Präsenz mit Premium Charakter
        </h1>

        <div class="services-subtitle">
            <h3>
                Eine neue, moderne Webseite bekommen <br />
                Sie mittlerweile günstig an jeder Ecke.<br />
                Deshalb liegt unser Fokus zu 100% auf <br />
                einzigartigem Service und Premiumqualität.
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
            <div class="text">Exzellente Designideen, für digitale Erlebnisse, die Ihre Kunden begeistern.</div>
            <div class="img-wrapper">
                <img src="@/assets/figma.png" alt="webdesign" />
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
                <div class="text">Organische Suchmaschinenoptimierung <br />
                    oder bezahlte Google Ads verhelfen <br />
                    Ihnen zu mehr Sichtbarkeit und Anfragen.
                </div>
            </el-card>
            <el-card>
                <h3 class="service-card-title">Branded Content Creation</h3>
                <div class="text">Neue Texte, Fotos und Videos <br />
                    garantieren Ihnen sofort mehr Vertrauen <br />
                    und Zuspruch Ihrer Zielgruppe.
                </div>
            </el-card>
        </div>
    </div>
</el-col>
</template>

  
  
<script>
export default {
    name: 'OurServices',
};
</script>
  
  
<style scoped>
.our_services {
    position: relative;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin: 10 auto;
    max-width: 1200px;
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
    border: transparent;
    animation: flash 1.5s infinite;
    color: black;
    margin-top: 5%;
}

.btn-services:hover {
    background-color: #0def95;
    border: transparent;
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

@media (max-width: 768px) {
    .services_title-group {
        flex-direction: column;
        align-items: center;
    }

    .services-title {
        font-size: 24px;
    }

    .services-subtitle {
        font-size: 12px;
    }

    .btn-services {
        width: 100%;
    }
}
</style>
