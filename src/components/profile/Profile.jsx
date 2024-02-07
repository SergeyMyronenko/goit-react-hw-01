import "./Profile.css";

export const Profile = ({
  info: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className="profile-box">
      <div>
        <img className="main-image" src={avatar} alt="User avatar" />
        <p className="name-title">{username}</p>
        <p className="nickname-title">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats-list">
        <li className="stats-list-item">
          <span className="stats-list-title">Followers</span>
          <span className="stats-list-amount">{followers}</span>
        </li>

        <li className="stats-list-item">
          <span className="stats-list-title">Views</span>
          <span className="stats-list-amount">{views}</span>
        </li>

        <li className="stats-list-item">
          <span className="stats-list-title">Likes</span>
          <span className="stats-list-amount">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
