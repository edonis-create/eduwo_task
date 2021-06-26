import React from "react";
import Header from "./header/header.component.jsx";
import Content from "../pages/Cities/cities.page.jsx";
import CityDetail from "../pages/city-detail/city-detail.component.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "../components/footer/footer.component.jsx";

import "./App.styles.css";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Content} />
        <Route path="/city/:cityname/:id" exact component={CityDetail} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
