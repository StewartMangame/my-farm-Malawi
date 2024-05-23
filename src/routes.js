import { createBrowserRouter } from "react-router-dom";
import Home from "./components/homepage/home.js";
import Cooperatives from "./components/cooperatives/cooperative.js";
import Cooperativeform from "./components/cooperatives/cooperativeform";
import Loans from "./components/loans/loans";
import Loanshome from "./components/loans/loanshome";
import Admarc from "./components/markets/admarcproducts.js";
import EtgProducts from "./components/markets/etgproducts.js";
import Farmersworld from "./components/markets/farmersworld.js";
import Productdetails from "./components/markets/pricedetails.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cooperatives",
    element: <Cooperatives />,
  },
  {
    path: "/cooperativeform",
    element: <Cooperativeform />,
  },
  {
    path: "/admarc",
    element: <Admarc />,
  },

  // const router = createBrowserRouter([
  //     {
  //         path:"/",
  //         element:<Home />

  {
    path: "/loans",
    element: <Loans />,
  },
  {
    path: "/loanshome",
    element: <Loanshome />,
  },
  {
    path: "/etgproducts",
    element: <EtgProducts />,
  },
  {
    path: "/farmersworld",
    element: <Farmersworld />,
  },
  {
    path: "/pricedetails",
    element: <Productdetails />,
  },
  //    {
  //         path: '/login',
  //         element: <Login/>
  //     },
  //     {
  //         path: '/register',
  //         element: <Register/>
]);

export default router;
