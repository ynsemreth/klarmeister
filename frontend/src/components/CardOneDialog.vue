<template>
  <el-dialog
    :model-value="modelValue"
    title="Card One Dialog"
    width="800px"
    :close-on-click-modal="true"
    :show-close="false"
    @close="handleClose"
  >
    <div class="dialog-content">
      <h2>Bu, Birincil Kartın İçeriğidir</h2>
      <p>
        Bu alanda kartla ilgili daha fazla bilgi verebilirsiniz. 
        Buraya açıklamalar, resimler veya başka içerikler ekleyebilirsiniz.
      </p>
      <div class="video-container">
        <video ref="videoPlayer" controls muted autoplay class="video-player">
          <source src="@/assets/video.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CardOneDialog',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const videoPlayer = ref<HTMLVideoElement | null>(null);

    const handleClose = () => {
      // Video durdurma
      if (videoPlayer.value) {
        videoPlayer.value.pause();
        videoPlayer.value.currentTime = 0; // Videoyu başa sar
      }
      // Dialog modelValue'yi güncelle
      emit('update:modelValue', false); // this yerine emit kullanıldı
    };

    return {
      videoPlayer,
      handleClose,
    };
  },
});
</script>

<style scoped>
.dialog-content {
  max-height: 1200px;
  overflow-y: auto;
  padding: 20px;
}
.dialog-content h2 {
  margin-bottom: 20px;
}
.video-container {
  margin-top: 20px;
}
.video-player {
  width: 100%;
  height: auto;
}
</style>
