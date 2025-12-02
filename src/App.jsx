import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <div className="box-bg"></div>
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
