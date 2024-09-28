<template>
<AppNavbar />
<el-card v-if="currentStep === 1" class="request-form">
    <ul class="form-benefits">
        <li>
            <el-icon>
                <Check />
            </el-icon>
            Antwort in 24 Std.
        </li>
        <li>
            <el-icon>
                <Check />
            </el-icon>
            100% unverbindlich
        </li>
        <li>
            <el-icon>
                <Check />
            </el-icon>
            Erste Preisauskunft
        </li>
    </ul>
    <div class="ask-form">
        <h3 class="text">Um welches Projekt geht es?</h3>
    </div>
    <div class="web">
        <h3 class="web-text">WebSite (Optional)</h3>
        <el-input v-model="form.webSite" placeholder="www.klarmeister.de">
            <template #prepend>http://</template>
        </el-input>
    </div>
    <div class="web">
        <h3 class="web-text">Unternehmen</h3>
        <el-input v-model="form.unternehmen" placeholder="Abdullah Aydın" clearable />
    </div>

    <div class="line"></div>

    <router-link to="/">
        <el-button class="btn_wrapper">
            <span class="btn_label">
                <el-icon>
                    <Back />
                </el-icon> Zurück
            </span>
        </el-button>
    </router-link>

    <el-button class="btn_wrapper" @click="nextStep">
        <span class="btn_label"> Weiter </span>
    </el-button>
</el-card>

<el-card v-if="currentStep === 2" class="request-form">
    <ul class="form-benefits">
        <li>
            <el-icon>
                <Check />
            </el-icon>
            Antwort in 24 Std.
        </li>
        <li>
            <el-icon>
                <Check />
            </el-icon>
            100% unverbindlich
        </li>
        <li>
            <el-icon>
                <Check />
            </el-icon>
            Erste Preisauskunft
        </li>
    </ul>
    <div class="ask-form">
        <h3 class="text">Wann soll die Webseite fertig werden?</h3>
    </div>

    <div class="radio-group">
        <el-radio label="amBestenGestern">Am besten schon gestern</el-radio>
        <el-radio label="keinZeitdruck">Kein Zeitdruck</el-radio>
    </div>

    <div class="line"></div>

    <el-button class="btn_wrapper" @click="returnStep">
        <span class="btn_label">
            <el-icon>
                <Back />
            </el-icon> Zurück
        </span>
    </el-button>

    <el-button class="btn_wrapper" @click="nextStep">
        <span class="btn_label"> Weiter </span>
    </el-button>
</el-card>

<!-- Üçüncü Form -->
<el-card v-if="currentStep === 3" class="request-form">
    <ul class="form-benefits">
        <li>
            <el-icon>
                <Check />
            </el-icon>
            Antwort in 24 Std.
        </li>
        <li>
            <el-icon>
                <Check />
            </el-icon>
            100% unverbindlich
        </li>
        <li>
            <el-icon>
                <Check />
            </el-icon>
            Erste Preisauskunft
        </li>
    </ul>
    <div class="ask-form">
        <h3 class="text">Wie können wir Sie erreichen?</h3>
    </div>

    <div class="form-3-row">
        <div class="web">
            <h3 class="web-text">Vorname</h3>
            <el-input class="input-vorname" v-model="form.vorname" placeholder="Vorname" clearable />
        </div>
        <div class="web">
            <h3 class="web-text">Nachname</h3>
            <el-input class="input-nachname" v-model="form.nachname" placeholder="Nachname" clearable />
        </div>
    </div>

    <div class="form-3-row">
        <div class="web">
            <h3 class="web-text">E-Mail</h3>
            <el-input class="input-email" v-model="form.email" placeholder="E-Mail" clearable />
        </div>
        <div class="web">
            <h3 class="web-text">Telefon</h3>
            <el-input class="input-telefon" v-model="form.phone" placeholder="+49" clearable />
        </div>
    </div>

    <el-checkbox v-model="form.datenschutz" class="form-3-check">
        Ich bin mit den Hinweisen zum Datenschutz <br>
        einverstanden & stimme der Verarbeitung <br>
        meiner Daten zur Beantwortung und Verarbeitung <br>
        meiner Anfrage zu.
    </el-checkbox>

    <div class="line"></div>

    <el-button class="btn_wrapper" @click="returnStep">
        <span class="btn_label">
            <el-icon>
                <Back />
            </el-icon> Zurück
        </span>
    </el-button>

    <el-button class="btn_wrapper" @click="submitForms">
        <span class="btn_label"> Absenden </span>
    </el-button>
