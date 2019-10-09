import { useState } from "react";

export function usePagination(items, initItemsPerPage, initCurrentPage) {
  const [itemsPerPage, setItemsPerPage] = useState(initItemsPerPage);
  const [currentPage, setCurrentPage] = useState(initCurrentPage);

  let lastIndex = currentPage * itemsPerPage;
  let firstIndex = lastIndex - itemsPerPage;
  lastIndex = lastIndex > items.length ? items.length : lastIndex;
  const itemsToShow = items.slice(firstIndex, lastIndex);

  return {
    itemsToShow,
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    setCurrentPage
  };
}
