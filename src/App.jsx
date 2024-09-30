import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contaxt";
import Like from "./pages/like/Like";
import Download from "./pages/download/Download";
import ImageInfo from "./pages/ImageInfo/ImageInfo";
// import { action as HomeActions } from "./pages/home/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          // action: HomeActions,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/likes",
          element: <Like />,
        },
        {
          path: "/download-images",
          element: <Download />,
        },
        {
          path: "/image-info",
          element: <ImageInfo />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
