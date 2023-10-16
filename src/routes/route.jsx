import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Home } from "../page/Home";
import { AuthLayouts } from "../layouts/AuthLayout";
import { SignUp, action as ActionSignup } from "../page/Signup";
import { action as ActionLogin, Login } from "../page/Login";
import { Community } from "../page/CommunityPage";
import { Adoption } from "../page/Adoption";
import { PetDetail, loader as loaderPet } from "../page/PetDetail";

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
      {
        path: "adoption",
        element: <Adoption />,
      },
      {
        path: "adoption/:id",
        element: <PetDetail />,
        loader: loaderPet,
      },
      {
        path: "profile",
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
        action: ActionSignup,
      },
      {
        path: "login",
        element: <Login />,
        action: ActionLogin,
      },
    ],
  },
]);
