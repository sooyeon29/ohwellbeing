import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDats from "../pages/allDats";
import DatInfo from "../pages/datInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllDats />} />
        <Route path="/info" element={<DatInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
