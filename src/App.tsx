import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import AllCountry from "./Components/AllCountry/AllCountry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="detail/:countryName" element={<Detail />} />
        <Route path="" element={<AllCountry />} />
      </Route>
    </Routes>
  );
}

export default App;
