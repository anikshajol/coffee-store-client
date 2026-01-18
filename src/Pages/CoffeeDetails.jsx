import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, details, price, category, photo } =
    coffee;
  return (
    <div className="card w-9/12 mx-auto card-side bg-base-100 shadow-sm">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Price: {price}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
