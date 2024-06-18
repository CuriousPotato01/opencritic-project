/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SortingMenu({ propFunction }) {
  const [sort, setSort] = useState('score');
  function handleClick(sortingMethod) {
    propFunction(1, sortingMethod);
    setSort(sortingMethod);
  }
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort by: {sort}
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link
            to="/score/1"
            className="dropdown-item"
            onClick={() => handleClick('score')}
          >
            Score
          </Link>
        </li>

        <li>
          <Link
            to="/date/1"
            className="dropdown-item"
            onClick={() => handleClick('date')}
          >
            Release Date
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SortingMenu;
