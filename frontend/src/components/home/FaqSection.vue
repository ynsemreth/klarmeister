<template>
<el-col :span="24" class="faq-section">
    <div class="faq-header">
        <h3 class="faq-subtitle">FINDEN SIE ANTWORTEN</h3>
        <h1 class="faq-title">Noch Fragen zu uns?</h1>
    </div>

    <el-collapse class="faq-collapse" accordion>
        <el-collapse-item name="1">
            <template #title>
                <div class="collapse-title">
                    Was kostet eine Website?
                </div>
                <el-icon class="header-icon">
                    <info-filled />
                </el-icon>
            </template>
            <p class="faq-content">
                Die Kosten für eine Webseite hängen stark von den individuellen Wünschen ab. <br />
                Dank unseres eigens entwickelten Systems, das auf jahrelanger Erfahrung und <br />
                Weiterbildungen basiert, bieten wir kostenoptimierte Lösungen. Ob Webseite, <br />
                LinkedIn-Optimierung oder verkaufspsychologische Videos – wir liefern <br />
                Effizienz ohne überhöhte Preise.
            </p>
        </el-collapse-item>

        <el-collapse-item name="2">
            <template #title>
                <div class="collapse-title">
                    Was ist der Unterschied zwischen einer Landeseite und einer Webseite?
                </div>
                <el-icon class="header-icon">
                    <info-filled />
                </el-icon>
            </template>
            <p class="faq-content">
                Eine Landeseite (Landing Page) ist eine spezifische Seite, die oft für <br />
                Marketingkampagnen genutzt wird, um gezielt eine Handlung zu fördern, <br />
                z. B. ein Produktkauf oder eine Anmeldung. Eine Webseite hingegen ist <br />
                eine umfassendere Online-Präsenz mit mehreren Seiten, die verschiedene <br />
                Informationen und Funktionen bietet.
            </p>
        </el-collapse-item>

        <el-collapse-item name="3">
            <template #title>
                <div class="collapse-title">
                    Kann ich meine Domain behalten?
                </div>
                <el-icon class="header-icon">
                    <info-filled />
                </el-icon>
            </template>
            <p class="faq-content">
                Ja, Sie können Ihre bestehende Domain problemlos behalten. Wir integrieren <br />
                sie in die neue Webseite, ohne dass Sie auf Ihre gewohnte Adresse verzichten <br />
                müssen. Unser System sorgt dafür, dass der Übergang reibungslos verläuft <br />
                und Ihre Domain weiterhin optimal genutzt wird.
            </p>
        </el-collapse-item>

        <el-collapse-item name="4">
            <template #title>
                <div class="collapse-title-4">
                    Wie kann ich sicherstellen, dass ich meine E-Mail-Adresse,
                    alle bestehenden Daten und mein Hosting behalte, wenn ich
                    die Agentur wechsle oder meine Webseite neu erstellen lasse?
                </div>
                <el-icon class="header-icon">
                    <info-filled />
                </el-icon>
            </template>
            <p class="faq-content">
                Sie behalten nicht nur Ihre E-Mail-Adresse und alle bestehenden Daten, <br />
                sondern entscheiden auch, wo Ihre Webseite gehostet wird. Möchten Sie <br />
                bei Ihrem aktuellen Hosting-Anbieter bleiben, übertragen wir die Seite dorthin. <br />
                Alternativ richten wir auch gerne einen neuen Hosting-Anbieter für Sie ein – ganz nach Ihren Wünschen.
            </p>
        </el-collapse-item>
        <el-collapse-item name="5">
            <template #title>
                <div class="collapse-title">
                    Wie gehen Sie mit mobilen und responsiven Designs um?
                </div>
                <el-icon class="header-icon">
                    <info-filled />
                </el-icon>
            </template>
            <p class="faq-content">
                Für uns ist responsives Design eine der wichtigsten Prioritäten, da heute fast <br />
                alle Nutzer überwiegend auf dem Telefon surfen. Wir stellen sicher, dass Ihre <br />
                Webseite auf mobilen Geräten genauso optimal funktioniert wie auf dem Desktop – <br />
                für höchste Benutzerfreundlichkeit und beste Performance überall.
            </p>
        </el-collapse-item>
    </el-collapse>
</el-col>
</template>

  
  
<script>
export default {
    name: 'FaqSection',
};
</script>
  
  
<style scoped>
.faq-section {
    background-color: black;
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
    font-family: 'Poppins', monospace;
    font-size: 13px;
    color: rgb(54, 189, 54);
    margin-bottom: 10px;
}

.faq-collapse {
    max-width: 800px;
    margin: 0 auto;
    background-color: #000000;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.el-collapse-item.is-active .el-collapse-item__header {
    background-color: #193427;
    color: #fff;
}

.collapse-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 600;

    color: black;
}

.collapse-title-4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 7px;
    font-weight: 600;
    color: black;
}

.faq-content {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #d1d1d1;
    background-color: #000;
    padding: 15px;
    border: 2px solid black;
    margin: 0;
}

.header-icon {
    margin-left: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .faq-title {
        font-size: 20px;
    }

    .faq-subtitle {
        font-size: 12px;
    }

    .el-collapse-item__header {
        font-size: 14px;
    }

    .faq-collapse .el-collapse-item {
        padding: 8px;
    }

    .faq-collapse {
        padding: 10px;
    }

    .faq-content {
        font-size: 12px;
    }

    .collapse-title {
        font-size: 14px;
    }
}
</style>
