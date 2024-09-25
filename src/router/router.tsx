import { createBrowserRouter } from "react-router-dom";
import PlanetList from "../pages/PlanetList";
import DemoScreen from "../pages/DemoScreen";
import PlanetList1 from "../pages/PlanetList-useFetch";
import CreateBandScreen from "../pages/CreateBandScreen";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetList></PlanetList>,
  },
  {
    path: "/demo",
    element: <DemoScreen></DemoScreen>,
  },
  {
    path: "/planets",
    element: <PlanetList1></PlanetList1>,
  },
  {
    path: "/create-band",
    element: <CreateBandScreen></CreateBandScreen>,
  },
]);

export default router;
