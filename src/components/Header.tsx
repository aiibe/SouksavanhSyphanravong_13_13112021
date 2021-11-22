import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { StateType } from "../redux/types";

function Header() {
  const { user } = useSelector((state: StateType) => state);
  const { name, email } = user;
  const isLoggedIn = name && email;

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="./index.html">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isLoggedIn && (
          <NavLink className="main-nav-item" to="./user.html">
            <i className="fa fa-user-circle"></i>
            {name}
          </NavLink>
        )}

        <NavLink className="main-nav-item" to="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
