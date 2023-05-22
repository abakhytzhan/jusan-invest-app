import "./loginForm.css";
import { getAccountsList } from "../../service/getAccountsList";
import { setCurrentUser } from "../../service/setCurrentUser";
import { setToken } from "../../service/setToken";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const loginMessage = useRef<HTMLDivElement>(null);
  const login = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const signHandler = () => {
    const accounts = getAccountsList();
    if (accounts) {
      for (let i = 0; i < accounts.length; i++) {
        if (
          accounts[i].loginName === login?.current?.value &&
          accounts[i].password === password?.current?.value
        ) {
          setCurrentUser(login?.current?.value, password?.current?.value);
          setToken();

          if (!loginMessage.current?.classList.contains("inactive")) {
            loginMessage.current?.classList.add("inactive");
          }
          if (login.current) login.current.value = "";
          if (password.current) password.current.value = "";
          navigate("/");
          break;
        }
        if (i === accounts.length - 1) {
          if (loginMessage.current?.classList.contains("inactive")) {
            loginMessage.current.classList.remove("inactive");
          }
        }
      }
    } else {
      loginMessage.current?.classList.remove("inactive");
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      signHandler();
    }
  };

  return (
    <div className="container-login">
      <div className="login">
        <div className="login-header">
          <div className="login-title">Log in</div>
          <div className="login-message inactive" ref={loginMessage}>
            Invalid username or password
          </div>
        </div>
        <input
          ref={login}
          className="login-loginName"
          type="text"
          placeholder="Login"
          onKeyDown={keyDownHandler}
        />
        <div className="line"></div>
        <input
          ref={password}
          className="login-password"
          type="password"
          placeholder="Password"
          onKeyDown={keyDownHandler}
        />
        <div className="line"></div>
        <button className="button-login" onClick={signHandler}>
          Войти
        </button>
        <div className="login-text">
          <span>Not yet a client?</span>
          <Link to="/registration">Sign up here</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
