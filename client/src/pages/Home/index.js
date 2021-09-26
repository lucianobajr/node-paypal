import React from "react";

import First from "./containers/First";
import Second from "./containers/Second";
import Third from "./containers/Third";
import Fourth from "./containers/Fourth";
import Footer from "./containers/Footer";

import Logo from "./containers/Logo";

function Home() {
  return (
    <>
      <Logo />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Footer />
    </>
  );
}

export default Home;
