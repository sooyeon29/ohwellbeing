import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDats from "../pages/allDats";
import DatInfo from "../pages/datInfo";
import OhSik from "../pages/ohSik";
import Ohwell from "../pages/ohWell";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/alldat" element={<AllDats />} />
        <Route path="/info/:id" element={<DatInfo />} />
        <Route path="/ohsik" element={<OhSik />} />
        <Route path="/" element={<Ohwell />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
