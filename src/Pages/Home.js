import React, { useState } from "react";

const Home = () => {
  const [error, setError] = useState("");
  const handleAddBill = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const amount = form.amount.value;

    if (phone.length !== 11) {
      setError("Phone Number Must Be 11 Digits");
      return;
    }
    console.log(name, email, phone, amount);
  };
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered rounded-none border-0 border-b-2 input-primary w-full max-w-xs focus:outline-none mb-5"
        />
        <label
          htmlFor="billing-modal"
          className="btn btn-primary rounded-lg font-bold text-white"
        >
          Add New Bill
        </label>
        {/* Billing Modal */}
        <input type="checkbox" id="billing-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center uppercase">
              Add a new bill
            </h3>
            <form onSubmit={handleAddBill}>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  name="name"
                  className="input input-bordered rounded-none border-0 border-b-2 input-primary w-full focus:outline-none"
                />
              </div>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                  className="input input-bordered rounded-none border-0 border-b-2 input-primary w-full focus:outline-none"
                />
              </div>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  required
                  minLength={11}
                  placeholder="Phone"
                  name="phone"
                  className="input input-bordered rounded-none border-0 border-b-2 input-primary w-full focus:outline-none"
                />
                {error && <p className="text-error text-sm">{error}</p>}
              </div>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text">Paid Amount</span>
                </label>
                <input
                  type="number"
                  required
                  placeholder="Paid Amount"
                  name="amount"
                  className="input input-bordered rounded-none border-0 border-b-2 input-primary w-full focus:outline-none"
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Add Bill
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Billing ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Actionnpm start</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>United States</td>
              <td>12/5/2020</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Carroll Group</td>
              <td>China</td>
              <td>8/15/2020</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Marjy Ferencz</td>
              <td>Office Assistant I</td>
              <td>Rowe-Schoen</td>
              <td>Russia</td>
              <td>3/25/2021</td>
              <td>Crimson</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Yancy Tear</td>
              <td>Community Outreach Specialist</td>
              <td>Wyman-Ledner</td>
              <td>Brazil</td>
              <td>5/22/2020</td>
              <td>Indigo</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Irma Vasilik</td>
              <td>Editor</td>
              <td>Wiza, Bins and Emard</td>
              <td>Venezuela</td>
              <td>12/8/2020</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Meghann Durtnal</td>
              <td>Staff Accountant IV</td>
              <td>Schuster-Schimmel</td>
              <td>Philippines</td>
              <td>2/17/2021</td>
              <td>Yellow</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Sammy Seston</td>
              <td>Accountant I</td>
              <td>O'Hara, Welch and Keebler</td>
              <td>Indonesia</td>
              <td>5/23/2020</td>
              <td>Crimson</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Lesya Tinham</td>
              <td>Safety Technician IV</td>
              <td>Turner-Kuhlman</td>
              <td>Philippines</td>
              <td>2/21/2021</td>
              <td>Maroon</td>
            </tr>
            <tr>
              <th>10</th>
              <td>Zaneta Tewkesbury</td>
              <td>VP Marketing</td>
              <td>Sauer LLC</td>
              <td>Chad</td>
              <td>6/23/2020</td>
              <td>Green</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
