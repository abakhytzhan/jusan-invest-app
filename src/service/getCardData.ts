import { KEY } from "../api/apiKey";

export const getCardData = async () => {
  const tickersList = [
    "TSLA",
    "TM",
    "AAPL",
    "EBAY",
    "AMZN",
    "HPQ",
    "DPZ",
    "GPS",
    "WMT",
    "V",
  ];

  let i = 0;

  const interval = setInterval(() => cardPrice(), 1000);

  const cardPrice = async () => {
    let searchValue = tickersList[i++];

    if (i > tickersList.length - 1) {
      clearInterval(interval);
    }

    try {
      const response = await fetch(
        `https://api.polygon.io/v2/aggs/ticker/${searchValue}/prev?adjusted=true&apiKey=${KEY}`
      );
      if (!response.ok) {
        console.log("error");
      } else {
        const data = await response.json();
        const companyPrice = document.querySelector(
          `#${searchValue}${searchValue}`
        );

        if (companyPrice) {
          companyPrice.innerHTML = data.results[0].c;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
};
