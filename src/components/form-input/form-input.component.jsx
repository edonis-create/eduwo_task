import React from "react";
import "./form-input.styles.css";

const FormInput = ({ onHandleChange, ...otherProps }) => (
  <input onChange={onHandleChange} {...otherProps} className="form-input" />
);

export default FormInput;
