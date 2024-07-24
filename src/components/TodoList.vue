<!-- TodoList.vue -->

<template>
  <div class="todo-list">
    <h1>To-Do List</h1>
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Add a new task"
    />
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem,
  },
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
      store.dispatch("removeTodo", id);
    };

    return {
      newTodo,
      todos: store.getters.todos,
      addTodo,
      removeTodo,
    };
  },
});
</script>
