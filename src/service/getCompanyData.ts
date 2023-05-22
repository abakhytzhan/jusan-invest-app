import { KEY } from "../api/apiKey";

export const getCompanyData = async (ticker: string) => {
  try {
    const response = await fetch(
      `https://api.polygon.io/v1/indicators/sma/${ticker}?timespan=day&adjusted=true&window=50&series_type=close&order=desc&limit=455&apiKey=${KEY}`
    );
    if (!response.ok) {
      console.log("error");
    } else {
      const data = await response.json();
      let dataChart = data.results.values;
      for (let elem of dataChart) {
        let day = new Date(elem.timestamp).toLocaleDateString();
        elem.timestamp = day;
        elem.value = elem.value.toFixed(2);
      }
      let dataChartReversed = dataChart.reverse();
      return dataChartReversed;
    }
  } catch (err) {
    console.log(err);
  }
};
