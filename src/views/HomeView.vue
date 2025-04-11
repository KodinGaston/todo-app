<script setup lang="ts">
import { ref } from 'vue';
import SingleTodo from '../components/SingleTodo.vue';
import { useTodosStore } from '@/stores/todos';
import { storeToRefs } from 'pinia';

const todoStore = useTodosStore();
const { todos } = storeToRefs(todoStore);

const todoName = ref('');
const showCompletedMessage = ref(false);

function addTodo() {
  if (todoName.value.trim() === '') return;
  todoStore.addNewTodo(todoName.value, false);
  todoName.value = '';
}

function onTaskCompleted() {
  showCompletedMessage.value = true;
  setTimeout(clearMessage, 3000);
}

function clearMessage() {
  showCompletedMessage.value = false;
}

// Function to reset all todos
function resetAll() {
  todoStore.resetTodos();
}
</script>

<template>
  <main>
    <div class="my-8">
      <p v-if="showCompletedMessage">
       💫 ☆ • * Great job! ☆ • * 💫
        You completed this task! ☺
      </p>

      <!-- Si hay tareas, mostramos la lista -->
      <div v-if="todos.length > 0" class="todo-list">
        <div
          class="task-container"
          v-for="todo in todos"
          :key="todo.id"
        >
          <SingleTodo
            :todo-text="todo.text"
            :complete="todo.complete"
            :id="todo.id"
            @task-completed="onTaskCompleted"
          />
        </div>
      </div>
      <!-- Mensaje si no hay tareas -->
      <p v-else>You have no tasks!☺</p>
      <!-- Íconos debajo del mensaje de tareas vacías -->
      <p class="iconos">(°-°)☕️ 🖤 ☕️(👀)</p>
    </div>

    <!-- Sección para añadir nueva tarea: input y botón en columna -->
    <div class="add-todo">
      <input
        type="text"
        v-model="todoName"
        @keyup.enter="addTodo"
        placeholder="Enter a new task..."
      />
      <button @click="addTodo">Add Task</button>
    </div>

    <!-- Sección para resetear la lista -->
    <div class="reset-section">
      <button class="reset-btn" @click="resetAll">
        Reset List
      </button>
    </div>
  </main>
</template>
