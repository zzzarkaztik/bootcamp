import { Component } from "react";

class Triangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: 0,
      height: 0,
      area: 0,
    };
  }

  solveArea = (event) => {
    let b = event.target.base.value;
    let h = event.target.height.value;
    let a = b * h * 0.5;

    this.setState({
      base: b,
      height: h,
      area: a,
    });

    event.preventDefault();
  };

  render() {
    return (
      <>
        <h1>Triangle Area Solver: </h1>
        <form onSubmit={this.solveArea}>
          <label for="base">Base:</label>
          <input type="number" name="base" id="base" class="form-text" />
          <br />
          <label for="height">Height:</label>
          <input type="number" name="height" id="height" class="form-text" />
          <input type="submit" class="btn btn-primary" />
        </form>
        <div>
          <h2>Results</h2>
          <p>Base: {this.state.base}</p>
          <p>Height: {this.state.height}</p>
          <p>Area: {this.state.area}</p>
        </div>
      </>
    );
  }
}

export default Triangle;
