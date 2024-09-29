<template>
<el-col :span="24" class="faq-section">
    <div class="faq-header">
        <h3 class="faq-subtitle">FINDEN SIE ANTWORTEN</h3>
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
                Zeit muss ich für eine Zusammenarbeit mit VIERLESS einplanen?
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
</template>

<script lang="ts">
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
    font-family: 'Poppins', Courier, monospace;
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

    .el-collapse-item__content {
        font-size: 10px;
    }
}
</style>
