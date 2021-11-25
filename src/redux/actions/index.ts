import { Dispatch } from "redux";
import Service from "../../service";
import { LoginAction, ProfileAction } from "../types";
import { ActionType } from "./action-types";

type Token = {
  token?: string;
  error?: string;
};

// Fetch user token and basic info
export const fetchToken = (email: string, password: string) => {
  return async (dispatch: Dispatch<LoginAction | ProfileAction>) => {
    // Login user for token
    const data = await Service.authenticateUser(email, password);
    const { error, token }: Token = data;

    // Invalid password
    if (error)
      return dispatch({
        type: ActionType.LOGIN_FAILED,
        payload: error,
      });

    // Valid credentials
    if (token) {
      // Set token
      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: token,
      });

      // Fetch user profile
      const profile = await Service.getUserProfile(token);

      dispatch(
        !profile
          ? { type: ActionType.PROFILE_FAILED }
          : {
              type: ActionType.PROFILE_SUCCESS,
              payload: profile,
            }
      );
    }
  };
};

// Sign out user
export const signOut = () => {
  return (dispatch: Dispatch<LoginAction>) =>
    dispatch({ type: ActionType.SIGN_OUT, payload: "" });
};

// Update user profile
export const updateProfile = (
  token: string,
  firstName: string,
  lastName: string
) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    const profile = await Service.updateUserProfile(token, firstName, lastName);

    dispatch(
      !profile
        ? { type: ActionType.UPDATE_PROFILE_FAILED }
        : {
            type: ActionType.UPDATE_PROFILE_SUCCESS,
            payload: profile,
          }
    );
  };
};
