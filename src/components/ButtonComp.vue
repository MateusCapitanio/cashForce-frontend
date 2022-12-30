<script>
export default {
  props: { onClickBtn: Function },
};
</script>
<template>
  <div class="divButton">
    <button>Olá, sou um button</button>
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
