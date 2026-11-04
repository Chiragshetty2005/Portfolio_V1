import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  navigation,
  primaryNavigation,
  profile,
} from "../../data/profile";

export const SiteNav = ({ variant = "site", visible = true }) => {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  const isFlight = variant === "flight";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      buttonRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={`site-nav ${isFlight ? "site-nav--flight" : ""} ${
          isFlight && !visible ? "is-hidden" : ""
        }`}
      >
        {!isFlight && (
          <Link className="brand" to="/" aria-label="Chirag Shetty, home">
            <span className="brand__mark">CS</span>
            <span className="brand__name">Chirag Shetty</span>
          </Link>
        )}

        <nav className="site-nav__links" aria-label="Primary">
          {primaryNavigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          ref={buttonRef}
          className="menu-button"
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="site-menu"
        >
          <span>Menu</span>
          <span className="menu-button__lines" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </header>

      {open && (
        <div
          className="menu"
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="menu__top">
            <span className="eyebrow">Index</span>
            <button
              ref={closeRef}
              className="menu__close"
              type="button"
              onClick={() => setOpen(false)}
            >
              Close <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav className="menu__links" aria-label="All pages">
            {navigation.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                style={{ "--i": index }}
                onClick={() => setOpen(false)}
              >
                <span className="menu__index">{item.index}</span>
                <span className="menu__label">{item.label}</span>
                <span className="menu__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </nav>

          <div className="menu__foot">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.location}</span>
          </div>
        </div>
      )}
    </>
  );
};
