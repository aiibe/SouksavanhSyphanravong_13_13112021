import { ActionType } from "../actions/action-types";
import { AuthState, LoginAction } from "../types";

const initState = {
  token: "",
  error: false,
  errorMessage: "",
};

export const authReducer = (
  state: AuthState = initState,
  action: LoginAction
): AuthState => {
  switch (action.type) {
    case ActionType.SIGN_OUT:
      return { ...initState };
    case ActionType.LOGIN_FAILED:
      return {
        token: "",
        error: true,
        errorMessage: action.payload,
      };
    case ActionType.LOGIN_SUCCESS:
      return { token: action.payload, error: false, errorMessage: "" };
    default:
      return state;
  }
};
