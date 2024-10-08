import { createBrowserRouter, redirect } from "react-router-dom";
import PlanetList from "../pages/PlanetList";
import DemoScreen from "../pages/DemoScreen";
import PlanetList1 from "../pages/PlanetList-useFetch";
import CreateBandScreen from "../pages/CreateBandScreen";
import BandListScreen from "../pages/BandsListScreen";
import PlanetListRefacto from "../pages/PlanetListRefacto";
import PlanetListQuery from "../pages/PlanetListQuery";
import { Suspense } from "react";
import UpdateBandScreen from "../pages/UpdateBandScreen";
import { getBandById } from "../service/band.service";
import { queryClient } from "../App";

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
  {
    path: "/bands",
    element: <BandListScreen></BandListScreen>,
  },
  {
    loader: async () => {
      const response = await fetch("https://swapi.dev/api/planets");
      const data = await response.json();
      redirect("/refacto");
      return data.results;
    },
    path: "/refacto",
    element: <PlanetListRefacto></PlanetListRefacto>,
  },
  {
    path: "/query/:id",
    element: (
      <Suspense fallback={<p>chargement...</p>}>
        <PlanetListQuery></PlanetListQuery>
      </Suspense>
    ),
  },
  /* {
    loader: async ({ params }) => {
      const id = params.id;
      if (!id) return redirect("/bands");
      const data = await getBandById(id);
      return data;
    },
    path: "/update-band/:id",
    element: <UpdateBandScreen></UpdateBandScreen>,
  },*/
  {
    loader: async ({ params }) => {
      const id = params.id;
      if (!id) return redirect("/bands");

      await queryClient.prefetchQuery({
        queryKey: ["band", id],
        queryFn: () => getBandById(id),
      });
      return true;
    },
    path: "/update-band/:id",
    element: <UpdateBandScreen></UpdateBandScreen>,
  },
]);

export default router;
