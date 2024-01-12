import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry_count: 0,
      exit_count: 0,
      people: 0,
    };
  }

  updateEntry() {
    this.setState(() => {
      return {
        entry_count: this.state.entry_count + 1,
        people: this.state.people + 1,
      };
    });
  }

  updateExit() {
    this.setState(() => {
      return {
        exit_count: this.state.exit_count + 1,
        people: this.state.people - 1,
      };
    });
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <div>
          <p>
            <b>Entries: </b>
            <span>{this.state.entry_count}</span>
          </p>
          <button
            className="btn btn-success"
            onClick={() => this.updateEntry()}
          >
            Add Entry
          </button>
        </div>
        <div>
          <p>
            <b>Exits: </b>
            <span>{this.state.exit_count}</span>
          </p>
          <button className="btn btn-danger" onClick={() => this.updateExit()}>
            Add Exits
          </button>
        </div>
        <div>
          <p>
            <b>Number of people inside: </b>
            <span>{this.state.people}</span>
          </p>
        </div>
      </>
    );
  }
}

export default Counter;
