import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import HomeCard from "../Components/HomeCard";
import { FaArrowCircleRight } from "react-icons/fa";

const Home = () => {
  const initialCoffeeData = useLoaderData();
  // console.log(coffees);
  const [coffees, setCoffees] = useState(initialCoffeeData);
  // console.log(coffees);

  return (
    <div className="w-7xl max-w-11/12 mx-auto">
      <h2>{coffees.length}</h2>
      <Link
        to={"/add-coffee"}
        className="btn text-secondary btn-outline btn-primary"
      >
        <FaArrowCircleRight size={20} /> Add Coffee
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {coffees.map((coffee) => (
          <HomeCard
            key={coffee._id}
            setCoffees={setCoffees}
            coffees={coffees}
            coffee={coffee}
          ></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
