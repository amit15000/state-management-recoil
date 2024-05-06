import { useRecoilValue } from "recoil";
import { todosAtom } from "../store/todosAtom";

function Home() {
  const notifs = useRecoilValue(todosAtom);

  return (
    <div className="App">
      <button>My Network ({notifs.myNetworks})</button>
      <button>Jobs ({notifs.jobs}) </button>
      <button>Message ({notifs.messagin})</button>
      <button>Notifications ({notifs.notification})</button>
    </div>
  );
}

export default Home;
