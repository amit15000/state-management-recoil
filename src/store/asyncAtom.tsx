import axios from "axios";
import { atom, selector } from "recoil";

export const todosAsyncAtom = atom({
  key: "asyncTodo",
  default: selector({
    key: "asyncNotiSelector",
    get: async () => {
      await new Promise((r) => setTimeout(r, 2000));
      //after 2 sec notification values will set
      const res = await axios.get("http://localhost:4000");
      return res.data;
    },
  }),
});
