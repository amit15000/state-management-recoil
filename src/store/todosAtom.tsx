import { atom } from "recoil";

export const todosAtom = atom({
  key: "todos",
  default: {
    myNetworks: 10,
    jobs: 4,
    messagin: 3,
    notification: 18,
  },
});
