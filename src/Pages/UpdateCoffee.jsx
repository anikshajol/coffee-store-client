import React from "react";
import bgImage from "../assets/images/more/11.png";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";
const UpdateCoffee = () => {
  const { _id, name, quantity, supplier, price, category, details } =
    useLoaderData();

  // update function
  const handleUpdateCoffee = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);
    const imageFile = formData.get("photo");

    console.log(imageFile);
    let imgUrl = "";
    try {
      if (imageFile && imageFile.name) {
        const imageData = new FormData();
        imageData.append("image", imageFile);

        const imgRes = await fetch(
          `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMAGE_KEY}`,
          {
            method: "POST",
            body: imageData,
          },
        );
        const data = await imgRes.json();
        console.log(data);
        if (data.success) {
          imgUrl = data.data.display_url;
        }
      }

      if (imgUrl) {
        coffeeData.photo = imgUrl;
      } else {
        delete coffeeData.photo;
      }

      const res = await fetch(`http://localhost:5000/coffees/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coffeeData),
      });
      const result = await res.json();
      console.log(result);
      if (result.modifiedCount > 0) {
        Swal.fire({
          title: "Good job!",
          text: "Data Updated successfully",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      style={{ background: `url(${bgImage})`, backgroundPosition: "center" }}
      className=""
    >
      <div className="w-7xl max-w-4/5 mx-auto bg-gray-200 mt-24 ">
        <div className=" text-center pt-12 px-8 md:px-28 flex flex-col gap-6">
          <h1 className="text-4xl font-bold ">Update Existing Coffee</h1>
          <p className="font-light text-gray-600">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form
          onSubmit={handleUpdateCoffee}
          action=""
          className="w-11/12 mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Coffee Name"
                name="name"
                defaultValue={name}
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Quantity"
                name="quantity"
                defaultValue={quantity}
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee supplier"
                name="supplier"
                defaultValue={supplier}
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Price</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Price"
                name="price"
                defaultValue={price}
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Category</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee category"
                name="category"
                defaultValue={category}
              />
            </fieldset>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Details</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee details"
                name="details"
                defaultValue={details}
              />
            </fieldset>
          </div>
          {/* photo */}
          <fieldset className="fieldset rounded-box p-4">
            <label className="label">Photo</label>
            <input type="file" name="photo" className="file-input" />
          </fieldset>
          <fieldset className="fieldset rounded-box p-4">
            <input
              type="submit"
              value="Update Coffee"
              className="btn w-full bg-primary text-secondary font-bold"
            />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default UpdateCoffee;
