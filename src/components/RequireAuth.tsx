import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { StateType } from "../redux/types";

type propsType = {
  to: string;
  children: ReactElement;
};

function RequireAuth(props: propsType) {
  const { auth } = useSelector((state: StateType) => state);
  const { token } = auth;
  const { children, to } = props;
  return token ? children : <Navigate to={to} />;
}

export default RequireAuth;
