import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const HomeCard = ({ coffee, setCoffees }) => {
  //   console.log(Object.keys(coffee));
  const { _id, name, quantity, supplier, price, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setCoffees((prev) => prev.filter((item) => item._id !== _id));
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm">
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
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            X
          </button>
          <Link to={`/coffees/${_id}`} className="btn btn-primary">
            View
          </Link>
          <Link to={`/update-coffee/${_id}`} className="btn btn-primary">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
