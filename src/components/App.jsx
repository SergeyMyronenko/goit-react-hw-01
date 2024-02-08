import "./App.css";
import { Profile } from "./profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";
import { FriendList } from "./friendlist/FriendList";

const App = () => {
  return (
    <div>
      <Profile info={userData} />
      <FriendList userInfo={friends} />
    </div>
  );
};
export default App;
