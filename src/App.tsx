import { RecoilRoot } from "recoil";
import "./App.css";
import Home from "./assets/Home";
import Todo from "./assets/Todo";

function App() {
  return (
    <>
      <RecoilRoot>
        <Home />
        <Todo id={1} />
        <Todo id={3} />
      </RecoilRoot>
    </>
  );
}

export default App;
