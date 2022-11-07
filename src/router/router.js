import About from "../components/About/About";
import HomePage from "../components/HomePage/HomePage";
import Register from "../components/Register/Register";
import SignIn from "../components/SignIn/SignIn";
import DefaultPage from "../layout/DefaultPage/DefaultPage";
import Shop from "../Shop/Shop";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path : '/',
        element : <DefaultPage></DefaultPage>,
        children : [
            {
                path : '/',
                element : <HomePage></HomePage>
            },{
                path : '/shop',
                element : <Shop></Shop>
            },{
                path : '/login',
                element : <SignIn></SignIn>
            },{
                path : '/register',
                element : <Register></Register>
            },{
                path : '/about',
                element : <About></About>
            }
        ]
    }
])

export default router;