import React from "react";
import { Toaster } from "react-hot-toast";

import Hero from "./modules/landing page/pages/Hero";
import About from "./modules/landing page/pages/About";
import Skills from "./modules/landing page/pages/Skills";
import Projects from "./modules/landing page/pages/Projects";
import ContactUs from "./modules/landing page/pages/ContactUs";
import Footer from "./modules/landing page/pages/Footer";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />

      {/* Hot toast container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: { fontSize: "16px" },
        }}
      />
    </>
  );
}

export default App;
