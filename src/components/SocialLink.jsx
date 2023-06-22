import { socialLink } from "../data";
const SocialLink = (props) => {
  return (
    <ul className={props.parentClass}>
      {socialLink.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={props.itemClass}
            >
              <i className={link.font}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default SocialLink