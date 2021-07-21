import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

function Balance() {
  const { transections } = useContext(GlobalContext);

  const amounts = transections.map((transection) => transection.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4> your balance </h4>
      <h1 className="balance">${total}</h1>
    </>
  );
}

export default Balance;
