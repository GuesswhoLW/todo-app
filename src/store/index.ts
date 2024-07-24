// index.ts

import { createStore } from "vuex";

interface Todo {
  id: number;
  text: string;
}

export default createStore({
  state: {
    todos: [] as Todo[],
    nextId: 1,
  },
  mutations: {
    ADD_TODO(state, text: string) {
      state.todos.push({
        id: state.nextId++,
        text,
      });
    },
    REMOVE_TODO(state, id: number) {
      console.log("Before REMOVE_TODO, todos:", state.todos);
      state.todos = state.todos.filter((todo) => todo.id !== id);
      console.log("After REMOVE_TODO, todos:", state.todos);
    },
  },
  actions: {
    addTodo({ commit }, text: string) {
      commit("ADD_TODO", text);
    },
    removeTodo({ commit }, id: number) {
      commit("REMOVE_TODO", id);
    },
  },
  getters: {
    todos: (state) => state.todos,
  },
  modules: {},
});
