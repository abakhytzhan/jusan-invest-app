import "./cards.css";
import tesla from "./img/tesla.jpg";
import apple from "./img/apple.webp";
import toyota from "./img/toyota.webp";
import ebay from "./img/ebay.jpg";
import amazon from "./img/amazon.webp";
import hp from "./img/hp.jpeg";
import gap from "./img/gap.jpg";
import domino2 from "./img/domino2.png";
import waltmart from "./img/waltmart.webp";
import visa from "./img/visa.webp";
import { getCardData } from "../../service/getCardData";
import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();
  useEffect(() => {
    getCardData();
  });

  const companies = [
    {
      name: "Tesla Inc (TSLA)",
      id: "TSLA",
      image: tesla,
      price: "---",
      currency: "USD",
    },
    {
      name: "Toyota Motor (TM)",
      id: "TM",
      image: toyota,
      price: "---",
      currency: "USD",
    },
    {
      name: "Apple inc. (AAPL)",
      id: "AAPL",
      image: apple,
      price: "---",
      currency: "USD",
    },
    {
      name: "eBay Inc (EBAY)",
      id: "EBAY",
      image: ebay,
      price: "---",
      currency: "USD",
    },
    {
      name: "Amazon.com Inc (AMZN)",
      id: "AMZN",
      image: amazon,
      price: "---",
      currency: "USD",
    },
    {
      name: "HP Inc (HPQ)",
      id: "HPQ",
      image: hp,
      price: "---",
      currency: "USD",
    },

    {
      name: "Domino’s Pizza Inc (DPZ)",
      id: "DPZ",
      image: domino2,
      price: "---",
      currency: "USD",
    },
    {
      name: "Gap Inc (GPS)",
      id: "GPS",
      image: gap,
      price: "---",
      currency: "USD",
    },
    {
      name: "Walmart Inc (WMT)",
      id: "WMT",
      image: waltmart,
      price: "---",
      currency: "USD",
    },
    {
      name: "Visa Inc Class A (V)",
      id: "V",
      image: visa,
      price: "---",
      currency: "USD",
    },
  ];

  const cardHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    navigate(`/company/${currentTarget.id}`);
  };

  return (
    <section>
      <div className="title">
        Trade your favourite instruments from around the world
      </div>
      <div className="cards">
        {companies.map((company) => {
          return (
            <div
              className="card"
              key={company.id}
              onClick={cardHandler}
              id={company.id}
            >
              <img
                src={company.image}
                alt="companyImage"
                className="cardImage"
              />
              <p className="card-title">{company.name}</p>
              <p className="card-price" id={company.id + company.id}>
                {company.price}
              </p>
              <p className="card-currency"> {company.currency}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;
