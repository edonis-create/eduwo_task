import React from "react";
import "./sort-dropdown.styles.css";

const Dropdown = () => {
  return (
    <select placeholder="sort by" className="dropdown">
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
  );
};

export default Dropdown;
