import React, { useState } from "react";
import TransactionsButton from "../../moleculs/TransactionsButtons";

export default function Transactions() {
  const [activeStatus, setActiveStatus] = useState("Active");

  const handleButtonClick = (status) => {
    setActiveStatus(status);
  };

  const getTransactionMessage = () => {
    switch (activeStatus) {
      case "Active":
        return "Nggak ada yang harus dibayar nih";
      case "Expired":
        return "Belum ada transaksi yang kadaluarsa nih";
      case "Paid":
        return "Belum ada transaksi yang sudah dibayar nih";
      default:
        return "Belum ada transaksi apapun nih";
    }
  };

  return (
    <section className="transactions">
      <div className="transaction-page-content">
        <h1 className="transactions-page-tittle">Transactions</h1>
        <div className="transactions-page-bar">
          <TransactionsButton
            activeStatus={activeStatus}
            onButtonClick={handleButtonClick}
          />
          {activeStatus && (
            <div className="transactions-loading">
              <h3>{getTransactionMessage()}</h3>
              <a href="">yuk belanja!</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
