import React from "react";
import { Route, Routes } from "react-router-dom";
import Statistics from "./Pages/Statistics";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/backend" />
      <Route path="/frontend" />
      <Route path="/fullstack" />
      <Route path="/mobile" />
      <Route path="/statistics" element={<Statistics />} />
    </Routes>
  );
};
export default RouterComponent;
