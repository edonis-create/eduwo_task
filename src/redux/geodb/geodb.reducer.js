import { RESPONSE } from "./geodb.types";

const INITIAL_STATE = {
  res: "",
};

const geodbData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESPONSE:
      return { ...state, res: action.payload };
    default:
      return state;
  }
};
export default geodbData;
