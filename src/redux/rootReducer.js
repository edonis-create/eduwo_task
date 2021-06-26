import { combineReducers } from "redux";
import showProfileReducer from "./profile/profile.reducer";
import geodbData from "./geodb/geodb.reducer";
const rootReducer = combineReducers({
  ShowProfile: showProfileReducer,
  GeodbData: geodbData,
});

export default rootReducer;
