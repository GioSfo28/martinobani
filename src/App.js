import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Profile />
      <Activities />
      {/*<Reviews />*/}
      <Footer />
    </div>
  );
}

export default App;
