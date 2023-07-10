import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import category from "./components/category";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <category />
    </div>
  );
}

export default App;
