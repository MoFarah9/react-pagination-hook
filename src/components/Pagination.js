import React from "react";

const Pagination = ({ items, itemsPerPage, currentPage, onPaginate }) => {
  const pages = Math.ceil(items.length / itemsPerPage);
  const btns = [];

  for (let i = 1; i <= pages; i++) {
    if (currentPage === i) {
      btns.push(
        <button key={i} className="disabled">
          {i}
        </button>
      );
    } else {
      btns.push(
        <button key={i} onClick={() => onPaginate(i)}>
          {i}
        </button>
      );
    }
  }

  return <div className="pagination-btns">{btns}</div>;
};

export default Pagination;
