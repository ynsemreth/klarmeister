<template>
<el-col :span="24" class="hero-section">
    <div class="content-and-media">
        <div class="hero-content">
            <h3 class="hero-h3">WIR SIND KLARMEISTER</h3>
            <h1 class="hero-title">
                Deine Webseite braucht kein Facelift - sie braucht Power
            </h1>
            <h2 class="hero-subtitle">
                Mit uns erhalten Sie eine neue, leistungsstarke Webseite zur Neukunden und
                Mitarbeitergewinnung - und das in nur 3 kurzen Online-Terminen. Der gesamte
                Zeitaufwand für Sie beträgt dabei durchschnittlich nur 4 Stunden.
            </h2>
            <h3 class="hero-text">
                Starte jetzt und hol dir die Webseite, die Kunden gewinnt - oder die passenden Mitarbeiter!
            </h3>
            <div class="hero-button">
                <router-link to="/anfrage">
                    <el-button class="btn-services">
                        Jetzt Angebot einholen
                        <el-icon>
                            <Right />
                        </el-icon>
                    </el-button>
                </router-link>
                <img v-lazy="garantiImage" alt="garanti" />
            </div>
        </div>
        <div class="media-container">
            <img v-lazy="laptopImage" alt="Laptop" class="laptop-image" />
            <div ref="videoContainer" class="video-placeholder"></div>
        </div>
    </div>
</el-col>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    onMounted,
} from 'vue';
import {
    Right
} from '@element-plus/icons-vue';

import laptopImage from '@/assets/laptop.png';
import garantiImage from '@/assets/garanti.png';

export default defineComponent({
    name: 'HomeSection',
    components: {
        Right,
    },
    setup() {
        const videoContainer = ref < HTMLElement | null > (null);

        onMounted(() => {
            const script = document.createElement('script');
            script.src = 'https://fast.wistia.net/assets/external/E-v1.js';
            script.async = true;
            document.body.appendChild(script);

            if ('IntersectionObserver' in window && videoContainer.value) {
                const observer = new IntersectionObserver(
                    (entries, observerInstance) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting && videoContainer.value) {
                                // İframe'i oluştur ve ekle
                                const iframe = document.createElement('iframe');
                                iframe.src = 'https://fast.wistia.net/embed/iframe/s9z0owf208?seo=true&videoFoam=false';
                                iframe.title = 'klarmeistervideo';
                                iframe.allow = 'autoplay; fullscreen';
                                iframe.setAttribute('allowTransparency', 'true'); // setAttribute kullanıldı
                                iframe.frameBorder = '0';
                                iframe.scrolling = 'no';
                                iframe.className = 'wistia_embed';
                                iframe.name = 'wistia_embed';
                                iframe.width = '520';
                                iframe.height = '320';

                                videoContainer.value.appendChild(iframe);
                                observerInstance.unobserve(entry.target);
                            }
                        });
                    }, {
                        rootMargin: '0px 0px 200px 0px',
                    }
                );

                observer.observe(videoContainer.value);
            } else if (videoContainer.value) {
                // Intersection Observer desteklenmiyorsa iframe'i hemen yükle
                const iframe = document.createElement('iframe');
                iframe.src = 'https://fast.wistia.net/embed/iframe/s9z0owf208?seo=true&videoFoam=false';
                iframe.title = 'klarmeistervideo';
                iframe.allow = 'autoplay; fullscreen';
                iframe.setAttribute('allowTransparency', 'true');
                iframe.frameBorder = '0';
                iframe.scrolling = 'no';
                iframe.className = 'wistia_embed';
                iframe.name = 'wistia_embed';
                iframe.width = '520';
                iframe.height = '320';

                videoContainer.value.appendChild(iframe);
            }
        });
        return {
            videoContainer,
            laptopImage,
            garantiImage,
        };
    },
});
</script>

<style>
.hero-section {
    text-align: left;
    max-width: 1200px;
    margin: 0 auto;
}

.content-and-media {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hero-content {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 50%;
}

.media-container {
    position: relative;
    width: 100%;
}

.laptop-image {
    width: 100%;
    height: auto;
    display: block;
}

.video-placeholder {
    position: absolute;
    top: 29%;
    left: 17.4%;
    width: 80%;
    height: 80%;
    background-color: transparent;
}

.hero-h3 {
    font-family: 'Poppins', monospace;
    font-size: 13px;
    margin-top: 20px;
    color: white;
    text-align: center;
}

.hero-text {
    font-family: 'Poppins', monospace;
    font-size: 13px;
    margin-top: 20px;
    color: black;
}

.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    word-wrap: break-word;
    font-style: italic;
    font-weight: bold;
    margin-top: 20px;
    color: black;
    margin: 0;
    line-height: 1.2;
    display: inline-block;
    padding-bottom: 0.25rem;
    position: relative;
}

.hero-title::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
}

.hero-title:hover::before {
    width: 100%;
}

.hero-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color: black;
    margin: 20px 0;
}

.hero-button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
}

.btn-services {
    background-color: #0def95;
    border: none;
    height: 50px;
    color: black;
    padding: 10px 20px;
    align-items: center;
}

.hero-button img {
    max-width: 100px;
    max-height: 60px;
    margin-left: 10px;
}

@media (max-width: 1024px) {
    .content-and-media {
        flex-direction: column;
        align-items: center;
    }

    .hero-content {
        max-width: 100%;
        text-align: center;
        padding: 50px;
    }

    .hero-title {
        font-size: 24px;
        line-height: 1.2;
    }

    .hero-subtitle {
        font-size: 14px;
        margin: 15px 0;
    }

    .hero-button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
    }

    .hero-h3,
    .hero-text {
        font-size: 11px;
    }

    .video-placeholder {
        top: 5%;
        left: 5%;
        width: 90%;
        height: 90%;
    }
}

@media (max-width: 768px) {
    .video-placeholder {
        top: 27%;
        left: 18%;
        width: 65%;
        height: 50%;
    }
}

@media (max-width: 480px) {
    .video-placeholder {
        position: absolute;
        top: 25%;
        left: 5%;
        width: 90%;
    }

    iframe {
        width: 240px !important;
        height: 160px !important;
    }
}
</style>
