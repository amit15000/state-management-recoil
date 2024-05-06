import axios from "axios";
import { atom, selector } from "recoil";

export const todosAsyncAtom = atom({
  key: "asynctodos",
  default: selector({
    key: "asyncNotiSelector",
    get: async () => {
      const res = await axios.get("http://localhost:4000");
      return res.data;
    },
  }),
});
