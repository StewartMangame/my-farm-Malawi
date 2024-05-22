import { createBrowserRouter } from "react-router-dom";
import Home from "./components/homepage/home";
import Markets from "./components/markets/markets";
import Consultation from "./components/consultation/consultation";
import Cooperatives from "./components/cooperatives/cooperative";
import SubsidyApplication from "./components/subsidy-application/subsidyApplicationForm";
import Loans from "./components/loans/loans";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/loans",
        element: <Loans/>
    },
    {
        path:"/markets",
        element: <Markets/>
    },
    {
        path:"/consultation",
        element: <Consultation/>
    },
    {
        path:"/cooperatives",
        element: <Cooperatives/>
    },
    {
        path:"/subsidy-application",
        element: <SubsidyApplication/>
    },
]);

export default router;