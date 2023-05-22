import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { KEY } from "../../api/apiKey";
import { getCompanyOverviewData } from "../../service/getCompanyOverviewData";
import "./companyOverview.css";

const CompanyOverview = () => {
  const divImage = useRef<HTMLDivElement>(null);
  const [list, setList] = useState({
    name: "",
    description: "",
    ticker: "",
    primary_exchange: "",
    market: "",
    locale: "",
    total_employees: 0,
  });

  const { string } = useParams();

  useEffect(() => {
    if (string) {
      getCompanyOverviewData(string).then((data) => {
        const url = data?.results?.branding?.logo_url;
        const img = document.createElement("img");
        if (url) {
          img.src = `${url}?apiKey=${KEY}`;
          if (divImage.current) {
            divImage.current.innerHTML = "";
            img.alt = "company logo";
            divImage.current.append(img);
          }
        } else {
          if (divImage.current) {
            divImage.current.innerHTML = "{ NO LOGO AVAILABLE }";
          }
        }

        let obj = {
          name: data?.results?.name,
          description: data?.results?.description,
          ticker: data?.results?.ticker,
          primary_exchange: data?.results?.primary_exchange,
          market: data?.results?.market,
          locale: data?.results?.locale,
          total_employees: data?.results?.total_employees,
        };
        setList(() => obj);
      });
    }
  }, [string]);

  return (
    <>
      <div className="companyImage" ref={divImage}></div>
      <div className="table">
        <div>Name</div>
        <div>{list.name}</div>

        <div>Description</div>
        <div>{list.description}</div>

        <div>Ticker</div>
        <div>{list.ticker}</div>

        <div>Primary_exchange</div>
        <div>{list.primary_exchange}</div>

        <div>Market</div>
        <div>{list.market}</div>

        <div>Locale</div>
        <div>{list.locale}</div>

        <div>Total_employees</div>
        <div>{list.total_employees}</div>
      </div>
    </>
  );
};

export default CompanyOverview;
