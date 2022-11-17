import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
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
          backgroundColor: "#f5ebe0",
          height: "calc(100vh - 64px)",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </div>
  );
}
