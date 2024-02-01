import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

function App() {
  return (
    <div className="flex">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