</el-card>

<MainFooter />
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue';
import AppNavbar from '@/components/AppNavbar.vue';
import MainFooter from '@/components/MainFooter.vue';
import emailjs from 'emailjs-com';
import {
    Check,
    Back
} from '@element-plus/icons-vue';
import {
    ElMessage
} from 'element-plus';

export default defineComponent({
    name: 'JetztButton',
    components: {
        AppNavbar,
        MainFooter,
        Check,
        Back
    },
    data() {
        return {
            form: {
                webSite: '',
                unternehmen: '',
                vorname: '',
                nachname: '',
                email: '',
                phone: '',
                datenschutz: false,
            }
        };
    },
    methods: {
        sendEmail() {
            const serviceID = "service_n6aemke";
            const templateID = "template_y8uha2n";
            const userID = "dDqIsYTiSFr5XH3uA";

            emailjs.send(serviceID, templateID, this.form, userID)
                .then(() => {
                    ElMessage({
                        message: 'Ihr Angebot wurde übermittelt.',
                        type: 'success',
                    });
                    this.resetForm();
                    this.$router.push('/');
                })
                .catch((error) => {
                    ElMessage.error('Beim Senden der E-Mail ist ein Fehler aufgetreten: ' + error.text);
                });

        },
        resetForm() {
            this.form.webSite = '';
            this.form.unternehmen = '';
            this.form.vorname = '';
            this.form.nachname = '';
            this.form.email = '';
            this.form.phone = '';
            this.form.datenschutz = false;
        },
        submitForms() {
            this.sendEmail();
        }
    },
    setup() {
        const currentStep = ref(1);

        const nextStep = () => {
            if (currentStep.value < 3) {
                currentStep.value++;
            }
        };

        const returnStep = () => {
            if (currentStep.value > 1) {
                currentStep.value--;
            }
        };

        return {
            nextStep,
            returnStep,
            currentStep
        };
    },
});
</script>

<style scoped>
.request-form {
    position: relative;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #212121, #111111);
    color: white;
    border-radius: 16px;
    border: 5px solid rgba(255, 255, 255, 0.1);
    padding: 40px;
    max-width: 600px;
    margin: 40px auto;
}

.form-benefits {
    list-style: none;
    background: linear-gradient(to right, #152a20, #193a2c);
    padding: 1px;
    border-radius: 5px;
    margin: 20px 0 10px 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
}

.form-benefits li {
    display: flex;
    align-items: center;
    font-size: 10px;
    margin: 5px 10px;
    color: white;
}

.el-icon {
    margin-right: 5px;
    color: lightgreen;
}

.text,
.web-text {
    font-size: 12px;
    margin-bottom: 10px;
    text-align: left;
    color: white;
}

.web {
    width: 100%;
    max-width: 500px;
    margin-top: 10px;
}

.el-input {
    width: 100%;
    max-width: 500px;
}

.el-input .el-input__inner {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #333333;
    border-radius: 4px;
    border: 1px solid #dddddd;
    padding: 10px;
}

.line {
    width: 100%;
    margin-top: 20px;
    height: 2px;
    background-color: #333;
    margin: 20px auto;
}

.btn_wrapper {
    background-color: #23573f;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 45%;
    color: white;
}

.btn_label {
    display: flex;
    align-items: center;
    justify-content: center;
}

.radio-group {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.radio-group .el-radio {
    margin-bottom: 10px;
}

.el-radio__input {
    margin-right: 40px;
}

.form-3-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    gap: 20px;
}

.input-vorname,
.input-nachname,
.input-email,
.input-telefon {
    border-radius: 8px;
}

.form-3-check {
    padding-top: 10%;
    padding-bottom: 10%;
}
</style>
