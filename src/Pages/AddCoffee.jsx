import React from "react";
import bgImage from "../assets/images/more/11.png";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    // const chef = form.chef.value;
    // const supplier = form.supplier.value;
    // const taste = form.taste.value;
    // const category = form.category.value;
    // const photo = form.photo.value;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    // console.log(coffeeData);

    fetch(`http://localhost:5000/coffees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after post", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Data added Successfully!",
            icon: "success",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section
      style={{ background: `url(${bgImage})`, backgroundPosition: "center" }}
      className=""
    >
      <div className="w-7xl max-w-4/5 mx-auto bg-gray-200 mt-24 ">
        <div className=" text-center pt-12 px-8 md:px-28 flex flex-col gap-6">
          <h1 className="text-4xl font-bold ">Add New Coffee</h1>
          <p className="font-light text-gray-600">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleAddCoffee} action="" className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Coffee Name"
                name="name"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Quantity"
                name="quantity"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee supplier"
                name="supplier"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Price</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Price"
                name="price"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Category</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee category"
                name="category"
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Details</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee details"
                name="details"
              />
            </fieldset>
          </div>
          {/* photo */}
          <fieldset className="fieldset rounded-box p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter photo url"
              name="photo"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box p-4">
            <input
              type="submit"
              value="Add Coffee"
              className="btn w-full bg-primary text-secondary font-bold"
            />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default AddCoffee;
