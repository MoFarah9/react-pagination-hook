import React from "react";
import List from "./List";
import Pagination from "./Pagination";
import ItemsPerPageInput from "./ItemsPerPageInput";
import { usePagination } from "../hooks.js";

const PaginatedList = ({ items, initPage, initItemPerPage }) => {
  const {
    itemsToShow,
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    setCurrentPage
  } = usePagination(items, initItemPerPage, initPage);

  console.log(initPage, initItemPerPage);

  return (
    <>
      <ItemsPerPageInput
        items={items}
        itemsPerPage={itemsPerPage}
        onChange={setItemsPerPage}
      />
      <List items={itemsToShow} />
      <Pagination
        items={items}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPaginate={setCurrentPage}
      />
    </>
  );
};

export default PaginatedList;
