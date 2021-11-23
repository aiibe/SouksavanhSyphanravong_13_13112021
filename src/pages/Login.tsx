import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchToken } from "../redux/actions";
import { StateType } from "../redux/types";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { auth } = useSelector((state: StateType) => state);
  const { token, error, errorMessage } = auth;

  const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Send form data
    dispatch(fetchToken(email, password));
  };

  useEffect(() => {
    // Redirect logged in user
    if (token) return navigate("/profile");
  }, [token]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error && <small>{errorMessage}</small>}
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Email</label>
            <input type="text" value={email} onChange={handleNameChange} />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe((checked) => !checked)}
            />
            <label>Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
