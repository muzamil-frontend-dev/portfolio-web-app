import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Services from "./Sections/Services";
import Summary from "./Sections/Summary";
import Portfolio from "./Sections/Portfolio";
import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="lg:col-span-1">
        <Header />
      </div>
      <div className="lg:col-span-4">
        <Hero />
        <About />
        <Services />
        <Summary />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
