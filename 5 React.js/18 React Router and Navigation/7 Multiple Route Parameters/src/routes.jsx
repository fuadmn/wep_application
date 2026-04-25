import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from './components/NotFound'
import Contact from './pages/Contact'
import UsersList from "./pages/UsersList";
import UserProfile from "./pages/UserProfile";
import ProductDetails from "./pages/ProductDetails";

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
            },
            {
                path: "products/:categoryId",
                element: <ProductDetails />
            },
            {
                path: "products/:categoryId/:productId",
                element: <ProductDetails />
            }
        ]
    }
])

export default router;