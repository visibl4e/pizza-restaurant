import { Navigate, createBrowserRouter } from "react-router-dom";
import { Terms } from "./components/footerComponents/Terms";
import { Policy } from "./components/footerComponents/Policy";
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
import { Contacts } from "./pages/contactsComponents/Contacts";
import { Signup } from "./authentification/signUp";
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
          { path: "blog", element: <Blog /> },
          { path: "contacts", element: <Contacts /> },
          { path: "shop", element: <Shop /> },
        ],
      },

      {
        children: [
          { path: "terms", element: <Terms /> },
          { path: "policy", element: <Policy /> },
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
