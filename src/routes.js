import { createBrowserRouter } from "react-router-dom";
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