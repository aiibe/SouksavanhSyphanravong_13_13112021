import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { StateType } from "../redux/types";

function Header() {
  const { auth } = useSelector((state: StateType) => state);
  const { token } = auth;

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {token ? (
          <NavLink className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            "Username"
          </NavLink>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
