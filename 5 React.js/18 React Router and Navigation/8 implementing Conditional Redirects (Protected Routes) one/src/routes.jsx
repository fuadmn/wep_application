import { createBrowserRouter } from "react-router";
import App from "./App";
import Dashboard from "./Dashboard";
import Login from "./Login";

const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
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