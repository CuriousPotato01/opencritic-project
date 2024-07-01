import { Link } from 'react-router-dom';
import logoLight from './images/logo-light.png';

function Footer() {
  return (
    <div className="footer border-top" data-bs-theme="dark">
      <Link to="https://opencritic.com/">
        <img src={logoLight} alt="" />
      </Link>
    </div>
  );
}

export default Footer;
