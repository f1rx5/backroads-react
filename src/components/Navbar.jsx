import logo from '../images/logo.svg'
import  PageLinks  from './PageLinks';
import SocialLink from './SocialLink';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <SocialLink parentClass="nav-icons" itemClass="nav-icon" />

        {/* <ul className="nav-icons">
          {socialLink.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={link.font}></i>
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};
export default Navbar;
