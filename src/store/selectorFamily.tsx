import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todoSelectorFamily = atomFamily({
  key: "todosAtomFamilyWithSelectorFamily",
  default: selectorFamily({
    key: "todosSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await get(axios.get(`http://localhost:4000/todos/${id}`);
        return res.data;
      },
  }),
});
