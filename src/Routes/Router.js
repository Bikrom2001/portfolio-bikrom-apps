import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import Blogs from "../components/Blogs";
import CarsDeatils from "../components/CarsDeatils";
import ContactMe from "../components/ContactMe";
import CoursesDetails from "../components/CoursesDetails";
import DoctorsDetails from "../components/DoctorsDetails";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Main from "../Layout/Main";
import Works from "../components/Works/Works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/cardDeatils",
        element: <CarsDeatils></CarsDeatils>,
      },
      {
        path: "/DoctorsDeatils",
        element: <DoctorsDetails></DoctorsDetails>,
      },
      {
        path: "/coursesDeatils",
        element: <CoursesDetails></CoursesDetails>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/contact",
        element: <ContactMe></ContactMe>,
      },
      {
        path: "/works",
        element: <Works></Works>,
      },
    ],
  },
]);

export default router;
