import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [customers, SetCustomer] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7293/api/Customer")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetCustomer(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <br />
      <h3>Add Customer</h3>
      <br />
      <div className="mb-3">
        <label className="form-label">Customer Code</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Customer Code"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Customer Name</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Customer Name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Customer Amount</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Customer Amount"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Customer
      </button>
      <br />
      <br />
      <table className="table">
        <thead className="table-dark">
          <tr>
            <td>Customer Code</td>
            <td>Customer Name</td>
            <td>Customer Amount</td>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust) => {
            return (
              <tr>
                <td>{cust.customerCode}</td>
                <td>{cust.customerName}</td>
                <td>{cust.customerAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default App;
