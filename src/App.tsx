import "./styles/index.scss";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/nav/Navbar";
import Home from "./components/hero/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Box pt={"80px"} className="cc-container page-alignment">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
