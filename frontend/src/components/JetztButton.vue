<template>
<el-col :span="24" style="background-color: black;">
    <el-card class="request-form">
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
            <el-input v-model="webSite" placeholder="www.klarmeister.de">
                <template #prepend>Http://</template>
            </el-input>
        </div>
        <div class="web">
            <h3 class="web-text">Unternehmen</h3>
            <el-input v-model="unternehmen" placeholder="Abdullah Aydın" clearable />
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

        <router-link to="/klarmeister">
            <el-button class="btn_wrapper">
                <span class="btn_label"> Weiter </span>
            </el-button>
        </router-link>
    </el-card>
</el-col>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue';

export default defineComponent({
    name: 'JetztButton',
    setup() {
        const webSite = ref('');
        const unternehmen = ref('');

        return {
            webSite,
            unternehmen
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
    background-color: black;
    color: white;
    padding: 40px;
    border-color: black;
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
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
</style>
