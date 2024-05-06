import { atom, selector } from "recoil";
import { todosAsyncAtom } from "./asyncAtom";

export const todosAtom = atom({
  key: "todos",
  default: {
    myNetworks: 200,
    jobs: 4,
    messagin: 3,
    notification: 18,
  },
});

export const totalNotificationSelector = selector({
  key: "totalNotification",
  get: ({ get }) => {
    const { myNetworks, jobs, messagin, notification } = get(todosAsyncAtom);
    return myNetworks + jobs + messagin + notification;
  },
});
