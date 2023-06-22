import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      {/* <ul className="footer-links">
        {pageLinks.map((link)=>{
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul> */}
      <SocialLink parentClass="footer-icons" itemClass="footer-icon" />
      {/* <ul className="footer-icons">
        {
          socialLink.map((link)=>{
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                >
                  <i className={link.font}></i>
                </a>
              </li>
            );
          })
        }
      </ul> */}
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}
export default Footer