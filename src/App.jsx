import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
