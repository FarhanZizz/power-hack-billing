import React, { Children, createContext, useState } from "react";

export const AmountContext = createContext();
const AmountProvider = ({ children }) => {
  // Total Paid amount shared betwwen Navbar And list
  const [amount, setAmount] = useState(0);
  const amountInfo = {
    amount,
    setAmount,
  };
  return (
    <AmountContext.Provider value={amountInfo}>
      {children}
    </AmountContext.Provider>
  );
};

export default AmountProvider;
