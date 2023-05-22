import { KEY } from "../api/apiKey";

export const getCompanyDetails = async (searchValue: string | null) => {
  try {
    const response = await fetch(
      `https://api.polygon.io/v2/aggs/ticker/${searchValue}/prev?adjusted=true&apiKey=${KEY}`
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
