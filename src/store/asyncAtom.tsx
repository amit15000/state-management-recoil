import axios from "axios";
import { atom, selector } from "recoil";

export const todosAsyncAtom = atom({
  key: "asyncTodo",
  default: selector({
    key: "asyncNotiSelector",
    get: async () => {
      //   await new Promise((r) =>
      //     setTimeout(() => {
      //       r("5 seconds passed");
      //     }, 5000)
      //   ).then((res) => console.log(res));
      const myPromise = new Promise((resolve, reject) => {
        // resolve("Promise Resolved");
        //or
        reject("Promise Rejected");
      });
      myPromise
        .then((res) => console.log("Resolve Parameter of Promise says ", res))
        .catch((rej) => console.log("Reject parameter of promise says", rej));

      const res = await axios.get("http://localhost:4000");
      return res.data;
    },
  }),
});
