import { createBrowserRouter } from 'react-router-dom';
import Consultation from "./components/consultation/consultation.js"
import Home from "./components/homepage/home.js"
import ConsultationPage from './components/consultation/bookingForm.js';

const router = createBrowserRouter([
{
    path:"/",
    element: <Home/>
},
{
    path:"/consultation",
    element:<Consultation/>
},
{
    path:"/booking",
    element:<ConsultationPage/>
}

]);

export default router; 