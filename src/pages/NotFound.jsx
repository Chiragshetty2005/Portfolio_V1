import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta(
    "Wrong runway — Chirag P Shetty",
    "That page does not exist."
  );

  return (
    <div className="not-found shell">
      <p className="eyebrow">404</p>
      <h1 className="display not-found__title">Wrong runway.</h1>
      <p className="not-found__text">
        That page doesn't exist. The flight is still on.
      </p>
      <div className="not-found__actions">
        <Link className="btn" to="/">
          Back to the flight
        </Link>
        <Link className="link-arrow" to="/projects">
          See the work <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
