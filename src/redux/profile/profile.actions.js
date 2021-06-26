import { SHOW_PROFILE } from "./profile.types";
import { HIDE_PROFILE } from "./profile.types";

export const ShowProfile = () => ({
  type: SHOW_PROFILE,
});

export const HideProfile = () => ({
  type: HIDE_PROFILE,
});
