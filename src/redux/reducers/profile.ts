import { ActionType } from "../actions/action-types";
import { ProfileAction, ProfileState } from "../types";

export const profileReducer = (
  state: ProfileState = null,
  action: ProfileAction
) => {
  switch (action.type) {
    case ActionType.SIGN_OUT:
      return null;
    case ActionType.PROFILE_FAILED:
      return null;
    case ActionType.PROFILE_SUCCESS:
      return action.payload;
    case ActionType.UPDATE_PROFILE_SUCCESS:
      return action.payload;
    case ActionType.UPDATE_PROFILE_FAILED:
      return state;
    default:
      return state;
  }
};
