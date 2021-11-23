import reducers from "./reducers";

// Reducers type
export type StateType = ReturnType<typeof reducers>;

// Auth reducer types
export type AuthState = {
  token: string;
  error: boolean;
  errorMessage: string;
};

// Profile reducer types
type User = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
};
export type ProfileState = User | null;

// Login Action
export type LoginAction = {
  type: string;
  payload: string;
};

// Profile Action
export type ProfileAction = {
  type: string;
  payload?: {
    firstName: string;
    lastName: string;
    email: string;
    id: string;
  };
};
