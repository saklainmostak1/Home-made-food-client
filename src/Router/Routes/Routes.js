import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import ServiceAllDescription from "../../Pages/ServiceAllDescription/ServiceAllDescription";
import Services from "../../Pages/Services/Services";
import ServicesAdd from "../../Pages/ServicesAdd/ServicesAdd";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


 export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/foodAdd',
                element: <PrivateRoutes><ServicesAdd></ServicesAdd></PrivateRoutes>,
                loader: () => fetch('https://home-made-food-server-saklainmostak1.vercel.app/allFoods')
            },
            {
                path: '/review',
                element: <PrivateRoutes><Review></Review></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({params}) => fetch(`https://home-made-food-server-saklainmostak1.vercel.app/allReviews/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <ServiceAllDescription></ServiceAllDescription>,
                loader: ({params}) => fetch(`https://home-made-food-server-saklainmostak1.vercel.app/foods/${params.id}`)
            },
            {
                path: '*',
                element: <div>Not Found!!!</div>
            },
        ]
    }

])