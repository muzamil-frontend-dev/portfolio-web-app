import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Services from "./Sections/Services";
import Summary from "./Sections/Summary";
import Portfolio from "./Sections/Portfolio";
import Testimonial from "./Sections/Testimonial";

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
        <Testimonial />
      </div>
    </div>
  );
}

export default App;
