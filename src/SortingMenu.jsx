import { Link } from 'react-router-dom';

function SortingMenu() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort by:
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link to="/" className="dropdown-item">
            Score
          </Link>
        </li>

        <li>
          <Link to="/date" className="dropdown-item">
            Release Date
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SortingMenu;
