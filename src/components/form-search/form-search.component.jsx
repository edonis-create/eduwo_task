import React, { useState } from "react";
import { connect } from "react-redux";
import { Response } from "../../redux/geodb/geodb.actions";
import geodb from "../../axios/geodb";
import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";

import "./form-search.styles.css";

const Form = ({ Response }) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState(null);
  const [sort, setSort] = useState("");
  //When submiting form to make request to geodb API
  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const response = await geodb.get("/cities", {
      params: {
        namePrefix: name,
        limit: 10,
        minPopulation: population,
        sort: sort,
      },
    });
    Response(response.data);
  };
  //This helps making the component controlled
  const onHandleNameChange = (e) => {
    setName(e.target.value);
  };
  const onHandlePopChange = (e) => {
    setPopulation(e.target.value);
  };

  return (
    <form onSubmit={onHandleSubmit} className="form">
      <FormInput
        name="name"
        type="text"
        placeholder={"Name Prefix"}
        value={name}
        onHandleChange={onHandleNameChange}
        className="div1"
      />
      <FormInput
        name="population"
        type="text"
        placeholder={"Min Population"}
        value={population}
        onHandleChange={onHandlePopChange}
        className="div2"
      />
      <select
        onClick={(e) => setSort(e.target.value)}
        className="dropdown div3"
      >
        <option className="opt" value={null}>
          NONE
        </option>
        <option className="opt" value={"name"}>
          A-Z
        </option>
        <option className="opt" value={"-name"}>
          Z-A
        </option>
        <option className="opt" value={"countryCode"}>
          Country Code, A-Z
        </option>
        <option className="opt" value={"-countryCode"}>
          Country Code, Z-A
        </option>
        <option className="opt" value={"population"}>
          Population, LOW-HIGH
        </option>
        <option className="opt" value={"-population"}>
          Population, HIGH-LOW
        </option>
      </select>
      <Button className="div4" />
    </form>
  );
};

export default connect(null, { Response })(Form);
