import React from 'react';
import { ImPrevious, ImNext } from 'react-icons/im';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };
  return (
    <div className="my-12  flex items-center justify-center gap-5">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="text-4xl"
      >
        <ImPrevious />
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="text-4xl"
      >
        <ImNext />
      </button>
    </div>
  );
};

export default Pagination;
