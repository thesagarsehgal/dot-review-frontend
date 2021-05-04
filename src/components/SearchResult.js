import React from "react";
import ItemCard from "./ItemCard";
import "./SearchResult.css";

export default function SearchResult({ data, loading }) {
  return (
    <div className="container searchResult">
      {loading ? (
        "Loading data !!"
      ) : (
        <>
          {data.length > 0 ? (
            data.map((item) => (
              <ItemCard
                title={item.name}
                image={item.image}
                description={item.description}
                id={item.id}
                key={item.id}
              />
            ))
          ) : (
            <div>No Results found !!</div>
          )}
        </>
      )}
    </div>
  );
}
