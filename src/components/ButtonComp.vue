<script>
export default {
  props: { text: String },
};
</script>
<template>
  <div class="divButton">
    <button>{{ text }}</button>
  </div>
</template>

<style scoped>
.divButton {
  display: flex;
  justify-content: center;
}

.divButton button {
  border: 1px solid #cad3ff;
  border-radius: 24px;
  color: #727d94;
  width: 165px;
  height: 32px;
  cursor: pointer;
}
</style>
