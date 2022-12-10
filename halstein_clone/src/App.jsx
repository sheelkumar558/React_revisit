import React from "react";
import { Navbar } from "./components/Navbar";

import Page from "./components/Page";

import Slider from "./components/Slider";
import Swip from "./components/Swip";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Page />
      <Swip />
    </div>
  );
};

export default App;
