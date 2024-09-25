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
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardFourDialog',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleClose() {
      this.$emit('update:modelValue', false);
    },
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
</style>
