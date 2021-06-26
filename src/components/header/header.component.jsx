import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ShowProfile, HideProfile } from "../../redux/profile/profile.actions";
import { ReactComponent as Logo } from "../../assets/eduwo-logo.svg";
import Profile from "../profile/profile.component";
import "./header.styles.css";

const Header = ({ ShowProfile, HideProfile, showProfile }) => {
  const onHandleMouseEnter = () => ShowProfile();

  const onHandleMouseLeave = () => HideProfile();

  return (
    <div className="header-container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div
        onMouseLeave={onHandleMouseLeave}
        onMouseEnter={onHandleMouseEnter}
        className="profile"
      >
        My profile
        {showProfile ? <Profile /> : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  showProfile: state.ShowProfile.showProfile,
});
export default connect(mapStateToProps, { ShowProfile, HideProfile })(Header);
