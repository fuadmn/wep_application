import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from './components/NotFound';
import Contact from './pages/Contact';

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
            }
        ]
    }
])

export default router;