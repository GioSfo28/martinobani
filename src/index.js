import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Privacy from "./components/Privacy.js";
import "./index.css"; // Importa TailwindCSS
import Cookie from "./components/Cookie.js";
import LoginPage from "./components/Login.js";
import Dashboard from "./pages/Dashboard.jsx";
import AgendaCompleanni from "./pages/AgendaCompleanni.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
         <Route path="/Agenda-compleanni" element={<AgendaCompleanni/>} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<Cookie />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);