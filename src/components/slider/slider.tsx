import "./slider.css";
import mountains from "./img/mountains.png";
import care from "./img/care-client-safe.png";
import atmosphere from "./img/atmosphere.png";
import publicIcon from "./img/public-icon.png";
import { useState } from "react";
import arrowLeft from "./img/arrowLeftLight.svg";
import arrowRight from "./img/arrowRightLight.svg";
import phone from "./img/phone.png";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const dataSlider = [atmosphere, care, phone, mountains, publicIcon];

  let text2 = [
    "We secure your financial future.",
    "The Jusan Invest is one of the leading",
    "integrated financial services providers worldwide.",
    "Here you can learn more about who we are and what we do.",
    "https://www.jusaninvest.kz/pension#pension1",
  ];

  let text4 = [
    "ESG Jusan Invest.",
    "Enviroment",
    "Social",
    "Governance",
    "https://www.jusaninvest.kz/esg",
  ];

  let text1 = [
    "Welcome to Jusan Invest.",
    "Highly reliable",
    "transparent trading with",
    "strong and reliable customer support",
    "https://www.jusaninvest.kz/about",
  ];

  let text5 = [
    "Public initiatives",
    "We actively support",
    "social and charitable projects",
    "that help residents of Kazakhstan.",
    "https://www.jusaninvest.kz/esg",
  ];

  let text3 = [
    "Take Control from Anywhere in The World",
    "Enjoy alerts, notifications,",
    "friendly one-click navigation and",
    "professional charting tools at your fingertips.",
    "https://www.jusaninvest.kz/platform",
  ];

  const dataText = [text1, text2, text3, text4, text5];

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex((slideIndex) => slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(() => 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex((slideIndex) => slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(() => dataSlider.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <>
      <div className="container-slider">
        <img src={dataSlider[slideIndex - 1]} className="image" alt="slider" />
        <div className="imageText">
          <div className="textTitle">{dataText[slideIndex - 1][0]}</div>
          <div>{dataText[slideIndex - 1][1]}</div>
          <div>{dataText[slideIndex - 1][2]}</div>
          <div>{dataText[slideIndex - 1][3]}</div>
          <a href={dataText[slideIndex - 1][4]}>Learn more</a>
        </div>
        <img
          src={arrowLeft}
          className="arrowLeft"
          onClick={prevSlide}
          alt="arrowLeft"
        ></img>
        <img
          src={arrowRight}
          className="arrowRight"
          onClick={nextSlide}
          alt="arrowRight"
        ></img>
        <div className="container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              key={index}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
        <div className="slider-line"></div>
      </div>
    </>
  );
};

export default Slider;
