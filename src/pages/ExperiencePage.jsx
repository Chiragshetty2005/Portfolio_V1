import { Link } from "react-router-dom";
import { PageHeader, SectionHead } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { profile } from "../data/profile";

const timeline = [
  {
    year: "2021",
    title: "Jyothy Composite PU College",
    note: "PCMB · Karnataka State Board",
  },
  {
    year: "2023",
    title: "Dayananda Sagar University",
    note: "B.Tech · Computer Science Engineering",
  },
  {
    year: "2025",
    title: "Tetherfi",
    note: "Software Intern · .NET Core, MariaDB",
  },
  {
    year: "2025",
    title: "Four builds",
    note: "SCRP · CodeClash · MAC Reimagined · AI Resume Analyzer",
  },
];

export default function ExperiencePage() {
  usePageMeta(
    "Experience — Chirag P Shetty",
    "Backend internship at Tetherfi, plus the principles behind the work."
  );

  return (
    <>
      <PageHeader
        index="03"
        label="Experience"
        title={
          <>
            Where I've
            <br />
            <em>been.</em>
          </>
        }
        lede="One internship, a lot of context. Here is what I actually worked on, and the ideas I keep coming back to."
        meta="2021 — 2025"
      />

      <section className="section shell">
        {profile.experience.map((job) => (
          <div className="job" key={job.company}>
            <div className="job__aside">
              <span className="job__period">{job.period}</span>
              <span className="job__location">{job.location}</span>
            </div>

            <div className="job__main">
              <h2 className="job__company">{job.company}</h2>
              <p className="job__role">{job.role}</p>
              <p className="job__summary">{job.summary}</p>

              <ul className="job__bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="tags">
                {job.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="section shell">
        <SectionHead
          index="04"
          label="Principles"
          title="How I work"
          aside="Three rules I keep testing."
        />

        <div className="principles">
          {profile.principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 80}>
              <div className="principle">
                <span className="principle__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <SectionHead
          index="05"
          label="Timeline"
          title="The short version"
          aside="A straight line, mostly."
        />

        <div className="timeline">
          {timeline.map((item, index) => (
            <Reveal key={`${item.year}-${item.title}`} delay={index * 60}>
              <div className="timeline__row">
                <span className="timeline__year">{item.year}</span>
                <span className="timeline__dot" aria-hidden="true" />
                <div className="timeline__main">
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Link className="link-arrow timeline__cta" to="/projects">
          See the work behind the timeline <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
