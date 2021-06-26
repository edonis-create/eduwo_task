import { NAME } from "./unsplash.type";

export const SearchName = (clickedName) => ({
  type: NAME,
  payload: clickedName,
});
