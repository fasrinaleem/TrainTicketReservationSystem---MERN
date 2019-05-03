import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import PaymentMethod from "./PaymentMethod";

class TicketBooking extends Component {
  constructor(props) {
    super(props);

    this.checkSource = this.checkSource.bind(this);
    this.checkDestination = this.checkDestination.bind(this);
    this.checkTickets = this.checkTickets.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      source: "",
      destination: "",
      nooftickets: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/trainticketrs/")
      .then(response => {
        this.setState({
          source: response.data.source,
          destination: response.data.destination,
          nooftickets: response.data.nooftickets
          //        year: response.data.year
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // onChangeSource(e) {
  //   this.setState({
  //     source: e.target.value
  //   });
  // }

  // onChangeDestination(e) {
  //   this.setState({
  //     destination: e.target.value
  //   });
  // }

  // onChangeTickets(e) {
  //   this.setState({
  //     nooftickets: e.target.value
  //   });
  // }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form Submitted: `);
    console.log(`Source: ${this.state.source} `);
    console.log(`Destination: ${this.state.destination} `);
    console.log(`NoofTickets: ${this.state.nooftickets} `);

    const newTodo = {
      source: this.state.source,
      destination: this.state.destination,
      nooftickets: this.state.nooftickets
    };

    axios
      .post("http://localhost:4000/trainticketrs/book", newTodo)
      .then(res => console.log(res.data));

    this.setState({
      source: "",
      destination: "",
      nooftickets: ""
    });
  }

  checkSource(e) {
    var soList = document.getElementById("soList").value;
    this.setState({
      source: e.target.value
    });
    console.log(soList);
  }
  checkDestination(e) {
    var deList = document.getElementById("deList").value;
    this.setState({
      destination: e.target.value
    });
    console.log(deList);
  }
  checkTickets(e) {
    var tickets = document.getElementById("tickets").value;
    this.setState({
      nooftickets: e.target.value
    });
    console.log(tickets);
  }

  render() {
    return (
      <Router>
        <div style={{ backgroundColor: "#D3D3D3" }}>
          <div className="container" style={{ marginTop: 0 }}>
            <center>
              <div className="card" style={{ width: 600 }}>
                <h5
                  className="card-header info-color white-text text-center py-4"
                  style={{ backgroundColor: " #0000FF " }}
                >
                  <strong style={{ color: "white" }}>
                    {" "}
                    Book Train Tickets Online{" "}
                  </strong>
                </h5>

                <div className="card-body px-lg-5">
                  <form className="text-center" style={{ color: "#757575" }}>
                    <label> From : </label>
                    <select
                      class="browser-default custom-select mb-4"
                      id="soList"
                      onChange={this.checkSource}
                    >
                      <option value="" disabled selected>
                        Choose option
                      </option>
                      <option
                        checked={this.props.source === "Colombo"}
                        onChange={this.onChangeSource}
                        value="Colombo"
                      >
                        {" "}
                        Colombo{" "}
                      </option>
                      <option
                        checked={this.props.source === "Gampaha"}
                        onChange={this.onChangeSource}
                        value="Gampaha"
                      >
                        {" "}
                        Gampaha{" "}
                      </option>
                      <option
                        checked={this.props.source === "Nawalapitiya"}
                        onChange={this.onChangeSource}
                        value="Nawalapitiya"
                      >
                        {" "}
                        Nawalapitiya{" "}
                      </option>
                      <option
                        checked={this.props.source === "Ella"}
                        onChange={this.onChangeSource}
                        value="Ella"
                      >
                        {" "}
                        Ella{" "}
                      </option>
                      <option
                        checked={this.props.source === "Badulla"}
                        onChange={this.onChangeSource}
                        value="Badulla"
                      >
                        {" "}
                        Badulla{" "}
                      </option>
                    </select>
                    <label> To : </label>
                    <select
                      class="browser-default custom-select mb-4"
                      id="deList"
                      onChange={this.checkDestination}
                    >
                      <option value="" disabled selected>
                        Choose option
                      </option>
                      <option
                        checked={this.props.destination === "Colombo"}
                        onChange={this.onChangeDestination}
                        value="Colombo"
                      >
                        {" "}
                        Colombo{" "}
                      </option>
                      <option
                        checked={this.props.destination === "Gampaha"}
                        onChange={this.onChangeDestination}
                        value="Gampaha"
                      >
                        {" "}
                        Gampaha{" "}
                      </option>
                      <option
                        checked={this.props.destination === "Nawalapitiya"}
                        onChange={this.onChangeDestination}
                        value="Nawalapitiya"
                      >
                        {" "}
                        Nawalapitiya{" "}
                      </option>
                      <option
                        checked={this.props.destination === "Ella"}
                        onChange={this.onChangeDestination}
                        value="Ella"
                      >
                        {" "}
                        Ella{" "}
                      </option>
                      <option
                        checked={this.props.destination === "Badulla"}
                        onChange={this.onChangeDestination}
                        value="Badulla"
                      >
                        {" "}
                        Badulla{" "}
                      </option>
                    </select>

                    <label> No of Tickets : </label>
                    <input
                      type="text"
                      placeholder="No of tickets"
                      className="form-control mb-4"
                      id="tickets"
                      value={this.props.nooftickets}
                      onChange={this.checkTickets}
                    />

                    <button
                      className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                      type="submit"
                    >
                      NEXT
                    </button>
                  </form>
                </div>
              </div>
            </center>
          </div>
        </div>

        <Switch>
          <Route path="/book/step2" exact component={PaymentMethod} />
        </Switch>
      </Router>
    );
  }
}

export default TicketBooking;
