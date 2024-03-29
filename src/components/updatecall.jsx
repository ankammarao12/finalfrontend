import axios from "axios";
import React, { Component } from "react";
//import Joi from 'joi-browser';

class UpdateCall extends React.Component {
  state = {
    call: {
      callId: "",
      callDate: "",
      callDuration: "",
      phoneNumber: "",

      customerId:"",
      city:"",
      email: "",
      firstName: "",
      lastName: "",
      mobile: "",

      issueId: "",
      description: "",
      issueStatus: "",
      issueType: "",

      departmentId: "",
      departmentName:"",

      operatorId: "",
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      city: "",
    
    },
    errors: {},
    errMsg: "",
  };
   
  handleChange = (event) => {
    
    // copy state operator object to local variable operator
    const call = { ...this.state.call };

    // update local operator object with values entered by user
    call[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ call: call });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
 
    const call=
    {
        "callDate": this.state.call.callDate , 
        "callDuration":this.state.call.callDuration ,
        "callId": this.state.call.callId,
        "customer": {
          "city": this.state.call.city,
          "customerId": this.state.call.customerId,
          "email": this.state.call.customerEmail,
          "firstName": this.state.call.customerFirstName,
          "lastName": this.state.call.customerLastName,
          "mobile": this.state.call.customerMobile
        },
        "issue": {
          "description": this.state.call.description,
          "issueId": this.state.call.issueId,
          "issueStatus": this.state.call.issueStatus,
          "issueType": this.state.call.issueType
        },
        "phoneNumber": this.state.call.phoneNumber,
        "receivedBy": {
          "city": this.state.call.city,
          "department": {
            "departmentId": this.state.call.departmentId,
            "departmentName": this.state.call.departmentName
          },
          "email": this.state.call.operatorEmail,
          "firstName": this.state.call.operatorFirstName,
          "lastName": this.state.call.operatorLastName,
          "mobile": this.state.call.operatorMobile,
          "operatorId": this.state.call.operatorId
        }
      }
    axios
      .put("http://localhost:9090/api/updateCall", call)
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated Call call " + this.state.call.callId + " successfully!"
        );
        this.props.history.push("/call");
      })
      .catch((err) => 
        console.log(err));
      };
        

  render() {
    // Object Destructuring
    const {  callId, callDate, callDuration, phoneNumber, customerId, customerFirstName, customerLastName, customerEmail, customerMobile, operatorId, operatorFirstName, operatorLastName, operatorEmail, operatorMobile, issueId, description,issueStatus, issueType, departmentId, departmentName } = this.state.call;
    const { errors, errMsg } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
            <div className="card-header bg-light text-black text-center">
                                        <h4 className="fw-bolder">
                                            Update Call
                                        </h4>
                                    </div>
              <div className="mb-3">
            <label htmlFor="callId" className="form-label">
            Call Id
            </label>
            <input
              type="number"
              className="form-control"
              id="callId"
              aria-describedby="emailHelp"
              value={callId}
              name="callId"
              onChange={this.handleChange}
            />
          </div>
              <div className="mb-3">
            <label htmlFor="callDate" className="form-label">
            Call Date
            </label>
            <input
              type="number"
              className="form-control"
              id="callDate"
              aria-describedby="emailHelp"
              value={callDate}
              name="callDate"
              onChange={this.handleChange}
            />
          </div> 
          <div className="mb-3">
            <label htmlFor="callDuration" className="form-label">
            Call Duration
            </label>
            <input
              type="number"
              className="form-control"
              id="callDuration"
              aria-describedby="emailHelp"
              value={callDuration}
              name="callDuration"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
            Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              aria-describedby="emailHelp"
              value={phoneNumber}
              name="phoneNumber"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="customerId" className="form-label">
            Customer Id
            </label>
            <input
              type="number"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
              value={customerId}
              name="customerId"
              onChange={this.handleChange}
            />
          </div>
         
         
         
          <div className="mb-3">
            <label htmlFor="issueId" className="form-label">
            Issue Id
            </label>
            <input
              type="number"
              className="form-control"
              id="issueId"
              aria-describedby="emailHelp"
              value={issueId}
              name="issueId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="operatorId" className="form-label">
            Operator Id
            </label>
            <input
              type="number"
              className="form-control"
              id="operatorId"
              aria-describedby="emailHelp"
              value={operatorId}
              name="operatorId"
              onChange={this.handleChange}
            />
          </div> 
          
          
          
          
         
          
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateCall;