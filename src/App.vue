<script setup>
import Button from "./components/ButtonComp.vue";
import getRequest from "./api/baseRequest";

getRequest("");
</script>

<template>
  <main>
    <aside>Aside</aside>
    <Button />
  </main>
</template>

<style scoped>
h1 {
  background: red;
}

main {
  color: black;
  display: flex;
}

aside {
  width: 20%;
  background: green;
}
</style>
