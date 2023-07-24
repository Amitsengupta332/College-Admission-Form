import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import Main from "../Main/Main";
import College from "../components/College/College";
import Login from "../components/LoginLayout/Login/Login";
import Signup from "../components/LoginLayout/Signup/Signup";
import CollegeDetails from "../Pages/Colleges/CollegeDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'colleges',
        element: <Colleges></Colleges>
      },
      {
        path: '/admission',
        element: <PrivateRoutes><Admission></Admission></PrivateRoutes>
      },
      {
        path: '/college',
        element: <College></College>
      },
      {
        path: '/CollegeDetails/:id',
        element: <PrivateRoutes><CollegeDetails></CollegeDetails></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }
    ]
  },
]);