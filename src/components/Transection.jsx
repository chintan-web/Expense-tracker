import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

function Transection({ transection }) {
  const { deleteTransection } = useContext(GlobalContext);

  const sign = transection.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={transection.amount < 0 ? "minus" : "plus"}>
        {transection.text}
        <span>
          {sign} ${Math.abs(transection.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransection(transection.id)}
        >
          x
        </button>
      </li>
    </>
  );
}

export default Transection;
