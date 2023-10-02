import { createBrowserRouter } from "react-router-dom";
import { Index } from "../page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);
