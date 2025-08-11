<script>
export default {
  data() {
    return {
      name: 'karan',
      status: 'active',
      tasks: ['task1', 'task2', 'task3'],
      link: 'https://www.google.com',
    }
  },
  methods: {
    toggleStatus() {
      if(this.status === 'active'){
        this.status = 'pending';
      }else if(this.status === 'pending'){
        this.status = 'inactive';
      }else{
        this.status = 'active';
      }
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'"> User is logged in </p>
  <p v-else-if="status === 'inactive'"> User is logged out </p>
  <p v-else> User is not active </p>
  
  <h1>Tasks</h1>
  <ul>
    <li v-for="task in tasks" :key="task"> {{ task }} </li>
  </ul>
  <a :href="link"> Go to Google </a>
  <br />
  <br />
  <button @click="toggleStatus"> Click Me </button>
</template>

<style scoped></style>
