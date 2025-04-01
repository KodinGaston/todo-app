// stores/todos.ts
import { ref, onMounted } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

export interface ITodo {
  id: number;
  text: string;
  complete: boolean;
}

const DEBUGGING = import.meta.env.DEV;
const nextId = ref(0);

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<ITodo[]>([]);

  function getTodosFromLocalStorage() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos === null) {
      if (DEBUGGING) {
        console.warn('Not all data has been saved in the localStorage.');
      }
      return;
    }

    todos.value = JSON.parse(savedTodos);
    nextId.value = todos.value.length > 0 ? Math.max(...todos.value.map(todo => todo.id)) : 0;

    if (DEBUGGING) {
      console.log('Uploaded everything from localStorage');
      console.table(todos.value);
    }
  }

  function saveTodosToLocalStorage() {
    const stringified = JSON.stringify(todos.value);
    localStorage.setItem('todos', stringified);

    if (DEBUGGING) {
      console.log('Everything saved into localStorage');
      console.table(todos.value);
    }
  }

  function addNewTodo(text: string, complete: boolean): void {
    nextId.value += 1;
    todos.value.push({ text, complete, id: nextId.value });
    saveTodosToLocalStorage();
  }

  function toggleTodoState(id: number, isComplete: boolean): void {
    const item = todos.value.find(todo => todo.id === id);
    if (item) {
      item.complete = isComplete;
      saveTodosToLocalStorage();
    }
  }

  // NUEVA FUNCIÓN: Resetear la lista de todos
  function resetTodos(): void {
    todos.value = [];
    nextId.value = 0;
    saveTodosToLocalStorage();
    if (DEBUGGING) {
      console.log('all data has been reset.');
    }
  }

  onMounted(() => {
    getTodosFromLocalStorage();
  });

  return { todos, addNewTodo, toggleTodoState, resetTodos };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodosStore, import.meta.hot));
}
