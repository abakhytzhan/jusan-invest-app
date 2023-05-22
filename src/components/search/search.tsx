import "./search.css";
import { ChangeEvent, useRef } from "react";
import { getSearchResult } from "../../service/getSearchResult";
import { useNavigate } from "react-router-dom";

const Search = ({ changeModal }: any) => {
  const navigate = useNavigate();
  const searchButton = useRef<HTMLButtonElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);
  const tbodyEl = useRef<HTMLTableSectionElement>(null);

  const overlayHandler = () => {
    if (inputEl.current) inputEl.current.value = "";
    searchButton?.current?.classList.remove("activeBtn");
    changeModal();
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length !== 0) {
      searchButton?.current?.classList.add("activeBtn");
    } else {
      searchButton?.current?.classList.remove("activeBtn");
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      searchHandler();
    }
  };

  const resetHandler = () => {
    if (inputEl.current) inputEl.current.value = "";
    searchButton?.current?.classList.remove("activeBtn");
    if (tbodyEl.current) tbodyEl.current.innerHTML = "";
  };

  const searchHandler = () => {
    if (inputEl.current) {
      const searchValue = inputEl.current.value;
      if (searchValue) {
        getSearchResult(searchValue)
          .then((data) => {
            createTable(data.results);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const createTable = (
    dataArray: {
      ticker: string;
      name: string;
      market: string;
      locale: string;
    }[]
  ) => {
    if (tbodyEl.current) tbodyEl.current.innerHTML = "";

    for (let i = 0; i < dataArray.length; i++) {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");

      td1.innerHTML = dataArray[i].ticker;
      td2.innerHTML = dataArray[i].name;
      td3.innerHTML = dataArray[i].market;
      td4.innerHTML = dataArray[i].locale;
      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      tr.append(td4);
      tr.setAttribute("ticker", dataArray[i].ticker);

      tr.onclick = () => {
        const companyTicker = tr.getAttribute("ticker");
        navigate(`/company/${companyTicker}`);
      };

      if (tbodyEl.current) tbodyEl.current.append(tr);
    }
  };

  return (
    <>
      <div className="search-modal">
        <input
          ref={inputEl}
          type="text"
          placeholder="Type to search"
          className="search-input"
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
        />
        <button
          className="search-button"
          onClick={searchHandler}
          ref={searchButton}
        >
          Search
        </button>
        <div className="companies">
          <table className="companiesTable">
            <thead>
              <tr>
                <th className="col-1">ticker</th>
                <th>name</th>
                <th className="col-3">market</th>
                <th className="col-4">locale</th>
              </tr>
            </thead>
            <tbody className="tableBody" ref={tbodyEl}></tbody>
          </table>
        </div>

        <button className="search-reset" onClick={resetHandler}>
          Reset
        </button>
      </div>
      <div className="overlay" onClick={overlayHandler}></div>
    </>
  );
};

export default Search;
