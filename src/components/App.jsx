import "./App.css";
import { Profile } from "./profile/Profile";
import userData from "../userData.json";

const App = () => {
  return (
    <div>
      <Profile info={userData} />
    </div>
  );
};
export default App;
