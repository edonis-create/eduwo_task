import { combineReducers } from "redux";
import showProfileReducer from "./profile/profile.reducer";
const rootReducer = combineReducers({
  ShowProfile: showProfileReducer,
});

export default rootReducer;
