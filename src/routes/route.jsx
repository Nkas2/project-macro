import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Home } from "../page/Home";
import { AuthLayouts } from "../layouts/AuthLayout";
import { SignUp } from "../page/Signup";
import { Login } from "../page/Login";
import { Community } from "../page/CommunityPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "community",
        element: <Community />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayouts />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
