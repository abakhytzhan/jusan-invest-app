import { KEY } from "../api/apiKey";

export const getCompanyDataHours = async (ticker: string) => {
  try {
    const response = await fetch(
      `https://api.polygon.io/v1/indicators/sma/${ticker}?timespan=hour&adjusted=true&window=50&series_type=close&order=desc&limit=24&apiKey=${KEY}`
    );
    if (!response.ok) {
      console.log("error");
    } else {
      const data = await response.json();

      let dataChart = data.results.values;
      for (let elem of dataChart) {
        let hour = new Date(elem.timestamp).getHours() + ":00";
        elem.timestamp = hour;
        elem.value = elem.value.toFixed(2);
      }

      let dataChartReversed = dataChart.reverse();

      return dataChartReversed;
    }
  } catch (err) {
    console.log(err);
  }
};
