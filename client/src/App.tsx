import { Navbar } from "./components/pages/Navbar";
import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Projects";
import { Contact } from "./components/pages/Contact";
import { Footer } from "./components/pages/Footer";

function App() {
  return (
    <div className="scroll-smooth" >
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
