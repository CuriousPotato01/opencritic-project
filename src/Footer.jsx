import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer border-top" data-bs-theme="dark">
      <Link to="https://opencritic.com/">
        <img src="/opencritic-project/src/logo-light.png" alt="" />
      </Link>
    </div>
  );
}

export default Footer;
