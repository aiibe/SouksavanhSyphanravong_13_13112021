import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "../redux/actions";
import { StateType } from "../redux/types";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, profile } = useSelector((state: StateType) => state);
  const { token } = auth;

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

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
          <>
            <NavLink className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {profile?.firstName}
            </NavLink>
            <span className="main-nav-item" onClick={handleSignOut}>
              <i className="fa fa-sign-out" />
              Sign Out
            </span>
          </>
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
