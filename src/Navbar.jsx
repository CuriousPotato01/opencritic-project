import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mb-3">
      <Link to="/">
        <button type="button" className="btn btn-primary">
          Home
        </button>
      </Link>
      <SearchBar />
    </nav>
  );
}

export default Navbar;
