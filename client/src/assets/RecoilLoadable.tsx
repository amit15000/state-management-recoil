import { useRecoilStateLoadable, useRecoilValueLoadable } from "recoil";
import { todoSelectorFamily } from "../store/selectorFamily";

function RecoilLoadable({ id }: { id: number }) {
  //   const [todo, setTodo] = useRecoilStateLoadable(todoSelectorFamily(id));
  const todo = useRecoilValueLoadable(todoSelectorFamily(id));

  if (todo.state == "hasValue") {
    return (
      <div>
        <p>Id : {todo.contents.id}</p>
        <p>Title : {todo.contents.title}</p>
        <p>Description : {todo.contents.description}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}

export default RecoilLoadable;
