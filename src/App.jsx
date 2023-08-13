import React from "react";
import { NavBar } from "./components";
import {
  About,
  Blog,
  Connection,
  Contact,
  Explorer,
  Features,
  Footer,
  Header,
  Review,
} from "./Container";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Features />
      <Explorer />
      <Review />
      <Blog />
      <Connection />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
