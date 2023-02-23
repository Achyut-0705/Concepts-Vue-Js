<template>
  <center>
    <table>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Page</th>
        <th>Actions</th>
      </thead>
    </table>
    <tr v-for="book in books" :key="book.id">
      <td>{{ book.id }}</td>
      <td>{{ book.name }}</td>
      <td>{{ book.page }}</td>
    </tr>
  </center>
</template>

<script>
export default {
  data() {
    return {
      books: [
        { id: 1, name: "ABC1", page: 100 },
        { id: 2, name: "ABC2", page: 101 },
        { id: 3, name: "ABC3", page: 102 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
