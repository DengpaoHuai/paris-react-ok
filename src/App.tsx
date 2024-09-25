import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import BandContextProvider from "./contexts/BandContextProvider";

function App() {
  return (
    <>
      <BandContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </BandContextProvider>
    </>
  );
}

export default App;
