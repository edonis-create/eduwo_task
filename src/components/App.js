import React from "react";
import Header from "./header/header.component.jsx";
import Content from "../pages/Cities/cities.page.jsx";
import Footer from "../components/footer/footer.component.jsx";

import "./App.styles.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
