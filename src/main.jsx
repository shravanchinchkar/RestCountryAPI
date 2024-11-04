import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CountryInformation from "./components/CountryInformation.jsx";
import { countryContext } from "./context/context.js";
import "./index.css";

const Main = () => {
  const [displayDropDown, setdisplayDropDown] = useState("none");
  const [countryName, setcountryName] = useState("hello");
  const [continentName, setcontinentName] = useState("");
  const [searchCountry, setsearchCountry] = useState("");
  const [themeToggle, setthemeToggle] = useState("off")
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/information",
      element: <CountryInformation />,
    },
  ]);

  return (
    <countryContext.Provider
      value={{
        displayDropDown,
        setdisplayDropDown,
        countryName,
        setcountryName,
        continentName,
        setcontinentName,
        searchCountry,
        setsearchCountry,
        themeToggle,
        setthemeToggle
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      {/* <App/> */}
    </countryContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // Get the root element
root.render(<Main />); // Render the Main component
