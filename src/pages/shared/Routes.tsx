import { RouteObject, useRoutes } from "react-router-dom";
import { MasterLayout } from "./components";
import HomePage from "../home/HomePage";
import SearchCategoryPage from "../home/SearchCategoryPage";

export const ROUTE_PATHS = {
  root: "/",
  search: "/search",
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTE_PATHS.search,
        element: <SearchCategoryPage />,
      },
    ],
  },
];

const Routes = () => {
  return useRoutes(routes);
};

export default Routes;
