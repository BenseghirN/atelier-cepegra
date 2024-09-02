import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error/error";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>
);
