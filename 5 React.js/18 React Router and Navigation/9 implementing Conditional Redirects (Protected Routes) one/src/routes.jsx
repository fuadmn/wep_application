 import { createBrowserRouter } from "react-router";
import App from "./App";
import Login from "./Login";
import Dashboard from "./Dashboard";

const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children:[
           {
            path: "dashboard",
            element: <Dashboard/>
           },
           {
            path: "login",
            element: <Login/>
           },
        ]
    }
])

export default router;