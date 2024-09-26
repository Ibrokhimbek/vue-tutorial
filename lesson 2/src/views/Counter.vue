<script setup>
import { ref } from "vue";
import Buttons from "../components/Buttons.vue";

const number = ref(0);

const increment = () => number.value++;
const decrement = () => number.value--;
</script>

<template>
  <h1>{{ number }}</h1>
  <Buttons :funcs="{ increment, decrement }" />
</template>
