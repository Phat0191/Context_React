import React, { Component } from "react";

import NumberContext from "./NumberContext";

export default class NumberProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };

    this.updateNumber = this.updateNumber.bind(this);
    this.minusNumber = this.minusNumber.bind(this);
  }

  updateNumber() {
    this.setState({
      number: this.state.number + 1,
    });
  }

  minusNumber() {
    this.setState({
      number: this.state.number -1,
    });
  }
  render() {
    return (
      <NumberContext.Provider
        value={{
          number: this.state.number,
          updateNumber: this.updateNumber,
          minusNumber:this.minusNumber
        }}
      >
        {this.props.children}   
      </NumberContext.Provider>
    );
  }
}