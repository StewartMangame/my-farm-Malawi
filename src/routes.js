import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
]);

export default router;