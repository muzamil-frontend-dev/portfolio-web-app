import Header from "./Header/Header";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Services from "./Sections/Services/Services";

function App() {
  return (
    <div className="lg:flex">
      <Header />
      <div className="basis-0 grow">
        <Hero />
        <About />
        <Services />
      </div>
    </div>
  );
}

export default App;
