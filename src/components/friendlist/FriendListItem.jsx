export const FriendListItem = ({ user: { avatar, name, isOnline } }) => {
  return (
    <div>
      <img className="friends-img" src={avatar} alt="Avatar" width="48" />
      <p className="friends-name">{name}</p>
      <p className={isOnline ? "friends-is-online" : "friends-offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
