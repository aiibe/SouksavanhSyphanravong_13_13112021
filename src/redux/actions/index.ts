import { Dispatch } from "redux";
import Service from "../../service";
import { LoginAction, ProfileAction } from "../types";
import { ActionType } from "./action-types";

type Token = {
  token?: string;
  error?: string;
};

// Actions creators
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
      const { err, firstName, email, id } = profile;

      if (err) return dispatch({ type: ActionType.PROFILE_FAILED });

      dispatch({
        type: ActionType.PROFILE_SUCCESS,
        payload: { firstName, email, id },
      });
    }
  };
};
