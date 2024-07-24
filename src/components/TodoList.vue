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
import TodoItem from "./TodoItem.vue";

interface Todo {
  id: number;
  text: string;
}

export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem,
  },
  setup() {
    const newTodo = ref("");
    const todos = ref<Todo[]>([]);
    const nextId = ref(1);

    const addTodo = () => {
      if (newTodo.value.trim() !== "") {
        todos.value.push({
          id: nextId.value++,
          text: newTodo.value.trim(),
        });
        newTodo.value = "";
      }
    };

    const removeTodo = (id: number) => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };

    return {
      newTodo,
      todos,
      addTodo,
      removeTodo,
    };
  },
});
</script>
