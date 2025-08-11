<script setup>

import { onMounted, ref } from 'vue';
  const name =  ref('karan');
  const status = ref('active');
  const tasks = ref(['task1', 'task2', 'task3']);
  const link = ref('https://www.google.com');
  const newTask = ref('');

  const toggleStatus = () => {
    if(status.value === 'active'){
      status.value = 'pending';
    }else if(status.value === 'pending'){
      status.value = 'inactive';
    }else{
      status.value = 'active';
    }
  }

  const addNewTask = () => {
    if(newTask.value.trim() !== ''){
      tasks.value.push(newTask.value);
      newTask.value = '';
    } else {
      alert('Please enter a task');
    }
  }

  const deleteTask = (index) => {
    tasks.value.splice(index, 1);
  }

  onMounted(async() => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      console.log(data);
      tasks.value = data.map(item => item.title);
    } catch (error) {
      console.log('Error fetching tasks');
    }
  })

</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'"> User is logged in </p>
  <p v-else-if="status === 'inactive'"> User is logged out </p>
  <p v-else> User is not active </p>

  <form @submit.prevent="addNewTask">
    <label for="newTask">Add Task</label>&nbsp;&nbsp;
    <input type="text" name="newTask" id="newTask" v-model="newTask" />&nbsp;&nbsp;
    <button type="submit">Submit</button>
  </form>
  
  <h1>Tasks</h1>
  <ul>
    <li v-for="(task, index) in tasks" :key="task"> <span>{{ task }}</span> <button type="button" @click="deleteTask(index)">X</button> </li>
  </ul>
  <a :href="link"> Go to Google </a>
  <br />
  <br />
  <button @click="toggleStatus"> Change Status </button>
</template>

<style scoped></style>
