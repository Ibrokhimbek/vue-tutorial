import { reactive } from "vue";

export const store = reactive({
  count: 0,
  users: [],
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
  async getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.users = data;
  },
});
