import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import Transection from "./Transection";

function TransectionList() {
  const { transections } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transections.map((transaction) => (
          <Transection transection={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}

export default TransectionList;
