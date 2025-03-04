// Component 2

import React from "react";

const TeamCard = ({ school, mascot, city, state }) => {
  return (
    <div style={{ padding: "10px 20px", borderBottom: "1px solid #ddd" }}>
      <h2>{school}</h2>
      <p><strong>Mascot:</strong> {mascot}</p>
      <p><strong>Location:</strong> {city}, {state}</p>
    </div>
  );
};

export default TeamCard;
