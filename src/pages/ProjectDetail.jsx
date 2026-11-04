import { Link, useParams } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { getNextProject, getProject } from "../data/projects";
import { profile } from "../data/profile";
import NotFound from "./NotFound";

const Flow = ({ nodes, note }) => (
  <div className="flow">
    <div className="flow__nodes">
      {nodes.map((node, index) => (
        <div className="flow__item" key={node}>
          <div className="flow__node">
            <span className="flow__number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flow__name">{node}</span>
          </div>
          {index < nodes.length - 1 && (
            <span className="flow__arrow" aria-hidden="true">
              →
            </span>
          )}
        </div>
      ))}
    </div>
    {note && <p className="flow__note">{note}</p>}
  </div>
);

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  const next = project ? getNextProject(slug) : null;

  usePageMeta(
    project
      ? `${project.title} — Chirag P Shetty`
      : "Project not found — Chirag P Shetty",
    project ? project.tagline : "That case study does not exist."
  );

  if (!project) {
    return <NotFound />;
  }

  const sections = [
    {
      id: "01",
      label: "Overview",
      content: <p>{project.overview}</p>,
    },
    {
      id: "02",
      label: "The problem",
      content: <p>{project.problem}</p>,
    },
    {
      id: "03",
      label: "The build",
      content: (
        <ol className="approach">
          {project.approach.map((step, index) => (
            <li key={step}>
              <span className="approach__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ),
    },
    {
      id: "04",
      label: "Architecture",
      content: (
        <Flow
          nodes={project.architecture.nodes}
          note={project.architecture.note}
        />
      ),
    },
    {
      id: "05",
      label: "Signals",
      content: (
        <div className="signals">
          {project.signals.map((signal) => (
            <div className="signal" key={signal.label}>
              <span className="signal__value">{signal.value}</span>
              <span className="signal__label">{signal.label}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "06",
      label: "Notes",
      content: <blockquote className="case-quote">{project.notes}</blockquote>,
    },
  ];

  return (
    <article className="case">
      <header className="case__hero shell">
        <div className="case__eyebrow">
          <Link to="/projects">Work</Link>
          <span aria-hidden="true">/</span>
          <span>{project.index}</span>
        </div>

        <h1 className="display case__title">{project.title}</h1>
        <p className="case__tagline">{project.tagline}</p>

        <dl className="case__meta">
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack.join(" · ")}</dd>
          </div>
        </dl>
      </header>

      <div
        className="case__cover"
        style={{ background: project.accent, color: project.ink }}
      >
        <div className="shell case__cover-inner">
          <span className="case__letter" aria-hidden="true">
            {project.letter}
          </span>

          <div className="case__cover-meta">
            <p className="eyebrow">Build note</p>
            <p>{project.summary}</p>
            <div className="tags">
              {project.stack.map((item) => (
                <span className="tag tag--on-accent" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="shell case__body">
        {sections.map((section) => (
          <section className="case__section" key={section.id}>
            <p className="case__section-label">
              {section.id} — {section.label}
            </p>
            <div className="case__section-content">{section.content}</div>
          </section>
        ))}
      </div>

      <div className="shell case__actions">
        {project.repo ? (
          <a
            className="btn"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            View repository ↗
          </a>
        ) : (
          <a
            className="btn"
            href={`mailto:${profile.email}?subject=${encodeURIComponent(
              `Code access: ${project.title}`
            )}`}
          >
            Request the code
          </a>
        )}

        {project.demo && (
          <a
            className="btn btn--ghost"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live demo ↗
          </a>
        )}

        <Link className="link-arrow" to="/projects">
          All projects <span aria-hidden="true">→</span>
        </Link>
      </div>

      <section
        className="next-project"
        style={{ background: next.accent, color: next.ink }}
      >
        <Link className="shell next-project__inner" to={`/projects/${next.slug}`}>
          <p className="eyebrow">Next — {next.index}</p>
          <h2>{next.title}</h2>
          <span className="next-project__arrow" aria-hidden="true">
            ↗
          </span>
        </Link>
      </section>
    </article>
  );
}
