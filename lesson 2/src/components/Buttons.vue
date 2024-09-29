<script setup>
import { store } from "@/store";
import { computed } from "vue";
import { onMounted } from "vue";

onMounted(() => {
  store.getUsers();
});
const users = computed(() => {
  return store.users.slice(0, store.count);
});
</script>

<template>
  <h1 v-if="isGreaterThanFive">Count is Greater than 5</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
  <button @click="store.increment">+</button>
  <button @click="store.decrement">-</button>
  <slot></slot>
</template>
