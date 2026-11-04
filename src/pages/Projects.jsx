import { Link } from "react-router-dom";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

const featured = projects.find((project) => project.featured);
const rest = projects.filter((project) => !project.featured);

export default function Projects() {
  usePageMeta(
    "Selected work — Chirag P Shetty",
    "Four builds across backend systems, motion, 3D, and AI."
  );

  return (
    <>
      <PageHeader
        index="01"
        label="Selected work"
        title={
          <>
            Four builds,
            <br />
            <em>one thread.</em>
          </>
        }
        lede="Each project starts with a constraint: too many requests, too much motion, too much complexity. The work is what happened next."
        meta={`${profile.location} · 2025`}
      />

      <section className="section section--flush">
        <div className="shell">
          <Reveal>
            <Link
              className="feature"
              to={`/projects/${featured.slug}`}
              style={{ background: featured.accent, color: featured.ink }}
            >
              <div className="feature__main">
                <p className="feature__eyebrow">
                  {featured.index} — Systems
                </p>
                <h2 className="feature__title">{featured.title}</h2>
                <p className="feature__tagline">{featured.tagline}</p>
                <div className="tags">
                  {featured.stack.map((item) => (
                    <span className="tag tag--on-accent" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <span className="feature__cta">
                  Read the case study <span aria-hidden="true">↗</span>
                </span>
              </div>

              <div className="feature__aside" aria-hidden="true">
                <span className="feature__letter">{featured.letter}</span>
                <div className="feature__flow">
                  {featured.architecture.nodes.map((node, index) => (
                    <span key={node}>
                      {node}
                      {index < featured.architecture.nodes.length - 1 && (
                        <i>→</i>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="project-grid">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <Link className="project-card" to={`/projects/${project.slug}`}>
                  <div
                    className="project-card__cover"
                    style={{ background: project.accent, color: project.ink }}
                  >
                    <span className="project-card__letter">
                      {project.letter}
                    </span>
                    <span className="project-card__index">{project.index}</span>
                  </div>

                  <div className="project-card__body">
                    <p className="eyebrow">
                      {project.year} — {project.stack[0]}
                    </p>
                    <h3>{project.title}</h3>
                    <p>{project.tagline}</p>
                    <span className="project-card__cta">
                      Case study <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell projects-note">
        <p className="eyebrow">Note</p>
        <p className="projects-note__text">
          Every project here is a system I can walk through end to end: the
          design decision, the failure mode, and what I would change. If you
          want the code, ask.
        </p>
        <Link className="link-arrow" to="/contact">
          Request access <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
