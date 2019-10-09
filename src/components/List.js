import React from "react";

const List = ({ items }) => {
  if (items.length === 0) {
    return <h3 style={{ textAlign: "center" }}>Empty Page</h3>;
  }

  return (
    <ul className="list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
