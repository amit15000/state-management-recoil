import { useRecoilValue } from "recoil";
import { todosAsyncAtom } from "../store/asyncAtom";
import { totalNotificationSelector } from "../store/todosAtom";

function Home() {
  const notifs = useRecoilValue(todosAsyncAtom);

  return (
    <div className="App">
      <button>
        My Network
        <span className="noti">
          ({notifs.myNetworks > 99 ? "99+" : notifs.notification})
        </span>
      </button>
      <button>Jobs ({notifs.jobs}) </button>
      <button>Message ({notifs.messagin})</button>
      <button>Notifications ({notifs.notification})</button>
      <button>Me ({useRecoilValue(totalNotificationSelector)})</button>
    </div>
  );
}

export default Home;
