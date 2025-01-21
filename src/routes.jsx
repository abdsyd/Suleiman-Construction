import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/Products/products";
import Members from "./pages/members/members";
import ContactUs from "./pages/contact_us/contact_us";
import Layout from "./layout";
import FAQs from "./pages/FAQs/FAQs";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/products', element: <Products /> },
        { path: '/members', element: <Members /> },
        { path: '/faqs', element: <FAQs /> },
        { path: '/contact', element: <ContactUs /> },
      ],
    },
  ]);
  