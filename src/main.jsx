import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryInformation from "./components/CountryInformation.jsx";
import { countryContext } from "./context/context.js";

const Main = () => {
  const [displayDropDown, setdisplayDropDown] = useState("none");
  const [countryName, setcountryName] = useState("hello");
  const [continentName, setcontinentName] = useState("");
  const [searchCountry, setsearchCountry] = useState("")

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
    // <StrictMode>
    <countryContext.Provider
      value={{
        displayDropDown,
        setdisplayDropDown,
        countryName,
        setcountryName,
        continentName,
        setcontinentName,
        searchCountry,
        setsearchCountry
      }}
    >
      <RouterProvider router={router} />
      {/* <App/> */}
    </countryContext.Provider>
    // </StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); // Get the root element
root.render(<Main />); // Render the Main component

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/information",
//     element: <CountryInformation />,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//     {/* <App />  */}
//   </StrictMode>
// );
