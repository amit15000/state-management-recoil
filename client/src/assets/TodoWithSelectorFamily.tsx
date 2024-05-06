import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { todoSelectorFamily } from "../store/selectorFamily";

function TodoWithSelectorFamily({ id }: { id: number }) {
  const [todo, setTodo] = useRecoilState(todoSelectorFamily(id));

  return (
    <div>
      <p>Id : {todo.id}</p>
      <p>Title : {todo.title}</p>
      <p>Description : {todo.description}</p>
    </div>
  );
}

export default TodoWithSelectorFamily;
