<!-- TodoItem.vue -->

<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">Remove</button>
  </li>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Todo {
  id: number;
  text: string;
}

export default defineComponent({
  name: "TodoItem",
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
});
</script>
