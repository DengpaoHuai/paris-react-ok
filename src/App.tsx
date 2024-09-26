import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import BandContextProvider from "./contexts/BandContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { store } from "./store/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BandContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </BandContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
