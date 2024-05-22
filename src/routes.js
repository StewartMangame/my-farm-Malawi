import { createBrowserRouter } from "react-router-dom";
import Home from "./components/homepage/home";
import SubsidyApplication from "./components/subsidy-application/subsidyApplicationForm";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/subsidyApplicationForm',
        element: <SubsidyApplication/>
    }
]);
export default router;