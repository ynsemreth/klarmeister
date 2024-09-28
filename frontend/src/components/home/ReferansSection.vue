<template>
<el-col style="text-align: center; font-size: 13px; font-family: 'Poppins', Courier, monospace; color: rgb(54, 189, 54); margin-bottom: 3%;">
    <h3>REFERENZ</h3>
</el-col>

<el-col :span="24" class="new-section">
    <el-row :gutter="10">
        <el-col :span="14" class="left-section">
            <div class="big-case_left">
                <div class="big-case_logo-wrapper">
                    <img src="@/assets/sehlen_logo.png" loading="lazy" alt="Sehlen Studios" class="big-case_logo" />
                </div>

                <div class="big-case_image-wrapper">
                    <img src="@/assets/sehlen_site.png" loading="lazy" alt="Sehlen Studio Site" class="big-case_featured-image" />
                </div>

                <div class="big-case_meta">
                    <h3 class="big-case_title">
                        Landingpage für Recruiting Marktführer, losgelöst von internen Blockaden.
                    </h3>
                    <div class="case_tags-collection">
                        <div class="case_tag">
                            <el-icon>
                                <Document />
                            </el-icon>
                            <div class="case_tag-text">Design System</div>
                        </div>

                        <div class="case_tag">
                            <el-icon>
                                <Refresh />
                            </el-icon>
                            <div class="case_tag-text">Figma to Webflow</div>
                        </div>
                        <div class="case_tag">
                            <el-icon>
                                <MagicStick />
                            </el-icon>
                            <div class="case_tag-text">Dynamic Lotties</div>
                        </div>
                    </div>

                    <div class="big-case_actions">
                        <div class="big-case_actions-open">
                            <el-button type="primary" class="btn_wrapper">
                                <span class="btn_label">Casestudy ansehen</span>
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>

        <el-col :span="10" v-if="!isMobile" class="right-section">
            <div class="big-case_right">
                <div class="big-case_right-content">
                    <video controls muted class="custom-card-player">
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
                        <img src="@/assets/bilet.png" alt="Bilet Image" class="bilet-image" />
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</el-col>
</template>

  
  
<script>
import {
    Document,
    Refresh,
    MagicStick
} from '@element-plus/icons-vue';

export default {
    name: 'ReferansSection',
    components: {
        Document,
        Refresh,
        MagicStick,
    },
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
        }
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
}

.big-case_logo {
    width: 50px;
    height: auto;
}

.big-case_image-wrapper {
    margin-bottom: 15px;
}

.big-case_featured-image {
    width: 80%;
    height: auto;
    border-radius: 10px;
}

.big-case_meta {
    text-align: left;
}

.big-case_title {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    width: 80%;
    font-weight: 600;
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

@media (max-width: 1024px) {
    .new-section {
        flex-direction: column;
    }

    .left-section {
        width: 100%;
        margin-bottom: 20px;
    }

    .right-section {
        display: none;
    }

    .big-case_title {
        font-size: 20px;
    }

    .big-case_right-title {
        font-size: 16px;
    }

    .custom-card-player {
        width: 100%;
    }

    .btn_wrapper {
        padding: 5px 10px; 
        font-size: 12px; 
    }

    .box-card {
        display: flex; 
        justify-content: center; 
        align-items: center;
        width: 100%; 
    }
}
</style>
