import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todoSelectorFamily = atomFamily({
  key: "todosAtomFamilyWithSelectorFamily",
  default: selectorFamily({
    key: "todosSelectorFamily",
    get: (id) => async () => {
      const res = await axios.get(
        `http://localhost:4000/todos?id=${String(id)}`
      );
      return res.data;
    },
  }),
});
