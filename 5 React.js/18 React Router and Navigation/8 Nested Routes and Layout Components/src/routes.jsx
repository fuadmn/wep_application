 import { createBrowserRouter } from "react-router";
import App from "./App";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";


const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        children:[
            {
               path: "dashboard",
               element: (
                  <ProtectedRoute element={<Dashboard/>}/>
               )
            },
            {
               path: "login",
               element: <Login/>
            },
        ]
    }
])

export default router;