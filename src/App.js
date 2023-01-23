import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LiveContracting from "./components/LiveContracting";
import Home from "./pages/Home"
import About from "./pages/About"
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact"
import Landscaping from "./pages/Landscaping";
import Decks from "./pages/Decks";
import Coming from "./pages/Coming";

function App() {
  return (
    <BrowserRouter>
      <h1 className="sm:max-lg:hidden text-center my-10 font-bold text-2xl text-yellow-600"
      >MEHRDAD CONSTRUCTON COMPANY</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landscaping" element={<Landscaping />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/coming-soon" element={<Coming />} />
      </Routes>
      <Footer />
      <LiveContracting />
    </BrowserRouter>
  );
}

export default App;
