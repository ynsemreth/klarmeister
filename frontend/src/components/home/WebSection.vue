<template>
<el-col :span="24" class="web-section">
    <div class="web-content">
        <h3 class="web-subtitle">DIE KLARMEISTER EXPERIENCE</h3>
        <h1 class="web-title">
            In 4 Schritten zur Neukunden - und <br /> Mitarbeitergewinnung auf Knopfdruck:
        </h1>
    </div>
    <div class="web-card">
        <el-card class="web-card-one" plain @mouseenter="openDialogOne">
            <div class="number">01</div>
            <div class="web-card-title">Klarheit schaffen:</div>
            <div class="web-card-subtitle">
                <span>Zunächst analysieren wir die Situation Ihres Unternehmens.</span>
                <span>Wir identifizieren Ihre Ziele, Ihre Zielgruppe und welche</span>
                <span>Bereiche Ihrer Strategie verstärkt werden müssen.</span>
                <span>Egal ob es um die Gewinnung neuer Kunden oder Mitarbeiter</span>
                <span>geht – wir schaffen Klarheit über Ihre Bedürfnisse und richten die Strategie danach aus.</span>

            </div>
        </el-card>

        <el-card class="web-card-two active-card" plain @mouseenter="openDialogTwo">
            <div class="number">02</div>
            <div class="web-card-title">Webseite mit Power transformieren:</div>
            <div class="web-card-subtitle">
                <span>Wir nehmen Ihre bestehende Webseite und wandeln sie in ein</span>
                <span>leistungsstarkes Tool zur Kundengewinnung um.</span>
                <span>Mit modernem Design und zielgerichteter Funktionalität</span>
                <span>schaffen wir eine Plattform, die Ihre Zielgruppe effektiv anspricht und überzeugt.</span>

            </div>
        </el-card>

        <el-card class="web-card-one" plain @mouseenter="openDialogThree">
            <div class="number">03</div>
            <div class="web-card-title">Verkaufspsych  -ologisches Video erstellen:</div>
            <div class="web-card-subtitle">
                <span>Wir entwickeln ein verkaufspsychologisches Video, das Ihre Botschaft klar und überzeugend vermittelt.</span>
                <span>Dieses Video dient nicht nur als Werbemittel,</span>
                <span>sondern hilft auch dabei, potenziellen Kunden oder neuen Mitarbeitern ein tiefes Verständnis Ihrer Firma</span>
                <span>und deren Werte zu geben.</span>

            </div>
        </el-card>

        <el-card class="web-card-one" plain @mouseenter="openDialogFour">
            <div class="number">04</div>
            <div class="web-card-title">LindedIn-Kundenakquise:</div>
            <div class="web-card-subtitle">
                <span>Zum Abschluss bieten wir Ihnen eine 1:1-Betreuung bei der Akquise neuer Kunden über LinkedIn.</span>
                <span>Dabei setzen wir all unser Wissen und die Erfahrungen,</span>
                <span>die wir in Seminaren und durch über 250.000 € an Investitionen gesammelt haben,</span>
                <span>direkt für Sie um.</span>
                <span>Wir verkaufen Ihnen nicht einfach nur eine Theorie –</span>
                <span>wir liefern messbare Ergebnisse, und das schnell.</span>

            </div>
        </el-card>
    </div>
</el-col>

<el-row>
    <card-one-dialog v-model="dialogCardOneVisible" @close="handleOneClose" />
    <card-two-dialog v-model="dialogCardTwoVisible" @close="handleTwoClose" />
    <card-three-dialog v-model="dialogCardThreeVisible" @close="handleThreeClose" />
    <card-four-dialog v-model="dialogCardFourVisible" @close="handleFourClose" />
</el-row>
</template>

<script>
import CardOneDialog from "@/components/cards/CardOneDialog.vue";
import CardTwoDialog from "@/components/cards/CardTwoDialog.vue";
import CardThreeDialog from "@/components/cards/CardThreeDialog.vue";
import CardFourDialog from "@/components/cards/CardFourDialog.vue";
export default {
    name: 'WebSection',
    components: {
        CardOneDialog,
        CardTwoDialog,
        CardThreeDialog,
        CardFourDialog,
    },
    data() {
        return {
            dialogCardOneVisible: false,
            dialogCardTwoVisible: false,
            dialogCardThreeVisible: false,
            dialogCardFourVisible: false,
            hasOpenedCardOne: false,
            hasOpenedCardTwo: false,
            hasOpenedCardThree: false,
            hasOpenedCardFour: false,
        };
    },
    methods: {
        openDialogOne() {
            if (!this.hasOpenedCardOne) {
                this.dialogCardOneVisible = true;
                this.hasOpenedCardOne = true;
            }
        },
        openDialogTwo() {
            if (!this.hasOpenedCardTwo) {
                this.dialogCardTwoVisible = true;
                this.hasOpenedCardTwo = true;
            }
        },
        openDialogThree() {
            if (!this.hasOpenedCardThree) {
                this.dialogCardThreeVisible = true;
                this.hasOpenedCardThree = true;
            }
        },
        openDialogFour() {
            if (!this.hasOpenedCardFour) {
                this.dialogCardFourVisible = true;
                this.hasOpenedCardFour = true;
            }
        },
        handleOneClose() {
            this.dialogCardOneVisible = false,
                this.hasOpenedCardOne = false
        },
        handleTwoClose() {
            this.dialogCardTwoVisible = false;
            this.hasOpenedCardTwo = false;
        },
        handleThreeClose() {
            this.dialogCardThreeVisible = false;
            this.hasOpenedCardThree = false;
        },
        handleFourClose() {
            this.dialogCardFourVisible = false;
            this.hasOpenedCardFour = false;
        },
    },
};
</script>

<style scoped>
.web-section {
    text-align: center;
    background: black;
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
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
}

.web-subtitle {
    font-family: 'Poppins', Courier, monospace;
    font-size: 13px;
    color: rgb(54, 189, 54);
    text-align: center;
    margin-bottom: 10px;
}

.web-card {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 100px;
}

.web-card-one,
.web-card-two {
    flex: 1;
    font-family: 'Montserrat', sans-serif;
    max-width: calc(50% - 10px);
    background: linear-gradient(to bottom, #212121, #111111);
    color: white;
    border-radius: 16px;
    border: 5px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    transition: all 0.3s ease-in-out;
    padding: 20px;

}

.web-card-two {
    background: linear-gradient(to bottom, #23573f, #193427);
    color: green;
}

.web-card-title {
    font-size: 1.4rem; 
    font-weight: bold;
    color: white;
    margin-top: 20px;
    text-align: center; 
    max-width: 250px;
    margin-left: 10px;
    margin-right: 10px;
    line-height: 1.4;
}


.web-card-subtitle {
    font-size: 0.75rem;
    color: #d1d1d1;
    line-height: 1.5;
    margin-top: 20px;
    text-align: left;
}

.web-card .number {
    text-align: left;
}

@media (max-width: 1024px) {
    .web-card {
        flex-direction: column;
        align-items: center;
        padding: 0;
    }

    .web-card-one,
    .web-card-two {
        width: 80%;
        max-width: 100%;
        margin-bottom: 20px;
    }

    .web-content {
        max-width: 80%;
        margin-left: 10%;
    }
}
</style>
