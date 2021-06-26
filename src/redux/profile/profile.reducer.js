import { HIDE_PROFILE, SHOW_PROFILE } from "./profile.types";
const INITIAL_STATE = {
  showProfile: false,
};

const showProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_PROFILE:
      return { ...state, showProfile: true };
    case HIDE_PROFILE:
      return { ...state, showProfile: false };
    default:
      return state;
  }
};

export default showProfileReducer;
