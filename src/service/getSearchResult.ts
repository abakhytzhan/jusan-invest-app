import { KEY } from "../api/apiKey";

export const getSearchResult = async (searchValue: string) => {
  try {
    const response = await fetch(
      `https://api.polygon.io/v3/reference/tickers?search=${searchValue}&apiKey=${KEY}`
    );
    if (!response.ok) {
      console.log("error");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
