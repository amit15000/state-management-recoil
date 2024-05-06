import { RecoilRoot } from "recoil";
import "./App.css";
import Home from "./assets/Home";
import Todo from "./assets/Todo";
import TodoWithSelectorFamily from "./assets/TodoWithSelectorFamily";

function App() {
  return (
    <>
      {/* <RecoilRoot>
        <Home />
        <Todo id={1} />
        <Todo id={3} />
      </RecoilRoot> */}
      <RecoilRoot>
        <TodoWithSelectorFamily id={2} />
        <TodoWithSelectorFamily id={5} />
      </RecoilRoot>
    </>
  );
}

export default App;
