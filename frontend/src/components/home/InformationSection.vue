<template>
<el-col :span="24">
    <div class="line"></div>
</el-col>

<el-col :span="24" class="information">
    <div class="information-content" :class="{ 'mobile': isMobile }">
        <h1 class="information-title">Genug von Leeren Versprechungen!</h1>
        <h2 class="information-text-title">
            <span class="highlight">Haben Sie auch die Nase voll von leeren Versprechungen?</span>
        </h2>
        <p class="information-text-content">
            Sie kennen das: Konzepte, die nichts bewegen, und Agenturen,
            die Ihnen das Blaue vom Himmel versprechen – und das für viel Geld.
            Reicht’s Ihnen auch? Schluss mit halben Sachen und falschen Versprechen!
            Bei uns bekommen Sie keine Standard-Konzepte, sondern Strategien, die Ergebnisse
            liefern. Ob neue Kunden oder Mitarbeiter – wir machen es schnell, präzise
            und ohne unnötigen Schnickschnack. Keine Ausreden, nur Klarheit und messbare Erfolge.
        </p>

        <div class="button-wrapper">
            <router-link to="/anfrage">
                <el-button class="btn-services">
                    Jetzt durchstarten
                    <el-icon>
                        <Right />
                    </el-icon>
                </el-button>
            </router-link>
        </div>
    </div>

    <div class="information-image" v-if="!isMobile">
        <img v-lazy="klarheitsgarantieImage" alt="Frustrated Man" class="info-image" />
    </div>
</el-col>

<el-col :span="24" v-if="isMobile">
    <div class="information-image">
        <img v-lazy="klarheitsgarantieImage" alt="Frustrated Man" class="info-image" />
    </div>
</el-col>

<el-col :span="24">
    <div class="line"></div>
</el-col>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    onMounted,
    onUnmounted
} from 'vue';
import {
    Right
} from '@element-plus/icons-vue';

// Görseli import edin
import klarheitsgarantieImage from '@/assets/Klarheitsgarantie.png';

export default defineComponent({
    name: 'InformationSection',
    components: {
        Right,
    },
    setup() {
        const isMobile = ref(false);

        const checkMobile = () => {
            isMobile.value = window.innerWidth <= 768;
        };

        onMounted(() => {
            checkMobile();
            window.addEventListener('resize', checkMobile);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', checkMobile);
        });

        return {
            isMobile,
            klarheitsgarantieImage,
        };
    },
});
</script>

<style>
.information {
    color: #fff;
    padding: 100px;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.information-content {
    color: #fff;
    max-width: 60%;
    padding-left: 5%;
}

.information-content.mobile {
    max-width: 100%;
    padding-left: 0;
}

.information-image {
    max-width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.information-image .info-image {
    max-width: 80%;
    transition: transform 0.3s ease;
}

.information-image .info-image:hover {
    transform: scale(0.95);
}

.information-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    color: #fff;
    text-align: left;
    font-weight: 700;
    padding-bottom: 5%;
}

.information-text-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: #fff;
    font-weight: 100;
    background: linear-gradient(to right, #135b13, #52c885);
    padding: 10px 20px;
    border-radius: 10px;
}

.information-text-content {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 600;
    width: 90%;
    color: white;
    margin-bottom: 15px;
    padding-top: 5%;
}

.line {
    width: 70%;
    height: 2px;
    background-color: #333;
    margin: 2px auto;
}

.button-wrapper {
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
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

@media (max-width: 768px) {
    .information {
        padding: 60px 20px;
        flex-direction: column;
        align-items: center;
    }

    .information-content {
        max-width: 100%;
        padding: 0;
        margin-top: 10px;
        text-align: center;
    }

    .information-title {
        font-size: 24px;
        text-align: center;
    }

    .information-text-title {
        font-size: 18px;
    }

    .information-text-content {
        font-size: 14px;
        width: 100%;
        text-align: center;
    }

    .information-image {
        display: flex;
        max-width: 80%;
        margin-top: 20px;
    }

    .button-wrapper {
        justify-content: center;
    }
}
</style>
