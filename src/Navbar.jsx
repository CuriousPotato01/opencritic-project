import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import logoLight from './images/logo-light.png';
import gitLogo from './images/github-mark-white.png';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg mb-3 navbar border-bottom border-body pt-3 ps-4 pe-4"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to="/opencritic-project">
          <img src={logoLight} alt="" />
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
            src={gitLogo}
            style={{ width: '40px', height: '40px', objectFit: 'contain' }}
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
