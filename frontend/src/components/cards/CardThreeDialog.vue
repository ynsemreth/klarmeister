<template>
<el-dialog :model-value="modelValue" width="800px" :close-on-click-modal="true" :show-close="false" @close="handleClose" style="background: linear-gradient(to bottom, #212121, #111111); border-radius: 16px; border: 5px solid rgba(255, 255, 255, 0.1);">
    <div class="dialog-content">
        <h2>Bu, Birincil Kartın İçeriğidir</h2>
        <p>
            Bu alanda kartla ilgili daha fazla bilgi verebilirsiniz.
            Buraya açıklamalar, resimler veya başka içerikler ekleyebilirsiniz.
        </p>
        <div class="video-container">
            <video ref="videoPlayer" controls muted autoplay class="video-player">
                <source src="@/assets/klarmeistervideo.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
            </video>
        </div>
    </div>
</el-dialog>
</template>

    
      
      
    
<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue';

export default defineComponent({
    name: 'CardThreeDialog',
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
    },
    setup(props, {
        emit
    }) {
        const videoPlayer = ref < HTMLVideoElement | null > (null);

        const handleClose = () => {
            if (videoPlayer.value) {
                videoPlayer.value.pause();
                videoPlayer.value.currentTime = 0;
            }
            emit('update:modelValue', false);
        };

        return {
            videoPlayer,
            handleClose,
        };
    },
});
</script>
      
      
    
<style>
.dialog-content {
    max-height: 1200px;
    overflow-y: auto;
    padding: 20px;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}

.dialog-content h2 {
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}

.video-container {
    margin-top: 20px;
}

.video-player {
    width: 100%;
    height: auto;
}

@media (max-width: 768px) {
    .el-dialog {
        width: 80% !important;
    }

    .dialog-content {
        padding: 10px;
    }

    .video-container {
        margin-top: 10px;
    }

    .video-player {
        width: 100%;
        height: auto;
    }

    .dialog-content h2 {
        font-size: 18px;
    }

    .dialog-content p {
        font-size: 14px;
    }
}
</style>
