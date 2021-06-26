import React from "react";
import FormInput from "../form-input/form-input.component";
import Dropdown from "../sort-dropdown/sort-dropdown.component";
import Button from "../custom-button/custom-button.component";
import "./form-search.styles.css";

const Form = () => {
  return (
    <form className="form">
      <FormInput className="div1" />
      <FormInput className="div2" />
      <Dropdown className="div3" />
      <Button className="div4" />
    </form>
  );
};
export default Form;
