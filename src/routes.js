import { createBrowserRouter } from "react-router-dom";
import Home from "./components/homepage/home.js";
import Markets from "./components/markets/markets.js";
import Admarc from "./components/markets/admarcproducts.js";
import EtgProducts from "./components/markets/etgproducts.js";
import Farmersworld from "./components/markets/farmersworld.js";
import Pricedetails from "./components/markets/pricedetails.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/markets",
    element: <Markets />,
  },
  {
    path: "/admarc",
    element: <Admarc />,
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
    element: <Pricedetails />,
  },
]);

export default router;
