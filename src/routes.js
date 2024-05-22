import { createBrowserRouter } from "react-router-dom";
import Home from "./components/homepage/home";
import Loanshome from "./components/loans/loanshome";
import Loans from "./components/loans/loans";


const router=createBrowserRouter([
    {
        path:"/",
        element:<Home />


},
{
    path:"/loanshome",
    element:<Loanshome />
},
{
path:"/loans",
element:<Loans/>

}])
export default router;