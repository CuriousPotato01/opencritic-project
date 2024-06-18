/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Pagination({ sort, propFunction }) {
  const baseUrl = sort === 'date' ? '/date/' : '/score/';

  function handleClick(pageNumber) {
    propFunction(pageNumber, sort);
  }

  return (
    <ul className="pagination justify-content-center">
      {[1, 2, 3, 4].map(pageNumber => (
        <li key={pageNumber} className="page-item">
          <Link
            to={`${baseUrl}${pageNumber}`}
            className="page-link"
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
