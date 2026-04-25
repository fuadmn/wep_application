import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from './components/NotFound'
import Contact from './pages/Contact'
import UsersList from "./pages/UsersList";
import UserProfile from "./pages/UserProfile";

const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
              path: "contact",
              element: <Contact/>
            },
            {
                path: "users",
                element: <UsersList/>
            },
            {
              path: "users/:userId",
              element: <UserProfile/>
            }
        ]
    }
])

export default router;