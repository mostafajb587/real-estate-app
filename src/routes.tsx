import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import PricingPage from "./pages/PricingPage";
import Contactpage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import AuthPage from "./pages/AuthPage";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Layout></Layout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "about", element: <AboutPage></AboutPage> },
      { path: "services", element: <ServicesPage></ServicesPage> },
      { path: "blog", element: <BlogPage></BlogPage> },
      { path: "pricing", element: <PricingPage></PricingPage> },
      { path: "contact", element: <Contactpage></Contactpage> },
      { path: "signin", element: <AuthPage></AuthPage> },
      { path: "details", element: <DetailPage></DetailPage> },
    ],
  },
]);
export default router;
