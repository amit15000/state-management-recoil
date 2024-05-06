import { RecoilRoot } from "recoil";
import "./App.css";
import Home from "./assets/Home";
import Todo from "./assets/Todo";
import TodoWithSelectorFamily from "./assets/TodoWithSelectorFamily";
import RecoilLoadable from "./assets/RecoilLoadable";

function App() {
  return (
    <>
      {/* <RecoilRoot>
        <Home />
        <Todo id={1} />
        <Todo id={3} />
      </RecoilRoot> */}
      {/* <RecoilRoot>
        <TodoWithSelectorFamily id={2} />
        <TodoWithSelectorFamily id={4} />
      </RecoilRoot> */}
      <RecoilRoot>
        <RecoilLoadable id={2} />
        <RecoilLoadable id={1} />
      </RecoilRoot>
    </>
  );
}

export default App;
