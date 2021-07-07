import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
    console.log('ComponentDidMount');
  }
  

  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log('ComponentWillUnmount');
  }

  render() {
    return <div>{this.props.children(this.state)}</div>;
    // return <div>{this.state.count}</div>;
  }
}