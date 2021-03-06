import React from "react";

function Bid({ details }) {
  if (!details) {
    return <h3>Working fetching your bid&apos;s details...</h3>;
  }

  return (
    <div className="bid container">
      <h2>Bid Number: {details.id}</h2>
      <p>Price: {details.amount}</p>
      <p>Time: {details.time}</p>
    </div>
  );
}

export default Bid;
