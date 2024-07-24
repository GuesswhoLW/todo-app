<!-- Home.vue -->

<template>
  <div class="home">
    <h1>Home</h1>
    <p>Welcome to your To-Do List app!</p>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "../components/TodoList.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    TodoList,
  },
});
</script>
