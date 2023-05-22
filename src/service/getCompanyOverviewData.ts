import { KEY } from "../api/apiKey";

export const getCompanyOverviewData = async (ticker: string) => {
  try {
    const response = await fetch(
      `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${KEY}`
    );
    if (!response.ok) {
      console.log("error");
    } else {
      const data = response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
