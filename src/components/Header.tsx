import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { StateType } from "../redux/types";

function Header() {
  const { user } = useSelector((state: StateType) => state);
  const { name, email } = user;

  // User's name and email must not be empty string
  const isLoggedIn = name && email;

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
        {isLoggedIn && (
          <NavLink className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {name}
          </NavLink>
        )}

        <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
