import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchResult from "./components/SearchResult";

function App() {
  const [result, setresult] = useState([]);

  const [loading, setloading] = useState(true);

  const searchProducts = (query) => {
    setloading(true);
    fetch(
      "https://faskapi-dummy-backend.herokuapp.com/api/v1/search?query=" + query
    )
      .then((res) => res.json())
      .then(
        (res) => {
          setresult(res.data);
          setloading(false);
        },
        (err) => {
          setresult([]);
          setloading(false);
        }
      );
  };

  useEffect(() => {
    searchProducts("");
  }, []);

  return (
    <div>
      <NavBar searchProducts={searchProducts} />
      <SearchResult data={result} loading={loading} />
    </div>
  );
}

export default App;
