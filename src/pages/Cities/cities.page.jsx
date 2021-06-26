import React from "react";
import Form from "../../components/form-search/form-search.component";
import CitiesTable from "../../components/table/table.component";
import "./cities.page.css";

const Content = () => (
  <div className="content">
    <Form />
    <CitiesTable />
    PAGINATION
  </div>
);

export default Content;
