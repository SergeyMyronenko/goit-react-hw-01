import "./Profile.css";
import userData from "../userData.json";

export const Profile = () => {
  return (
    <div className="profile-box">
      <div>
        <img className="main-image" src={userData.avatar} alt="User avatar" />
        <p className="name-title">{userData.username}</p>
        <p className="nickname-title">@{userData.tag}</p>
        <p className="location">{userData.location}</p>
      </div>
      <ul className="stats-list">
        <li className="stats-list-item">
          <span className="stats-list-title">Followers</span>
          <span className="stats-list-amount">{userData.stats.followers}</span>
        </li>

        <li className="stats-list-item">
          <span className="stats-list-title">Views</span>
          <span className="stats-list-amount">{userData.stats.views}</span>
        </li>

        <li className="stats-list-item">
          <span className="stats-list-title">Likes</span>
          <span className="stats-list-amount">{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
