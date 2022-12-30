<script setup>
import Button from "../components/ButtonComp.vue";
</script>
<script>
export default {
  data() {
    return {
      items_array: ["10", "2", "3", "4", "5", "6"],
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
        <tr>
          <td>001</td>
          <td>Notebook i7 8GB Branco</td>
          <td>Informática</td>
          <td>Informática</td>
          <td>Informática</td>
          <td>Informática</td>
          <td><Button /></td>
        </tr>
        <tr>
          <td>002</td>
          <td>Caneta Esferográfica Azul</td>
          <td>Papelaria</td>
          <td>Papelaria</td>
          <td>Papelaria</td>
          <td>Papelaria</td>
        </tr>
        <tr>
          <td v-for="items in items_array" :key="items[0]">{{ items }}</td>
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
