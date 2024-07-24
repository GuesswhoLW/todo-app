<template>
  <div :class="{ 'night-mode': isNightMode }">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <button class="toggle-button" @click="toggleNightMode">
        <span v-if="isNightMode">☀️</span>
        <span v-else>🌙</span>
      </button>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const isNightMode = ref(false);

    const toggleNightMode = () => {
      isNightMode.value = !isNightMode.value;
    };

    return {
      isNightMode,
      toggleNightMode,
    };
  },
});
</script>

<style src="./assets/styles.css"></style>
