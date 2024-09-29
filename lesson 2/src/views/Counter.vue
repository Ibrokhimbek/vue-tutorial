<script setup>
import Buttons from "../components/Buttons.vue";
import { store } from "@/store";
</script>

<template>
  <h1>{{ store.count }}</h1>
  <Buttons>
    <h1>Buttons</h1>
  </Buttons>
</template>
