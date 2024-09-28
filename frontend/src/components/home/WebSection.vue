<template>
<el-col :span="24" class="web-section">
    <div class="web-content">
        <h3 class="web-subtitle">DIE VIERLESS EXPERIENCE</h3>
        <h1 class="web-title">
            In 4 einfachen Schritten <br /> zu Ihrem neuen Online Auftritt
        </h1>
    </div>
    <div class="web-card">
        <el-card class="web-card-one" plain @mouseenter="openDialogOne">
            <div class="number">01</div>
            <div class="web-card-title">Sie haben Ihre Lage erkannt</div>
            <div class="web-card-subtitle">
                <span>Der Sachverhalt ist klar:</span>
                <span>Eine neue Webseite muss her!</span>
                <span>Der erste Schritt ist abgehakt.</span>
            </div>
        </el-card>

        <el-card class="web-card-two active-card" plain @mouseenter="openDialogTwo">
            <div class="number">02</div>
            <div class="web-card-title">Füllen Sie unser Formular aus</div>
            <div class="web-card-subtitle">
                <span>Damit wir wissen, wer</span>
                <span>Sie sind und was Sie vorhaben,</span>
                <span>haben wir einige Fragen vorbereitet.</span>
            </div>
        </el-card>

        <el-card class="web-card-one" plain @mouseenter="openDialogThree">
            <div class="number">03</div>
            <div class="web-card-title">Hören Sie sich unsere Ideen an</div>
            <div class="web-card-subtitle">
                <span>In einem ersten Telefonat</span>
                <span>besprechen wir erste Details</span>
                <span>und den weiteren Ablauf.</span>
            </div>
        </el-card>

        <el-card class="web-card-one" plain @mouseenter="openDialogFour">
            <div class="number">04</div>
            <div class="web-card-title">Lehnen Sie sich entspannt zurück</div>
            <div class="web-card-subtitle">
                <span>Profitieren Sie mit dem</span>
                <span>Start der Zusammenarbeit von</span>
                <span>der VIERLESS Experience.</span>
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
}

.web-content {
    display: flex;
    flex-direction: column;
    align-self: center;
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
    justify-content: space-between;
    gap: 20px;
    padding: 0 250px;
    margin-top: 5%;
}

.web-card-one {
    padding-top: 5%;
    display: flex;
    font-family: 'Montserrat', sans-serif;
    flex-direction: row;
    width: 100%;
    background: linear-gradient(to bottom, #212121, #111111);
    color: white;
    border-radius: 16px;
    border: 5px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.web-card-two {
    padding-top: 5%;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(to bottom, #23573f, #193427);
    color: green;
    border-radius: 16px;
    border: 5px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.web-card-title {
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
}

.web-card-subtitle {
    font-size: 0.75rem;
    color: #d1d1d1;
    line-height: 1.5;
    margin-top: 20px;
}

.web-card .number {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.web-card-title {
    padding-top: 3%;
    text-align: left;
}

.web-card-subtitle {
    padding-top: 3%;
    text-align: left;
}

.web-section {
    background-color: #000;
    padding: 50px 0;
}
</style>
