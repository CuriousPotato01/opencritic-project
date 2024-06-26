/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Pagination({ sort, propFunction }) {
  const [pageArray, setPageArray] = useState([1, 2, 3, 4, 5]);
  const baseUrl = sort === 'date' ? '/date/' : '/score/';

  function handleClick(pageNumber) {
    propFunction(pageNumber, sort);
  }

  function updatePageArray(direction) {
    const updatedPageArray = pageArray.map(page =>
      direction === 'forward' ? page + 5 : page - 5,
    );
    setPageArray(updatedPageArray);
  }

  useEffect(() => {
    setPageArray([1, 2, 3, 4, 5]);
  }, [sort]);

  return (
    <ul className="pagination justify-content-center" data-bs-theme="dark">
      {pageArray[0] !== 1 && (
        <Link className="page-link" onClick={() => updatePageArray('back')}>
          Previous
        </Link>
      )}
      {pageArray.map(pageNumber => (
        <li key={pageNumber} className="page-item">
          <Link
            className="page-link"
            to={`${baseUrl}${pageNumber}`}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </Link>
        </li>
      ))}
      <Link className="page-link" onClick={() => updatePageArray('forward')}>
        Next
      </Link>
    </ul>
  );
}

export default Pagination;
