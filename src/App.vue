<script setup>
// import Button from "./components/ButtonComp.vue";
import getRequest from "./api/baseRequest";
import Header from "./components/HeaderComp.vue";

getRequest("");
</script>

<template>
  <main>
    <aside>
      <img class="classImg" src="./assets/logo.jpeg" />
      <div class="selectionDiv">
        <p>Notas fiscais</p>
      </div>
    </aside>
    <section class="divSection">
      <Header />
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
}

.classImg {
  width: 250px;
  margin: 10px;
}

.selectionDiv {
  border-left: 5px solid #00be8a;
  margin: 12px 0;
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.selectionDiv p {
  color: #00be8a;
  font-weight: 500;
  font-size: 18px;
}

.divSection {
  background: #f7f7f7;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
  width: 100%;
}
</style>
