import { createBrowserRouter } from "react-router-dom";
import Home from "./components/homepage/home.js";
import Cooperatives from "./components/cooperatives/cooperative.js";  
import Cooperativeform from "./components/cooperatives/cooperativeform"

const router = createBrowserRouter([[

    {
        path:"/",
        element: <Home/> 
    },
    {
        path:"/cooperative",
        element:<Cooperatives/>
    },
    {
        path:"/cooperativeform",
        element: <Cooperativeform/>
    }

]]);

export default router;