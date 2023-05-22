import React, { useState } from 'react';

<<<<<<< HEAD
const PaginationHandler = (items:any, itemsPerPage: number) => {
=======
const PaginationHandler = (items, itemsPerPage:number) => {
>>>>>>> dev
  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxPage = Math.ceil(items.length / itemsPerPage);
  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return items.slice(begin, end);
<<<<<<< HEAD
  };
  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };
  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };
  const jump = (page: number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };
  return {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    maxPage,
  };
};
=======
  }
  const next  = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }
  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }
  const jump = (page:number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }
  return { next, prev, jump, currentData, currentPage, maxPage };
}
>>>>>>> dev
export { PaginationHandler };
