import React from "react";

const ItemsPerPageInput = ({ items, itemsPerPage, onChange }) => (
  <div className="item-per-Page">
    <label htmlFor="items-per-page">Items/Page: </label>
    <input
      id="items-per-page"
      type="number"
      min="1"
      max={items.length}
      onChange={e => onChange(parseInt(e.target.value))}
      value={itemsPerPage}
    />
  </div>
);

export default ItemsPerPageInput;
