import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { profileReducer } from "./profile";

const reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export default reducers;
