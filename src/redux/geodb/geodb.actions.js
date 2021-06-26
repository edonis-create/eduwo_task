import { RESPONSE } from "./geodb.types";

export const Response = (res) => ({
  type: RESPONSE,
  payload: res,
});
