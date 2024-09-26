<script setup>
import { defineProps } from "vue";

defineProps({
  funcs: Object,
});
</script>

<template>
  <button @click="funcs.increment">+</button>
  <button @click="funcs.decrement">-</button>
</template>
