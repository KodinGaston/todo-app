<script setup lang="ts">
import { ref } from 'vue';
import { useTodosStore } from '@/stores/todos.ts';

const props = defineProps({
  id: { type: Number, required: true },
  todoText: { type: String, required: true },
  complete: { type: Boolean, default: false },
});

const emit = defineEmits(['taskCompleted']);

const todoStore = useTodosStore();

const isDone = ref(props.complete);

function toggleCompletedState() {
  isDone.value = !isDone.value;

  if (isDone.value) {
    emit('taskCompleted'); // Emitir el evento cuando se marca como completada
  }

  todoStore.toggleTodoState(props.id, isDone.value);
}
</script>

<template>
  <div class="todo-item">
    <div :class="{ completed: isDone }">
      {{ todoText }}  <!-- Aquí mostramos el nombre del todo -->
    </div>
    <button @click="toggleCompletedState">
      <span v-if="isDone">🟢 Done</span>
      <span v-if="!isDone">🔴 Not Done</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.completed {
  text-decoration: line-through;
}
</style>
