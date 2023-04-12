import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <br/>
    <h3>Add Customer</h3>
    <br/>
      <div className="mb-3">
        <label  className="form-label">
          Customer Code
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Customer Code"
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
         Customer Name
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Customer Name"
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
         Customer Amount
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Customer Amount"
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Customer</button>
    </>
  );
}

export default App;
