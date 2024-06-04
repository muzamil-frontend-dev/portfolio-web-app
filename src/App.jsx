import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
// import Services from "./Sections/Services";
import Summary from "./Sections/Summary";
import Portfolio from "./Sections/Portfolio";
// import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="flex">
      <Header />
      <div className="parent-class">
        <Hero />
        <About />
        {/* <Services /> */}
        <Summary />
        <Portfolio />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
