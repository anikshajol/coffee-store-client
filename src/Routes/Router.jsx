import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails";
import ErrorPage from "../Pages/ErrorPage";
import Loading from "../Components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:5000/coffees"),
        Component: Home,
        hydrateFallbackElement: <Loading />,
      },
      { path: "add-coffee", Component: AddCoffee },
      {
        path: "update-coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: UpdateCoffee,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "coffees/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: CoffeeDetails,
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
