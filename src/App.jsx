import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Services from "./Sections/Services";
import Summary from "./Sections/Summary";

function App() {
  return (
    <div className="lg:flex">
      <Header />
      <div className="basis-0 grow">
        <Hero />
        <About />
        <Services />
        <Summary />
      </div>
    </div>
  );
}

export default App;
