import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
