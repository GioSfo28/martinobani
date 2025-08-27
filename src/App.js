import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
import Partners from "./components/Partners";


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <Profile />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;
