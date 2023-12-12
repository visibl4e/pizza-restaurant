import { Navigate, createBrowserRouter } from "react-router-dom";
import { Terms } from "./components/homeComponents/Terms";
import { Privacy } from "./components/homeComponents/Privacy";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/homeComponents/Home";
import { Shop } from "./pages/Shop";
import { Gallery } from "./components/galleryComponent/GalleryGrid";
import { About } from "./pages/About";
import { SignIn } from "./authentification/signIn";
import { ResetPassword } from "./authentification/ResetPassword";
// import { Gallery } from "./pages/Gallery";
// import { GetCardPizza } from "./components/galleryComponent/GalleryGrid";
// import { AuthProvider } from "./authentification/context/AuthContext";
import { Blog } from "./pages/Blog";
import { Post } from "./components/blogComponents/Post";
import { Contacts } from "./pages/contactsComponents/Contacts";
import { Signup } from "./authentification/signUp";
import { ArchivePage } from "./components/blogComponents/archives/archivePage";
import { AsideBlog } from "./components/blogComponents/AsideBlog";
import ShopCart from "./pages/shopComponents/ShopCart";
import { CardInfo } from "./pages/shopComponents/CardInfo";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        children: [
          { index: true, element: <Navigate to="/home" /> },
          {
            path: "home",
            element: <Home />,
          },

          {
            path: "about",
            element: <About />,
          },
          {
            path: "gallery",
            element: <Gallery />,
          },
          {
            path: "blog",
            children: [
              {
                index: true,
                element: <Blog />,
              },

              {
                path: ":id",
                element: <Post />,
              },
              {
                path: "archive/:archive",
                element: <ArchivePage />,
              },
            ],
          },

          { path: "contacts", element: <Contacts /> },
          {
            path: "shop",
            children: [
              { index: true, element: <Shop /> },

              {
                path: ":id",
                element: <CardInfo />,
              },
              { path: "cart", element: <ShopCart /> },
            ],
          },
          { path: "terms", element: <Terms /> },
          { path: "policy", element: <Privacy /> },
        ],
      },
    ],
  },
  {
    path: "signUp",
    element: <Signup />,
    children: [{ path: "signIn", element: <SignIn /> }],
  },
  {
    path: "signIn",
    element: <SignIn />,
    children: [{ path: "signUp", element: <Signup /> }],
  },
  { path: "resetPassword", element: <ResetPassword /> },
]);
