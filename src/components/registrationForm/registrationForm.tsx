import { useRef } from "react";
import { FocusEvent } from "react";
import { Link } from "react-router-dom";
import { registerAccount } from "../../service/registerAccount";
import "./registrationForm.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const emailInput = useRef<HTMLInputElement>(null);
  const loginNameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const emailHandler = () => {
    if (emailInput.current) {
      emailInput.current.style.borderBottom = "2px solid #6991f3";
      let pattern = /[^@]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/;

      if (pattern.test(emailInput.current.value)) {
        emailInput.current.style.borderBottomColor = "green";
        emailInput.current.style.color = "#8a8a8a";
      } else {
        emailInput.current.style.borderBottomColor = "orange";
      }
    }
  };

  const loginNameHandler = () => {
    if (loginNameInput.current) {
      loginNameInput.current.style.borderBottom = "2px solid #6991f3";
      let pattern = /[a-zA-Z0-9_-]{3,15}/;
      let b = loginNameInput.current.value
        .split("")
        .every((elem) => elem.match(/\d/));
      if (pattern.test(loginNameInput.current.value)) {
        if (!b) {
          loginNameInput.current.style.borderBottomColor = "green";
          loginNameInput.current.style.color = "#8a8a8a";
        } else {
          loginNameInput.current.style.borderBottomColor = "orange";
        }
      } else {
        loginNameInput.current.style.borderBottomColor = "orange";
      }
    }
  };

  const passwordHandler = () => {
    if (passwordInput.current) {
      passwordInput.current.style.borderBottom = "2px solid #6991f3";
      let pattern = /\S{8,30}/;
      const b = passwordInput.current.value
        .split("")
        .some((elem) => /\d/.test(elem));
      const c = passwordInput.current.value
        .split("")
        .some((elem) => /\W/.test(elem));
      if (pattern.test(passwordInput.current.value)) {
        if (b && c) {
          passwordInput.current.style.borderBottomColor = "green";
          passwordInput.current.style.color = "#8a8a8a";
        } else {
          passwordInput.current.style.borderBottomColor = "orange";
        }
      } else {
        passwordInput.current.style.borderBottomColor = "orange";
      }
    }
  };

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    if (currentTarget.style.borderBottomColor === "green") {
      currentTarget.style.borderBottom = "0.5px solid green";
    } else {
      currentTarget.style.borderBottom = "2px solid red";
    }
  };

  const submitHandler = () => {
    if (emailInput.current && loginNameInput.current && passwordInput.current) {
      if (
        checkForm([
          emailInput.current,
          loginNameInput.current,
          passwordInput.current,
        ])
      ) {
        let account = {
          email: emailInput.current.value,
          loginName: loginNameInput.current.value,
          password: passwordInput.current.value,
        };
        registerAccount(account);
        navigate("/login");
      }
    }

    function checkForm(inputs: string | any[]) {
      let count = 0;
      for (let i = 0; i < inputs.length; i++) {
        if (
          inputs[i].style.borderBottomColor !== "green" ||
          inputs[i].style.borderBottomColor === ""
        ) {
          inputs[i].style.borderBottom = "2px solid red";
          inputs[i].classList.add("changeColor");
          inputs[i].style.color = "red";
        } else {
          count++;
        }
      }
      if (count === inputs.length) {
        return true;
      } else {
        return false;
      }
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <div className="container-registration">
      <div className="registration">
        <div className="title-registration">Регистрация</div>
        <span data-descr="Латинские буквы, может содержать спецсимволы и цифры, обязательно должна быть «собачка» (@), без пробелов">
          <input
            ref={emailInput}
            className="email"
            type="email"
            placeholder="email"
            onChange={emailHandler}
            onBlur={blurHandler}
            onKeyDown={keyDownHandler}
            required
          />
        </span>
        <div className="line"></div>
        <span data-descr="От 3 до 15 символов, латиница. Без пробелов, без спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать числа, но не полностью состоять из них.">
          <input
            ref={loginNameInput}
            className="loginName"
            type="text"
            placeholder="Login"
            onChange={loginNameHandler}
            onBlur={blurHandler}
            onKeyDown={keyDownHandler}
            required
          />
        </span>
        <div className="line"></div>

        <span data-descr="От 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра.">
          <input
            ref={passwordInput}
            className="password"
            type="password"
            placeholder="Password"
            onChange={passwordHandler}
            onBlur={blurHandler}
            onKeyDown={keyDownHandler}
            required
          />
        </span>
        <div className="line"></div>

        <button className="button-registration" onClick={submitHandler}>
          Registration
        </button>

        <div className="registration-text">
          <span>Already a client? </span>
          <Link to="/login"> Login here.</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
