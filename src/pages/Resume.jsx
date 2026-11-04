import { usePageMeta } from "../hooks/usePageMeta";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

export default function Resume() {
  usePageMeta(
    "Resume — Chirag P Shetty",
    "The one-page resume: backend internship, projects, skills, and education."
  );

  return (
    <div className="resume-page">
      <div className="shell resume-toolbar">
        <div>
          <p className="eyebrow">05 — Resume</p>
          <h1 className="h2">The one-page version.</h1>
        </div>

        <div className="resume-toolbar__actions">
          <a className="btn" href={profile.resume} download>
            Download PDF <span aria-hidden="true">↓</span>
          </a>
          <button
            className="btn btn--ghost"
            type="button"
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>
      </div>

      <article className="resume shell">
        <header className="resume__head">
          <div>
            <h2>{profile.name}</h2>
            <p className="resume__role">{profile.role}</p>
          </div>

          <div className="resume__contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/{profile.githubHandle}
            </a>
            <span>{profile.location}</span>
          </div>
        </header>

        <section className="resume__section">
          <h3>Summary</h3>
          <p>{profile.resumeSummary}</p>
        </section>

        <section className="resume__section">
          <h3>Experience</h3>
          {profile.experience.map((job) => (
            <div className="resume__entry" key={job.company}>
              <div className="resume__entry-head">
                <h4>
                  {job.company} — {job.role}
                </h4>
                <span>{job.period}</span>
              </div>
              <p className="resume__muted">{job.location}</p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h3>Projects</h3>
          {projects.map((project) => (
            <div className="resume__entry" key={project.slug}>
              <div className="resume__entry-head">
                <h4>{project.title}</h4>
                <span>{project.year}</span>
              </div>
              <p className="resume__muted">{project.stack.join(", ")}</p>
              <p>{project.summary}</p>
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h3>Skills</h3>
          <div className="resume__skills">
            {profile.skills.map((group) => (
              <p key={group.label}>
                <strong>{group.label}:</strong> {group.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section className="resume__section">
          <h3>Education</h3>
          {profile.education.map((item) => (
            <div className="resume__entry" key={item.school}>
              <div className="resume__entry-head">
                <h4>{item.school}</h4>
                <span>{item.period}</span>
              </div>
              <p className="resume__muted">
                {item.degree} · {item.location}
              </p>
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h3>Certifications</h3>
          <ul className="resume__certs">
            {profile.certifications.map((cert) => (
              <li key={cert.title}>
                {cert.title}
                {cert.issuer ? ` — ${cert.issuer}` : ""}
              </li>
            ))}
          </ul>
        </section>

        <section className="resume__section">
          <h3>Languages</h3>
          <p>
            {profile.languages
              .map((language) => `${language.name} (${language.level})`)
              .join(" · ")}
          </p>
        </section>
      </article>
    </div>
  );
}
