import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Statistics from "./Pages/Statistics";
import Navbar from "./Common/Navbar";
import { Box } from "@mui/material";

export default function App() {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          mt: "64px",
          ml: "220px",
          backgroundColor: "#edf6f9",
          height: "calc(100vh - 64px)",
        }}
      >
        <Routes>
          <Route path="/" element={<Statistics />} />
          <Route path="/" element={<Statistics />} />
          <Route path="/" element={<Statistics />} />
          <Route path="/" element={<Statistics />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Box>
    </div>
  );
}
