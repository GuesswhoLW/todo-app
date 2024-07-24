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
import { defineComponent, ref, computed } from "vue";
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
