import reducers from "./reducers";

export type StateType = ReturnType<typeof reducers>;

// Reducers
export type AuthState = {
  token: string;
  error: boolean;
  errorMessage: string;
};

// Actions
export type LoginAction = {
  type: string;
  payload: string;
};
