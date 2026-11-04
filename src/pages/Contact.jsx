import { Link } from "react-router-dom";
import { PageHeader } from "../components/site/PageHeader";
import { usePageMeta } from "../hooks/usePageMeta";
import { profile } from "../data/profile";

export default function Contact() {
  usePageMeta(
    "Contact — Chirag P Shetty",
    "Get in touch about internships, backend, or full-stack roles."
  );

  return (
    <>
      <PageHeader
        index="06"
        label="Contact"
        title={
          <>
            Let's make something
            <br />
            <em>that holds up.</em>
          </>
        }
        lede="I'm looking for internships and backend / full-stack roles. If you're building something where performance or interface matters, I'd like to hear about it."
        meta="Bangalore · IST"
      />

      <section className="section shell contact">
        <a
          className="contact__email"
          href={`mailto:${profile.email}?subject=Hello Chirag`}
        >
          {profile.email}
        </a>

        <div className="contact__grid">
          <div className="contact__item">
            <p className="eyebrow">Phone</p>
            <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
          </div>

          <div className="contact__item">
            <p className="eyebrow">GitHub</p>
            <a href={profile.github} target="_blank" rel="noreferrer">
              {profile.githubHandle} ↗
            </a>
          </div>

          <div className="contact__item">
            <p className="eyebrow">Resume</p>
            <a href={profile.resume} download>
              PDF ↓
            </a>
          </div>

          <div className="contact__item">
            <p className="eyebrow">Status</p>
            <span className="status">
              <i aria-hidden="true" />
              {profile.availability}
            </span>
          </div>
        </div>
      </section>

      <section className="section shell contact__note">
        <p>
          Based in Bangalore. Usually replies within a day. If email is not your
          thing, the GitHub is one click away.
        </p>
        <Link className="link-arrow" to="/projects">
          Start with the work <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
