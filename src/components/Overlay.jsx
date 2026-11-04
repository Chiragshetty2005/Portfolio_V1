import { useProgress } from "@react-three/drei";
import { Link } from "react-router-dom";
import { usePlay } from "../contexts/Play";
import { profile } from "../data/profile";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />

      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            CHIRAG SHETTY
            <span className="spinner">
              <span className="spinner__image" />
            </span>
          </h1>

          <p className="intro__tag">
            Backend systems. Interactive frontends.
          </p>

          <p className="intro__scroll">Scroll to begin the journey</p>

          <div className="intro__actions">
            <button
              className="explore"
              type="button"
              onClick={() => setPlay(true)}
            >
              Start the flight
            </button>
            <Link className="intro__skip" to="/about">
              Skip to portfolio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}

      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <div className="outro__card">
          <p className="outro__eyebrow">End of the line</p>
          <h2 className="outro__title">Thanks for flying.</h2>
          <p className="outro__text">
            I'm Chirag, currently open to internships and backend / full-stack
            roles. If the work above is the kind of thing you build, let's talk.
          </p>

          <a className="outro__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className="outro__links">
            <Link className="outro__btn" to="/projects">
              See the work
            </Link>
            <a className="outro__btn" href={profile.resume} download>
              Resume
            </a>
            <a
              className="outro__btn outro__btn--ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <button
              className="outro__btn outro__btn--ghost"
              type="button"
              onClick={() => window.location.reload()}
            >
              Fly again ↺
            </button>
          </div>

          <p className="outro__meta">
            {profile.location} · {profile.phone}
          </p>
        </div>
      </div>
    </div>
  );
};
