<!-- TodoList.vue -->

<template>
  <div class="todo-list">
    <h1>To-Do List</h1>
    <table>
      <tr>
        <td>
          <input
            v-model="newTodo"
            @keyup.enter="addTodo"
            placeholder="Add a new task"
          />
        </td>
        <td><button @click="addTodo">Add</button></td>
      </tr>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.text }}</td>
        <td><button @click="removeTodo(todo.id)">Remove</button></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "TodoList",
  setup() {
    const newTodo = ref("");
    const store = useStore();

    const addTodo = () => {
      if (newTodo.value.trim() !== "") {
        store.dispatch("addTodo", newTodo.value.trim());
        newTodo.value = "";
      }
    };

    const removeTodo = (id: number) => {
      console.log("removeTodo called with id:", id);
      store.dispatch("removeTodo", id);
    };

    const todos = computed(() => store.getters.todos);

    return {
      newTodo,
      todos,
      addTodo,
      removeTodo,
    };
  },
});
</script>
