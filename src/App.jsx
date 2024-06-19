// App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import WardContent from "./components/WardContent";
import "leaflet/dist/leaflet.css";
import Heatmap from "./components/Heatmap";

const App = () => {
  const [selectedWard, setSelectedWard] = useState("Ottawa");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wards = [
    "My Ward",
    "Orléans East-Cumberland",
    "Orléans West-Innes",
    "Barrhaven West",
    "Kanata North",
    "West Carleton-March",
    "Stittsville",
    "Bay",
    "College",
    "Knoxdale-Merivale",
    "Gloucester-Southgate",
    "Beacon Hill-Cyrville",
    "Rideau-Vanier",
    "Rideau-Rockcliffe",
    "Somerset",
    "Kitchissippi",
    "River",
    "Capital",
    "Alta Vista",
    "Orléans South-Navan",
    "Osgoode",
    "Rideau-Jock",
    "Riverside South-Findlay Creek",
    "Kanata South",
    "Barrhaven East",
    "Ottawa",
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectWard = (ward) => {
    setSelectedWard(ward);
    setDropdownOpen(false);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="flex flex-col items-center w-full h-screen overflow-y-auto bg-[#fffefc]">
      <Header
        selectedWard={selectedWard}
        toggleDropdown={toggleDropdown}
        dropdownOpen={dropdownOpen}
        wards={wards}
        selectWard={selectWard}
        closeDropdown={closeDropdown}
      />
      <div className="w-[40%] max-w-4xl p-2 mt-8">
        <WardContent selectedWard={selectedWard} selectWard={selectWard} />
        <br /> <br />
        <div className="text-[#052E41] text-sm font-light">
          <p>
            The current data is from the City of Ottawa and the Ottawa Police
            Service from 2005 to 2022.
            <br />
            <br />
            <a
              href="https://library.carleton.ca/find/gis/geospatial-data/ottawa-police-service-crime-data"
              className="text-cyan-600 underline"
            >
              Ottawa Crime Data
            </a>
            <br />
            <br />
            <a
              href="https://www.ottawapolice.ca/en/annual-report/resources/Crime_Stats/Ward_Stats_ALL.pdf"
              className="text-cyan-600 underline"
            >
              Individual Ward Analysis
            </a>
            <br />
            <br />
            <a
              href="https://data.ottawapolice.ca"
              className="text-cyan-600 underline"
            >
              Policing and Ward Shapefiles
            </a>
            <br />
            <br />
            Consider contacting your{" "}
            <a
              href="https://ottawa.ca/en/city-hall/mayor-and-city-councillors"
              className="text-cyan-700 underline"
            >
              mayor and ward's councillor
            </a>{" "}
            as well as volunteering your time or money to causes around the
            city, such as{" "}
            <a
              href="https://ottawamission.com/get-involved/#ways-to-give"
              className="text-cyan-700 underline"
            >
              The Ottawa Mission
            </a>{" "}
            or{" "}
            <a
              href="https://www.ottawafoodbank.ca/donate/"
              className="text-cyan-700 underline"
            >
              The Ottawa Food Bank
            </a>
            .
          </p>
          <br />
          <p className="text-center text-cyan-900 font-custom-serif tracking-wider">
            By Quinn Jackson
          </p>

          <br />
        </div>
      </div>
    </div>
  );
};

export default App;
