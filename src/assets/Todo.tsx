import { useRecoilValue } from "recoil";
import { todosAtomFamily } from "../store/todoAtomFamily";

type Props = {
  id: number;
};

function Todo({ id }: Props) {
  const todowithSpecificId = useRecoilValue(todosAtomFamily(id));
  return <div>todo</div>;
}
export default Todo;
