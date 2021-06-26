import React from "react";
import { connect } from "react-redux";
import { Response } from "../../redux/geodb/geodb.actions";
import geodb from "../../axios/geodb";
import FormInput from "../form-input/form-input.component";
import Dropdown from "../sort-dropdown/sort-dropdown.component";
import Button from "../custom-button/custom-button.component";

import "./form-search.styles.css";

class Form extends React.Component {
  state = { name: "" };

  async componentDidMount() {
    const response = await geodb.get("/cities", {
      params: {
        namePrefix: "",
        limit: 10,
      },
    });
    this.props.Response(response.data);
  }

  //When submiting form to make request to geodb API
  onHandleSubmit = async (e) => {
    e.preventDefault();

    const response = await geodb.get("/cities", {
      params: {
        namePrefix: this.state.name,
        limit: 10,
      },
    });
    this.props.Response(response.data);
  };
  //This helps making the component controlled
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={this.onHandleSubmit} className="form">
        <FormInput
          name="name"
          type="text"
          placeholder={"Name Prefix"}
          value={this.state.name}
          onHandleChange={this.onHandleChange}
          className="div1"
        />
        <FormInput className="div2" />
        <Dropdown className="div3" />
        <Button className="div4" />
      </form>
    );
  }
}

export default connect(null, { Response })(Form);
