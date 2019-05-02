import React, { Component } from "react";

import sampathbanklogo from "../resources/sampathbanklogo.jpg";
import cvv from "../resources/cvv.png";

class SampathBankPG extends Component {
  render() {
    return (
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
                  <h2> Your Bill : </h2>
                </strong>
              </h5>
              <div className="logo">
                <img src={sampathbanklogo} width="500" height="200" alt="" />
              </div>

              <h2> Sampath Bank Payment Gateway </h2>
              <div className="card-body px-lg-5">
                <form className="text-center" style={{ color: "#757575" }}>
                  <label> Name on Card : </label>
                  <input
                    type="text"
                    placeholder="Name on Card"
                    className="form-control mb-4"
                  />
                  <label> Card Number : </label>
                  <input
                    type="text"
                    placeholder="Credit Card Number"
                    className="form-control mb-4"
                  />
                  <label>
                    {" "}
                    CVV :
                    <a
                      href="https://www.strategicprofitsinc.com/cvv_info/cvv_info.html"
                      target="_blank"
                    >
                      <img src={cvv} width="20" height="20" alt="" />
                    </a>
                  </label>
                  <input
                    type="text"
                    placeholder="CVV"
                    className="form-control mb-4"
                  />
                  <label> Amount : </label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-4"
                  />
                  <button
                    className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                  >
                    PROCEED
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default SampathBankPG;
