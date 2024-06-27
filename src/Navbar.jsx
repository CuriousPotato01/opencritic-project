import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg mb-3 navbar border-bottom border-body pt-3 ps-3 pe-3"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to="/">
          <img src="/src/logo-light.png" alt="" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item"></li>
          </ul>
        </div>

        <SearchBar />
        <Link
          className="nav-link active"
          to={'https://github.com/CuriousPotato01/opencritic-project'}
        >
          <img
            src="/src/github-mark-white.png"
            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
