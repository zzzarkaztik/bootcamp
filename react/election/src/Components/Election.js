import { Component } from "react";

class Election extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes_pres: {
        pres1: 0,
        pres2: 0,
      },
      votes_vp: {
        vp1: 0,
        vp2: 0,
      },
    };
  }

  getPresVote = (event) => {
    let vote_pres = event.target.candidate_pres.value;
    let pres = this.state.votes_pres;
    pres[vote_pres] += 1;
    this.setState({ votes_pres: pres });
  };

  getViceVote = (event) => {
    let vote_vp = event.target.candidate_vp.value;
    let vp = this.state.votes_vp;
    vp[vote_vp] += 1;
    this.setState({ votes_vp: vp });
  };

  submitVotes = (event) => {
    event.preventDefault();
    this.getPresVote(event);
    this.getViceVote(event);
  };

  render = () => {
    return (
      <>
        <h1>Voting Form</h1>
        <form onSubmit={this.submitVotes}>
          <h2>President</h2>
          <input type="radio" name="candidate_pres" value="pres1" />
          <label>Dina Pili</label>
          <br />
          <input type="radio" name="candidate_pres" value="pres2" />
          <label>Lucky Chan</label>
          <h2>Vice President</h2>
          <input type="radio" name="candidate_vp" value="vp1" />
          <label>Pat Tumbakita</label>
          <br />
          <input type="radio" name="candidate_vp" value="vp2" />
          <label>Ben Eko</label>
          <br />
          <input type="submit" class="btn btn-primary" />
        </form>
        <h1>Vote Record</h1>
        <table class="table">
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Total Votes</th>
          </tr>
          <tr>
            <td>Dina Pili</td>
            <td>Mayor</td>
            <td>{this.state.votes_pres.pres1}</td>
          </tr>
          <tr>
            <td>Lucky Chan</td>
            <td>Mayor</td>
            <td>{this.state.votes_pres.pres2}</td>
          </tr>
          <tr>
            <td>Pat Tumbakita</td>
            <td>Vice President</td>
            <td>{this.state.votes_vp.vp1}</td>
          </tr>
          <tr>
            <td>Ben Eko</td>
            <td>Vice President</td>
            <td>{this.state.votes_vp.vp2}</td>
          </tr>
        </table>
      </>
    );
  };
}

export default Election;
