import React from "react";
import ButtonTransactions from "../../atoms/ButtonTransactions";

const TransactionsButton = ({ activeStatus, onButtonClick }) => {
  return (
    <div className="transactions-page-bartop">
      <ButtonTransactions
        className={
          activeStatus === "Active"
            ? "transactions-btn-active"
            : "transactions-btn"
        }
        onClick={() => onButtonClick("Active")}
      >
        Active
      </ButtonTransactions>
      <ButtonTransactions
        className={
          activeStatus === "Expired"
            ? "transactions-btn-active"
            : "transactions-btn"
        }
        onClick={() => onButtonClick("Expired")}
      >
        Expired
      </ButtonTransactions>
      <ButtonTransactions
        className={
          activeStatus === "Paid"
            ? "transactions-btn-active"
            : "transactions-btn"
        }
        onClick={() => onButtonClick("Paid")}
      >
        Paid
      </ButtonTransactions>
    </div>
  );
};

export default TransactionsButton;
