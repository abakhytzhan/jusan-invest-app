import "./award.css";
import award1 from "./img/award-1.png";
import award2 from "./img/award-2.png";
import award3 from "./img/award-3.png";
import award4 from "./img/award-4.png";
import award5 from "./img/award-5.png";
import award6 from "./img/award-6.png";
import award7 from "./img/award-7.png";
import award8 from "./img/award-8.png";

const Award = () => {
  return (
    <section className="awards">
      <div className="awards-title">Why we?</div>
      <div className="awards-items">
        <div className="award-item">
          <img src={award1} alt="award1" className="award-image" />
          <div className="award-descr">
            «Лучший онлайн-брокер Казахстана 2021» по версии Cbonds Awards CIS
          </div>
        </div>
        <div className="award-item">
          <img src={award2} alt="award2" className="award-image" />
          <div className="award-descr">
            «Лучшая компания по управлению активами 2021» по версии Global
            Banking & Finance Review
          </div>
        </div>
        <div className="award-item">
          <img src={award3} alt="award3" className="award-image" />
          <div className="award-descr">
            «Best Investment Solutions Kazakhstan 2021» по версии Capital
            Finance International
          </div>
        </div>
        <div className="award-item">
          <img src={award4} alt="award4" className="award-image" />
          <div className="award-descr">
            «Прорыв года» по версии Astana International Exchange
          </div>
        </div>
        <div className="award-item">
          <img src={award5} alt="award5" className="award-image" />
          <div className="award-descr">
            «Лучшая команда инвестиционного банкинга» по версии Astana
            International Exchange
          </div>
        </div>
        <div className="award-item">
          <img src={award6} alt="award6" className="award-image" />
          <div className="award-descr">
            «Лучшая компания по управлению активами 2022» по версии Global
            Banking & Finance Review
          </div>
        </div>
        <div className="award-item">
          <img src={award7} alt="award7" className="award-image" />
          <div className="award-descr">
            «Best Mobile Trading Platform Kazakhstan 2022» по версии Global
            Banking & Finance Review
          </div>
        </div>
        <div className="award-item">
          <img src={award8} alt="award8" className="award-image" />
          <div className="award-descr">
            «Most Innovative Online Broker Kazakhstan 2022» по версии Global
            Banking & Finance Review
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
