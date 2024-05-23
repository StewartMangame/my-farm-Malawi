import { createBrowserRouter } from "react-router-dom";
import Home from "./components/homepage/home.js";
import Cooperatives from "./components/cooperatives/cooperative.js";  
import Cooperativeform from "./components/cooperatives/cooperativeform"
import Loans from "./components/loans/loans.js";
import Loanshome from "./components/loans/loanshome.js"
import Login from "./components/login/login.js"
import Register from "./components/login/login.js"


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