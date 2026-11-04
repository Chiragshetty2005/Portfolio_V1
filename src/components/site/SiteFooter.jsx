import { Link } from "react-router-dom";
import { navigation, profile } from "../../data/profile";

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__cta">
          <p className="eyebrow">Next</p>
          <Link className="footer__big" to="/contact">
            Have a project in mind?
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <p className="footer__label">Navigate</p>
            {navigation.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer__col">
            <p className="footer__label">Elsewhere</p>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
            <a href={profile.resume} download>
              Resume ↓
            </a>
          </div>

          <div className="footer__col">
            <p className="footer__label">Contact</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Chirag P Shetty</span>
          <span className="footer__bottom-mid">
            Backend systems. Interactive frontends.
          </span>
          <Link to="/">Back to the flight ↑</Link>
        </div>
      </div>
    </footer>
  );
};
