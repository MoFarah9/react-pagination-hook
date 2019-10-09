import React, { useState, useEffect } from "react";
import PaginatedList from "./components/PaginatedList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.error(error));
  }, []);

  // get inital page and itmes-per-page values from url query string
  const searchTokens = window.location.search.slice(1).split(/[&=]/);
  const initPage =
    parseInt(searchTokens[searchTokens.indexOf("page") + 1]) || 1;
  const initItemPerPage =
    parseInt(searchTokens[searchTokens.indexOf("items-per-page") + 1]) || 5;

  return (
    <div className="container">
      <PaginatedList
        items={items}
        initPage={initPage}
        initItemPerPage={initItemPerPage}
      />
    </div>
  );
}

export default App;
