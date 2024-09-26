<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <ul>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/counter">Counter</RouterLink>
    </li>
    <li>
      <RouterLink to="/user/3">User</RouterLink>
    </li>
  </ul>
</template>
