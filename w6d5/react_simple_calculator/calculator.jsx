import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: "", num2: "", result: 0 };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    const newVal = parseInt(e.target.value);
    this.setState({ num1: newVal });
  }

  setNum2(e) {
    const newVal = parseInt(e.target.value);
    this.setState({ num2: newVal });
  }

  add(e) {
    e.preventDefault();
    this.setState({ result: this.state.num1 + this.state.num2 });
  }

  clear(e) {
    e.preventDefault();
    this.setState({ result: 0, num1: "", num2: "" });
  }

  render() {
    return (
      <div>
        <input onChange={this.setNum1} value={this.state.num1} />
        <input onChange={this.setNum2} value={this.state.num2} />
        <h1>{this.state.result}</h1>
        <button onClick={this.clear}>clear</button>
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

export default Calculator;
