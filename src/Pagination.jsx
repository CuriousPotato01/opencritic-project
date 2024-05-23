/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Pagination({ sort }) {
  const baseUrl = sort === 'date' ? '/date/' : '/score/';

  return (
    <ul className="pagination justify-content-center">
      <div></div>

      <li className="page-item">
        <Link to={`${baseUrl}`} className="page-link">
          1
        </Link>
      </li>
      <li className="page-item">
        <Link to={`${baseUrl}2`} className="page-link">
          2
        </Link>
      </li>
      <li className="page-item">
        <Link to={`${baseUrl}3`} className="page-link">
          3
        </Link>
      </li>
    </ul>
  );
}

export default Pagination;
