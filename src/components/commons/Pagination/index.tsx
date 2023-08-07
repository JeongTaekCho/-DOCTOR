import React from 'react';

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <div>
      <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>
        <BiSolidLeftArrow size="13"></BiSolidLeftArrow>
      </button>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          style={{
            fontWeight: currentPage === number ? 'bold' : 'normal',
            margin: '0 5px',
            fontSize: '2rem'
          }}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(prev => prev + 1)}
        disabled={currentPage === totalPages}
      >
        <BiSolidRightArrow size="13"></BiSolidRightArrow>
      </button>
    </div>
  );
};

export default Pagination;
