import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
import Extras from "./components/Extras";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Profile />
      <Activities />
      <Extras/>
      <Footer />
    </div>
  );
}

export default App;
