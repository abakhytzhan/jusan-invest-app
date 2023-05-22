import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyData } from "../../service/getCompanyData";
import { getCompanyDataHours } from "../../service/getCompanyDataHours";
import { getCompanyDataMinutes } from "../../service/getCompanyDataMinutes";
import Chart from "../chart/chart";
import CompanyOverview from "../companyOverview/companyOverview";
import "./companyDetails.css";

const CompanyDetails = () => {
  const [data, setData] = useState([{ day: "", price: 0 }]);
  const [data2, setData2] = useState([{ day: "", price: 0 }]);
  const [data3, setData3] = useState([{ day: "", price: 0 }]);
  const [data4, setData4] = useState([{ day: "", price: 0 }]);
  const [data5, setData5] = useState([{ day: "", price: 0 }]);
  const [data6, setData6] = useState([{ day: "", price: 0 }]);
  const [data7, setData7] = useState([{ day: "", price: 0 }]);

  const { string } = useParams();
  useEffect(() => {
    if (string) {
      getCompanyData(string)
        .then((data) => {
          if (data) {
            setData(() => data.slice(-7));
            setData2(() => data.slice(-23));
            setData3(() => data.slice(-131));
            setData4(() => data.slice(-262));
            setData5(() => data);
          }
        })
        .catch((err) => console.log(err));

      getCompanyDataHours(string)
        .then((data) => {
          setData6(() => data);
        })
        .catch((err) => console.log(err));

      getCompanyDataMinutes(string)
        .then((data) => {
          setData7(() => data);
        })
        .catch((err) => console.log(err));
    }
  }, [string]);

  return (
    <section className="companyInfo">
      <h2 className="title">Company Overview</h2>
      <CompanyOverview />

      <h3 className="chartTitle">Chart for the last hour</h3>
      <Chart data={data7} />
      <h3 className="chartTitle">Chart for the last day</h3>
      <Chart data={data6} />
      <h3 className="chartTitle">Chart for the last 7 days</h3>
      <Chart data={data} />
      <h3 className="chartTitle">Chart for the last month</h3>
      <Chart data={data2} />
      <h3 className="chartTitle">Chart for the last 6 month</h3>
      <Chart data={data3} />
      <h3 className="chartTitle">Chart for the last year</h3>
      <Chart data={data4} />
      <h3 className="chartTitle">Chart for the entire period</h3>
      <Chart data={data5} />
    </section>
  );
};

export default CompanyDetails;
