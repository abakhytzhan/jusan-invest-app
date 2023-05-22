import "./footer.css";
import jusan from "./img/jusan.png";
import facebook from "./img/facebook-footer.svg";
import instagram from "./img/instagram-footer.svg";
import telegram from "./img/telegram-footer.svg";
import youtube from "./img/youtube-footer.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div>
          <a href="https://www.jusaninvest.kz/">
            <img src={jusan} alt="jusan" />
          </a>
        </div>
        <ul className="footer-items">
          <li className="footer-item">
            <a href="https://www.jusaninvest.kz/tariffs">Pricing</a>
            <div className="item-content">
              <a href="https://www.jusaninvest.kz/tariffs">Spreads</a>
              <a href="https://www.jusaninvest.kz/tariffs">Commissions</a>
              <a href="https://www.jusaninvest.kz/tariffs">Swaps</a>

              <a href="https://www.jusaninvest.kz/tariffs">Funding</a>
              <a href="https://www.jusaninvest.kz/tariffs">Withdrawals</a>
            </div>
          </li>
          <li className="footer-item">
            <a href="https://www.jusaninvest.kz/platform">Trading platforms</a>
            <div className="item-content">
              <a href="https://trading.jusaninvest.kz/login">Web Trader</a>
              <a href="https://trading.jusaninvest.kz/login">Android</a>
              <a href="https://trading.jusaninvest.kz/login">iOS</a>
              <a href="https://trading.jusaninvest.kz/login">Windows</a>
            </div>
          </li>
          <li className="footer-item">
            <a href="https://www.jusaninvest.kz/trading">
              Trader's Guides and News
            </a>
            <div className="item-content">
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
          <li className="footer-item">
            <a href="https://www.jusaninvest.kz/academy">Education</a>
            <div className="item-content">
              <a href="https://www.jusaninvest.kz/academy">
                Jusan Invest Courses
              </a>
              <a href="https://www.jusaninvest.kz/academy">E-Books</a>
              <a href="https://www.jusaninvest.kz/academy">Education App</a>
              <a href="https://www.jusaninvest.kz/academy">Certificate</a>
            </div>
          </li>
          <li className="footer-item">
            <a href="https://www.jusaninvest.kz/junior">Junior</a>
          </li>
          <li className="footer-item">
            <a href="https://www.jusaninvest.kz/about">About us</a>
            <div className="item-content">
              <a href="https://www.jusaninvest.kz/company-news">News</a>
              <a href="https://www.jusaninvest.kz/corporate-documents">Docs</a>
              <a href="https://www.jusaninvest.kz/esg">ESG</a>
              <a href="https://www.jusaninvest.kz/contacts">Contacts</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="socialLinks">
        <a href="https://www.facebook.com/jusaninvestkz">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/jusaninvestkz/">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://t.me/jysaninvest">
          <img src={telegram} alt="telegram" />
        </a>
        <a href="https://www.youtube.com/channel/UCo2nrMAz-qALwXTqQslt2jA">
          <img src={youtube} alt="youtube" />
        </a>
      </div>
      <div className="licence">
        <p>© 2004–2023 Акционерное общество «First Heartland Jusan Invest»</p>
        <p>Лицензия АРРФР №3.2.239/16 от 25.06.2021</p>
      </div>
    </footer>
  );
};

export default Footer;
