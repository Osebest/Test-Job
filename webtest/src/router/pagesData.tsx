import { routerType } from "./types";
import Dashboard from "../views/Dashboard";
import Home from "../views/Home";


const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    title: "dashboard"
  }
];

export default pagesData;