import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Services from "./Sections/Services";
import Summary from "./Sections/Summary";
import Portfolio from "./Sections/Portfolio";

function App() {
  return (
    <div className="lg:flex">
      <Header />
      <div className="basis-0 grow">
        <Hero />
        <About />
        <Services />
        <Summary />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
