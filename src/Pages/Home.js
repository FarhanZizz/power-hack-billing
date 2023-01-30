import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AmountContext } from "../AmountProvider";

const Home = () => {
  const { setAmount } = useContext(AmountContext);
  const [bills, setBills] = useState([]);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const pages = Math.ceil(count / 10);
  const [isLoading, setIsLoading] = useState(false);
  // Fetching Bill List
  const refetch = () => {
    fetch(`http://localhost:5000/billing-list?page=${page}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBills(data.result);
        setCount(data.count);
        const totalAmount = data.result.reduce(
          (acc, item) => acc + parseInt(item.amount),
          0
        );
        setAmount(totalAmount);
      });
  };
  //Customm Refetch Function to call later
  useEffect(() => {
    refetch();
  }, [page]);

  const handleAddBill = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const amount = form.amount.value;
    const time = new Date().toLocaleString();

    if (phone.length !== 11) {
      setError("Phone Number Must Be 11 Digits");
      return;
    }
    const bill = { name, email, phone, amount, time };
    // bills is being mapped below
    setBills([...bills, { name, email, phone, amount, time }]);
    setIsLoading(true);
    // adding new bill to db
    fetch(`http://localhost:5000/add-billing`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(bill),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          //if bill gets added refetch function is called
          toast.success("Bill Successfully Added");
          refetch();
          form.reset();
          setIsLoading(false);
        } else {
          toast.error(data.message || "Error Occured Try Again :(");
          refetch();
        }
      });
  };
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search Bills"
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
          <div className="modal-box relative">
            <label
              htmlFor="billing-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bills
              .sort((a, b) => {
                //sorting bills by time
                const dateA = new Date(a.time).valueOf();
                const dateB = new Date(b.time).valueOf();
                return dateB - dateA;
              })
              .map((bill, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    {isLoading && !bill._id ? (
                      //if  bill is still geting added this will show generating text
                      <span className="text-primary">Generating Id</span>
                    ) : (
                      bill._id
                    )}
                  </td>
                  <td>{bill.name}</td>
                  <td>{bill.email}</td>
                  <td>{bill.phone}</td>
                  <td>{bill.amount}</td>
                  <td>Blue</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="my-8 flex justify-center">
          <div className="btn-group">
            {[...Array(pages).keys()].map((number) => (
              <button
                key={number}
                onClick={() => {
                  setPage(number);
                }}
                className={page === number ? "btn btn-active" : "btn"}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
