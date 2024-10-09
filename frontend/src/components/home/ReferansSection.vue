<template>
<el-col style="text-align: center; font-size: 13px; font-family: 'Poppins', Courier, monospace; color: rgb(54, 189, 54); margin-bottom: 3%;">
    <h3>REFERENZ</h3>
</el-col>

<el-col :span="24" class="new-section">
    <el-row :gutter="10">
        <el-col :span="14" class="left-section">
            <div class="big-case_left">
                <div class="big-case_image-wrapper">
                    <picture>
                        <source srcset="@/assets/sehlenref.webp" type="image/webp" class="big-case_featured-image">
                        <img src="@/assets/sehlenref.png" loading="lazy" alt="Sehlen Studio Site" class="big-case_featured-image" />
                    </picture>
                </div>

                <div class="big-case_meta">
                    <h3 class="big-case_title">
                        WEBSITE MIT PRÄZISION: EINFACHER FLUGKAUF, MEHRWERT IM FOKUS
                    </h3>
                    <h2 class="big-case-subtitle">
                        Wir haben für eine Berliner Reiseagentur eine Webseite mit einem
                        Mitgliedsbereich und einer Flug-Suchmaschine entwickelt, die Kunden
                        den Kaufprozess erleichtert. Bei uns steht Mehrwert im Fokus, nicht
                        das schnelle Geld – Präzision und Klarheit sind unsere Meisterschaft.
                    </h2>
                    <div class="big-case_actions">
                        <div class="big-case_actions-open">
                            <el-button type="primary" class="btn_wrapper" @click="redirectToWebsite">
                                <span class="btn_label">Webseite entdecken</span>
                            </el-button>
                        </div>
                    </div>

                </div>
            </div>
        </el-col>

        <el-col :span="10" v-if="!isMobile" class="right-section">
            <div class="big-case_right">
                <div class="big-case_right-content">
                    <video muted autoplay playsinline loading="lazy"  class="custom-card-player">
                        <source src="@/assets/sehlen_video.mp4" type="video/mp4" />
                        Tarayıcınız video etiketini desteklemiyor.
                    </video>

                    <div class="big-case_right-text">
                        <h3 class="big-case_right-title">Sehlen Tourismus</h3>
                        <div class="big-case_right-text-details">
                            <span class="big-case_right-description">Dies ist das Einführungsvideo der Website</span>
                        </div>
                    </div>
                </div>
                <el-card class="box-card">
                    <div class="image-section">
                        <picture>
                            <source srcset="@/assets/sehlenarama.webp" type="image/webp">
                            <img src="@/assets/sehlenarama.png" alt="Bilet Image" class="bilet-image" />
                        </picture>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</el-col>
</template>

<script>
export default {
    name: 'ReferansSection',
    data() {
        return {
            isMobile: false,
        };
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
        },
        redirectToWebsite() {
            window.location.href = "http://217.160.138.215:8450";
        },
    }
};
</script>

<style>
.new-section {
    display: flex;
    justify-content: center;
    padding: 35px 20px;
    background: linear-gradient(to right, #053c05, #000000);
    border-radius: 30px;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 5%;
    border: 3px solid transparent;
    transition: border-color 0.8s ease, background-color 0.8s ease;
    flex-direction: row;
}

.new-section:hover {
    border-color: #fff;
}

.left-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 20px;
}

.right-section {
    display: flex;
    flex-direction: column;
}

.big-case_logo-wrapper {
    margin-bottom: 15px;
    display: flex;
    justify-content: left;
}

.big-case_logo {
    width: 60px;
    height: auto;
}

.big-case_image-wrapper {
    margin-bottom: 15px;
    display: flex;
    justify-content: left;
}

.big-case_featured-image {
    width: 90%;
    height: auto;
    border-radius: 10px;
}

.big-case_meta {
    text-align: left;
}

.big-case_title {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    width: 90%;
    font-weight: 600;
    color: white;
    margin-bottom: 15px;
}

.big-case-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 600;
    width: 90%;
    color: white;
    margin-bottom: 15px;
}

.case_tags-collection {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 20px;
    width: 70%;
}

.case_tag {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, color 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 80%;
}

.case_tag:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    border-color: white;
}

.case_tag .el-icon {
    margin-right: 8px;
}

.case_tag-text {
    font-family: 'Poppins', sans-serif;
    font-size: 8px;
    font-weight: 200;
    color: white;
}

.btn_wrapper {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, color 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.3);
    font-weight: 600;
    text-transform: uppercase;
}

.btn_wrapper:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    border-color: white;
}

.right-section .big-case_right {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.big-case_right-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
}

.custom-card-player {
    width: 50%;
    height: auto;
    border-radius: 10px;
}

.big-case_right-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: left;
    color: white;
    line-height: 1.4;
}

.big-case_right-title {
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-bottom: 5px;
    line-height: 1.6;
}

.big-case_right-description {
    font-size: 15px;
    font-weight: 400;
    color: white;
    margin-bottom: 0;
    display: inline;
}

.box-card {
    display: flex;
    margin-top: 10%;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.bilet-image {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 8px;
}

@media (max-width: 768px) {
    .new-section {
        display: flex;
        justify-content: center;
        background: linear-gradient(to right, #053c05, #000000);
        border-radius: 30px;
        max-width: 400px;
        border: 3px solid transparent;
    }

    .left-section {
        width: 100%;
        text-align: center;
        padding: 0;
    }

    .big-case_image-wrapper {
        justify-content: center;
        margin-bottom: 10px;
        text-align: center;
    }

    .big-case_featured-image {
        width: 100%;
        height: auto;
        border-radius: 10px;
        margin-left: 70%;
    }

    .big-case_title {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        width: 100%;
        font-weight: 600;
        color: white;
        margin-bottom: 10px;
        text-align: center;
        margin-left: 35%;
    }

    .big-case-subtitle {
        font-family: 'Montserrat', sans-serif;
        font-size: 10px;
        font-weight: 400;
        width: 100%;
        color: white;
        margin-bottom: 20px;
        text-align: center;
        margin-left: 35%;
    }

    .btn_wrapper {
        width: 100%;
        text-align: center;
        font-size: 12px;
        margin-top: 20px;
        margin-left: 36%;
    }

    .right-section {
        display: none;
    }

    .custom-card-player {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }

    .box-card {
        display: none;
    }
}
</style>
