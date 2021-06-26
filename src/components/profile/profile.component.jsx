import React from "react";
import ProfileInfo from "../profile-info/profile-info.component";
import "./profile.styles.css";

const Profile = () => (
  <div className="profile-dropdown">
    <div className="profile-arrow" />
    <div className="profile-info">
      <ProfileInfo />
    </div>
  </div>
);

export default Profile;
