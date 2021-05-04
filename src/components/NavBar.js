import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar({searchProducts}) {
  const [searchQuery, setsearchQuery] = useState("");

  const search = (e) => {
    e.preventDefault();
    searchProducts(searchQuery)
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <form className="d-flex" onSubmit={(e) => search(e)}>
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
