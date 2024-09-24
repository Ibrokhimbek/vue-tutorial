<script>
export default {
  data() {
    return {
      user: "Ibrohim Turaboyev",
      number: 5,
      link: "https://t.me/IbrohimTuraboev",
      status: "error",
      users: ["Bobur", "E'zoza", "Malika", "Hilola", "Ma'suda"],
    };
  },
  methods: {
    showUsername() {
      alert(this.user);
    },
    addUser() {
      if (this.user.trim() !== "") {
        this.users.push(this.user);
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="addUser">
    <input type="text" placeholder="Username" v-model="user" />
    <button type="submit">Show username</button>
  </form>
  <h1>Hello {{ user }}!</h1>
  <h1 :title="user">{{ number }}</h1>
  <ul>
    <li v-for="(user, index) in users" :key="index">{{ user }}</li>
  </ul>
  <!-- <p v-if="status === 'pending'">User is Pending</p>
  <p v-else-if="status === 'success'">User is Success</p>
  <p v-else>User is error</p>
  <button @click="isActive = !isActive">Toggle user activity</button> -->
  <!-- <p v-show="isActive">Show</p> -->
  <!-- <a v-bind:href="link">Ibrohimbek</a> -->
  <!-- <a :href="link">Ibrohimbek</a> -->
  <!-- <button v-on:click="number++">+</button>
  <button v-on:click="number--">-</button> -->
  <!-- <button @click="number++">+</button>
  <button @click="number--">-</button> -->
</template>
