<script>
export default {
  props: { onClickBtn: Function },
};
</script>
<template>
  <div class="divButton">
    <button onclick="">Olá, sou um button</button>
  </div>
</template>

<style scoped>
.divButton {
  background: purple;
  width: 100%;
}
</style>
