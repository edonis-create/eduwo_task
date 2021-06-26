import { combineReducers } from "redux";
import showProfileReducer from "./profile/profile.reducer";
import geodbData from "./geodb/geodb.reducer";
import UnsplashReducer from "./unsplash/unsplash.reducer";
const rootReducer = combineReducers({
  ShowProfile: showProfileReducer,
  GeodbData: geodbData,
  UnsplashData: UnsplashReducer,
});

export default rootReducer;
