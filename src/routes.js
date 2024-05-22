import { createBrowserRouter } from 'react-router-dom';
import ConsultationPage from "./components/consultation/bookingForm.js"
import LandingPage from "./components/consultation/consultation.js";
import Home from "./components/homepage/home.js"

const router = createBrowserRouter([
{
    path:"/",
    element: <Home/>
},
{
    path:"/booking",
    element:<ConsultationPage/>
},
{
    path:"/landingpange",
    element:<LandingPage/>
}
]);

export default router; 