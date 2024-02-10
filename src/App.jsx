import Header from "./Header/Header";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";

function App() {
  return (
    <div className="sm:flex">
      <Header />
      <div className="basis-0 grow">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
