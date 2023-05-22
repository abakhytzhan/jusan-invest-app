import { KEY } from "../api/apiKey";

export const getCompanyDataMinutes = async (ticker: string) => {
  try {
    const response = await fetch(
      `https://api.polygon.io/v1/indicators/sma/${ticker}?timespan=minute&adjusted=true&window=50&series_type=close&order=desc&limit=60&apiKey=${KEY}`
    );
    if (!response.ok) {
      console.log("error");
    } else {
      const data = await response.json();

      let dataChart = data.results.values;
      for (let elem of dataChart) {
        let minute = new Date(elem.timestamp).getMinutes() + ":00";
        elem.timestamp = minute;
        elem.value = elem.value.toFixed(2);
      }

      let dataChartReversed = dataChart.reverse();

      return dataChartReversed;
    }
  } catch (err) {
    console.log(err);
  }
};
