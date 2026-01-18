import React, { useState } from "react";
import { useLoaderData } from "react-router";
import HomeCard from "../Components/HomeCard";

const Home = () => {
  const initialCoffeeData = useLoaderData();
  // console.log(coffees);
  const [coffees, setCoffees] = useState(initialCoffeeData);
  // console.log(coffees);

  return (
    <div className="w-7xl max-w-11/12 mx-auto">
      <h2>{coffees.length}</h2>
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
