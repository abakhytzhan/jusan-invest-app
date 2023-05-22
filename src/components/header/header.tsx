import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkToken } from "../../service/checkToken";
import { getCurrentUser } from "../../service/getCurrentUser";
import Search from "../search/search";
import "./header.css";
import jusan from "./img/jusan.jpg";
import searchLogo from "./img/search-alt-svgrepo-com.svg";

const Header = ({ searchIcon }: any) => {
  const [avatar, setAvatar] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const searchModal = () => {
    setModal((prev) => !prev);
  };

  useEffect(() => {
    if (checkToken()) {
      const user = getCurrentUser();
      const letter = user.loginName.charAt(0).toUpperCase();
      setAvatar(() => letter);
    } else {
    }
  }, []);

  const clickHandler = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentToken");
    setAvatar(() => "");
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={jusan} alt="jusan_logo" className="logo" />
        </Link>
        <ul className="menu">
          <li className="dropdown">
            <a href="https://www.jusaninvest.kz/tariffs">Pricing</a>
            <div className="dropdown-content">
              <a href="https://www.jusaninvest.kz/tariffs">Spreads</a>
              <a href="https://www.jusaninvest.kz/tariffs">Commissions</a>
              <a href="https://www.jusaninvest.kz/tariffs">Swaps</a>

              <a href="https://www.jusaninvest.kz/tariffs">Funding</a>
              <a href="https://www.jusaninvest.kz/tariffs">Withdrawals</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="https://www.jusaninvest.kz/platform">Trading platforms</a>
            <div className="dropdown-content">
              <a href="https://trading.jusaninvest.kz/login">Web Trader</a>
              <a href="https://trading.jusaninvest.kz/login">Android</a>
              <a href="https://trading.jusaninvest.kz/login">iOS</a>
              <a href="https://trading.jusaninvest.kz/login">Windows</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="https://www.jusaninvest.kz/trading">
              Trader's Guides and News
            </a>
            <div className="dropdown-content">
              <a href="https://trading.jusaninvest.kz/login">
                Economic Calendar
              </a>
              <a href="https://www.jusaninvest.kz/company-news">
                Financial news
              </a>
              <a href="https://trading.jusaninvest.kz/login">
                Daily Analysis Videos
              </a>
              <a href="https://www.jusaninvest.kz/market-news">
                Technical Analysis
              </a>
            </div>
          </li>
          <li className="dropdown">
            <a href="https://www.jusaninvest.kz/academy">Education</a>
            <div className="dropdown-content">
              <a href="https://www.jusaninvest.kz/academy">Education App</a>
              <a href="https://www.jusaninvest.kz/academy">Courses</a>
              <a href="https://www.jusaninvest.kz/academy">E-Books</a>
              <a href="https://www.jusaninvest.kz/academy">Certificate</a>
            </div>
          </li>
          <li>
            <a href="https://www.jusaninvest.kz/junior">Junior</a>
          </li>
          <li className="dropdown">
            <a href="https://www.jusaninvest.kz/about">About us</a>
            <div className="dropdown-content">
              <a href="https://www.jusaninvest.kz/company-news">News</a>
              <a href="https://www.jusaninvest.kz/corporate-documents">Docs</a>
              <a href="https://www.jusaninvest.kz/esg">ESG</a>
              <a href="https://www.jusaninvest.kz/contacts">Contacts</a>
            </div>
          </li>
        </ul>
        {searchIcon ? (
          <div className="search">
            <img
              className="searchImg"
              src={searchLogo}
              alt="search"
              onClick={searchModal}
            ></img>
          </div>
        ) : null}

        <a href="https://www.jusaninvest.kz/start" className="account">
          Open account
        </a>
        <Link to="/login" className="signIn">
          Log in
        </Link>
        <Link to="/registration" className="signIn">
          Sign up
        </Link>
        <div className="dropdown2">
          <div className="avatar">
            {avatar ? (
              avatar
            ) : (
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="User / User_02">
                  <path
                    id="Vector"
                    d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            )}
          </div>
          <div className="dropdown-content2">
            <span onClick={clickHandler}>sign out</span>
          </div>
        </div>
      </header>
      {modal ? <Search changeModal={searchModal} /> : null}
    </>
  );
};

export default Header;
