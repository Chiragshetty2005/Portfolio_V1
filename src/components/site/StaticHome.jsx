import { Link } from "react-router-dom";
import { chapters } from "../../data/chapters";
import { profile } from "../../data/profile";
import { SiteNav } from "./SiteNav";

export const StaticHome = () => (
  <div className="static-home">
    <SiteNav />

    <main className="shell static-home__inner">
      <p className="eyebrow">Portfolio — 2026</p>

      <h1 className="display static-home__title">
        Chirag
        <br />
        <em>Shetty</em>
      </h1>

      <p className="static-home__lede">{profile.intro}</p>

      <div className="static-home__actions">
        <Link className="btn" to="/projects">
          Selected work
        </Link>
        <Link className="link-arrow" to="/about">
          About me <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="static-home__chapters">
        {chapters.map((chapter, index) => (
          <Link
            className="static-home__chapter"
            key={chapter.id}
            to={chapter.card.href}
          >
            <span className="static-home__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong>{chapter.card.title}</strong>
            <em>
              {chapter.card.cta} <span aria-hidden="true">→</span>
            </em>
          </Link>
        ))}
      </div>

      <div className="static-home__foot">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span>{profile.location}</span>
      </div>
    </main>
  </div>
);
