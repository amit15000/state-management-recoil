import { atomFamily } from "recoil";
import { todos } from "../assets/todos";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    return todos.find((todo) => todo.id === id);
    // let foundTodo;
    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].id == id) {
    //     foundTodo = todos[i];
    //   }
    //   return foundTodo;
    // }
  },
});
