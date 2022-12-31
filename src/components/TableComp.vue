<script setup>
import Button from "../components/ButtonComp.vue";
import getRequest from "../api/baseRequest";
</script>
<script>
const responseBuyers = await getRequest("buyers");
const responseProviders = await getRequest("providers");

export default {
  data() {
    return {
      items_array: [
        1234,
        responseBuyers.name || "requestFailed",
        responseProviders.name || "requestFailed",
        "12/02/2020",
        "R$ 49.725,00",
        "RECEBIDO",
      ],
    };
  },
};
</script>
<template>
  <section class="tableSection">
    <h1>Notas fiscais</h1>
    <p>Visualize as notas fiscais que você têm.</p>
    <table>
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items in 3" :key="items">
          <td v-for="(items, index) in items_array" :key="index">
            {{ items }}
          </td>
          <td><Button text="Dados do cedente" /></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.tableSection {
  margin: 50px;
}

.tableSection p {
  color: #727d94;
}

h1 {
  color: #021b51;
  font-weight: 500;
  font-size: 24px;
}

table {
  width: 100%;
}

th {
  text-align: left;
  color: #727d94;
}

th,
td {
  border-bottom: 1px solid #ddd;
}

td {
  padding: 12px 0;
}
</style>
