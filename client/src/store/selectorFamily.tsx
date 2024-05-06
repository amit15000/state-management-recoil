import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todoSelectorFamily = atomFamily({
  key: "todosAtomFamilyWithSelectorFamily",
  default: selectorFamily({
    key: "todosSelectorFamily",
    get: (id) => async () => {
      try {
        //Add 3 sec time delay
        await new Promise((r) => setTimeout(r, 3000));
        const res = await axios.get(
          `http://localhost:4000/todos?id=${String(id)}`
        );
        return res.data;
      } catch (err) {
        return "No Todo Found";
      }
    },
  }),
});
