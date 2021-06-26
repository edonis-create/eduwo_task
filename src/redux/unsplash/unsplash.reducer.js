import { NAME } from "./unsplash.type";

const INITIAL_STATE = {
  name: "",
};

const UnsplashReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default UnsplashReducer;
