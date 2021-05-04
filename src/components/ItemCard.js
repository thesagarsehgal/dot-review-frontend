import React from "react";
import "./itemCard.css";

export default function ItemCard({ title, image, description, id }) {
  return (
    <div className="card itemCard" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
