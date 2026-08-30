import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import WhatWeDo from "./components/WhatWeDo.jsx";
import HowWeWork from "./components/HowWeWork.jsx";
import Solutions from "./components/Solutions.jsx";
import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <WhatWeDo />
        <HowWeWork />
        <Solutions />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
