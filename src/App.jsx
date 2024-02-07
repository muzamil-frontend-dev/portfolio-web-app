import Header from "./Header/Header";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";

function App() {
  return (
    <div className="sm:flex">
      <Header />
      <div className="sm:w-4/5">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
