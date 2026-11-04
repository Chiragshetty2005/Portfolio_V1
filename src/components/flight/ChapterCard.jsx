import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFlight } from "../../contexts/Flight";
import { usePlay } from "../../contexts/Play";
import { chapters } from "../../data/chapters";

export const ChapterCard = () => {
  const { chapter } = useFlight();
  const { play, end } = usePlay();
  const [displayed, setDisplayed] = useState(null);

  const active = chapter >= 0 && play && !end ? chapters[chapter] : null;
  const visible = Boolean(active);

  useEffect(() => {
    if (active) {
      setDisplayed(active);
    }
  }, [active]);

  return (
    <div
      className={`chapter-card ${visible ? "is-visible" : ""}`}
      aria-live="polite"
    >
      {displayed && (
        <div className="chapter-card__inner" key={displayed.id}>
          <p className="chapter-card__eyebrow">{displayed.card.eyebrow}</p>
          <h2 className="chapter-card__title">{displayed.card.title}</h2>
          <p className="chapter-card__body">{displayed.card.body}</p>
          <div className="chapter-card__chips">
            {displayed.card.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <Link className="chapter-card__cta" to={displayed.card.href}>
            {displayed.card.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
};
