import { Dispatch } from "redux";
import { LoginAction } from "../types";
import { ActionType } from "./action-types";

// Actions creators
export const fetchToken = (email: string, password: string) => {
  return async (dispatch: Dispatch<LoginAction>) => {
    try {
      // Login user for token
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Response
      const { status, message, body } = await response.json();

      // Invalid password
      if (status === 400) {
        return dispatch({
          type: ActionType.LOGIN_FAILED,
          payload: message,
        });
      }

      // Valid
      if (status === 200) {
        const { token } = body;
        return dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload: token,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
