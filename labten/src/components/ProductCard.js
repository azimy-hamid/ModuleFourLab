import React from "react";

function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ height: "300px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title} </h5>
        <p className="card-text text-muted">${product.price}</p>
        <p className="card-text">{product.description.substring(0, 100)}...</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary btn-block">Buy Now</button>
        <span className="badge badge-secondary">{product.category}</span>
      </div>
    </div>
  );
}

export default ProductCard;
