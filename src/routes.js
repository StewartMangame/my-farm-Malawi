import { createBrowserRouter } from "react-router-dom";
import Home from "./components/homepage/home.js";
import Cooperatives from "./components/cooperatives/cooperative.js";  
import Cooperativeform from "./components/cooperatives/cooperativeform"

const router = createBrowserRouter([

    {
        path:"/",
        element: <Home/> 
    },
    {
        path:"/cooperatives",
        element:<Cooperatives/>
    },
    {
        path:"/cooperativeform",
        element: <Cooperativeform/>
    }

]); 

import Home from "./components/homepage/home";
import Loans from "./components/loans/loans";
import Loanshome from "./components/loans/loanshome";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home />


},
{
    path:"/loans",
    element:<Loans />
},
{
path:"/loanshome",
element:<Loanshome/>

},
   {
        path: '/',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },])


export default router;