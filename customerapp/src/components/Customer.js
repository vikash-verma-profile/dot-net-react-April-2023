import { useState } from "react";
import { useEffect } from "react";
import AuthService from "../services/auth.service";

const Customer = () => {
  const [customers, SetCustomer] = useState([]);
  const [customerCode, setCustomerCode] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAmount, setCustomerAmount] = useState(0);

  useEffect(() => {
    fetch("https://localhost:7293/api/Customer",{
      method:'get',
      headers:new Headers({
        'Authorization':'Bearer '+AuthService.getToken(),
        'Content-Type':'application/json'
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetCustomer(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer(customerCode, customerName, customerAmount);
  };

  const addCustomer = async (customerCode, customerName, customerAmount) => {
    console.log(customerCode);
    await fetch("https://localhost:7293/api/Customer", {
      method: "POST",
      body: JSON.stringify({
        customerCode: customerCode,
        customerName: customerName,
        customerAmount: Number(customerAmount),
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetCustomer(data);
        setCustomerCode("");
        setCustomerName("");
        setCustomerAmount(0);
      });
  };
  return (
    <>
      <br />
      <h3>Add Customer</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Customer Code</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Customer Code"
            value={customerCode}
            onChange={(e) => setCustomerCode(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Customer Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Customer Amount</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Customer Amount"
            value={customerAmount}
            onChange={(e) => setCustomerAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Customer
        </button>
      </form>
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

export default Customer;
