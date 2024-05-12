import { Link } from 'react-router-dom';
function Pagination() {
  return (
    <ul className="pagination justify-content-center">
      <div></div>

      <li className="page-item">
        <Link to="/" className="page-link">
          1
        </Link>
      </li>
      <li className="page-item">
        <Link to="/page/2" className="page-link">
          2
        </Link>
      </li>
      <li className="page-item">
        <Link to="/page/3" className="page-link">
          3
        </Link>
      </li>
    </ul>
  );
}

export default Pagination;
