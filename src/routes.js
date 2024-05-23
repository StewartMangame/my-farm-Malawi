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
import Consultation from "./components/consultation/consultation.js"
import ConsultationPage from './components/consultation/bookingForm.js';
import Markets from "./components/markets/markets.js";
import SubsidyApplication from "./components/subsidy-application/subsidyApplicationForm.js";
import Login from "./components/login/login.js";
import Register from "./components/register/register.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cooperatives",
    element: <Cooperatives/>,
  },
  {
    path: "/cooperativeform",
    element: <Cooperativeform/>,
  },
  {
    path: "/admarc",
    element: <Admarc />,
  },
  {
    path: "/markets",
    element: <Markets />,
  },

  {
    path: "/consultation",
    element: <Consultation/>,
  },
  {
    path: "/booking",
    element: <ConsultationPage />,
  },

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
  {
    path: "/subsidy-application",
    element: <SubsidyApplication/>,
  },
  //    {
  //         path: '/login',
  //         element: <Login/>
  //     },
  //     {
  //         path: '/register',
  //         element: <Register/>
  //    {
  //
]);



export default router;
