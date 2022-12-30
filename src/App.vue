<script setup>
import Header from "./components/HeaderComp.vue";
import Table from "./components/TableComp.vue";
</script>

<template>
  <main>
    <aside>
      <img class="classImg" src="./assets/logo.jpeg" />
      <button class="selectionDiv">Notas fiscais</button>
    </aside>
    <section class="divSection">
      <Header />
      <Table />
    </section>
  </main>
</template>

<style scoped>
main {
  color: black;
  display: flex;
}

aside {
  width: 20%;
  height: 100vh;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.classImg {
  width: 200px;
  margin: 10px;
}

.selectionDiv {
  border: none;
  background: none;
  border-left: 5px solid #00be8a;
  margin: 50px 0;
  color: #00be8a;
  font-size: 20px;
  font-weight: 500;
  padding: 20px 0;
  width: 100%;
}

.divSection {
  background: #f7f7f7;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
  width: 100%;
}
</style>
