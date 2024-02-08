import "./FriendList.css";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ userInfo }) => {
  return (
    <ul className="friends-list">
      {userInfo.map((item) => (
        <li className="friends-item" key={item.id}>
          <FriendListItem user={item} />
        </li>
      ))}
    </ul>
  );
};
