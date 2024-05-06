import { useRecoilValue } from "recoil";
import { todosAtomFamily } from "../store/todoAtomFamily";

type Props = {
  id: number;
};

function Todo({ id }: Props) {
  const todowithSpecificId = useRecoilValue(todosAtomFamily(id));
  return (
    <div>
      <p>Title : {todowithSpecificId?.id}</p>
      <p>Title : {todowithSpecificId?.title}</p>
      <p>Title : {todowithSpecificId?.description}</p>
    </div>
  );
}
export default Todo;
