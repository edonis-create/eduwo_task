import React from "react";
import Header from "./header/header.component.jsx";
import Content from "../pages/Cities/cities.page.jsx";

import "./App.styles.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};

export default App;
