import { Link } from "react-router-dom";
import { PageHeader, SectionHead } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { profile } from "../data/profile";

export default function About() {
  usePageMeta(
    "About — Chirag P Shetty",
    "Computer science undergraduate in Bangalore, focused on backend systems, caching, and interactive frontends."
  );

  return (
    <>
      <PageHeader
        index="02"
        label="About"
        title={
          <>
            Systems that hold up.
            <br />
            <em>Interfaces that explain them.</em>
          </>
        }
        lede={profile.intro}
        meta="Bangalore, India · B.Tech CSE '27"
      />

      <section className="section shell about">
        <div className="about__body">
          <Reveal>
            <p className="about__lead">{profile.bio[0]}</p>
          </Reveal>
          {profile.bio.slice(1).map((paragraph, index) => (
            <Reveal key={paragraph} delay={(index + 1) * 80}>
              <p className="about__paragraph">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <aside className="about__facts">
          <div className="fact">
            <span className="fact__label">Based</span>
            <span className="fact__value">Bangalore, India</span>
          </div>
          <div className="fact">
            <span className="fact__label">Degree</span>
            <span className="fact__value">B.Tech CSE, 2023—27</span>
          </div>
          <div className="fact">
            <span className="fact__label">Focus</span>
            <span className="fact__value">
              Backend systems, caching, interactive frontends
            </span>
          </div>
          <div className="fact">
            <span className="fact__label">Status</span>
            <span className="fact__value">{profile.availability}</span>
          </div>
          <a className="link-arrow" href={profile.resume} download>
            Download resume <span aria-hidden="true">↓</span>
          </a>
        </aside>
      </section>

      <section className="section shell">
        <SectionHead
          index="03"
          label="Education"
          title="Foundations"
          aside="Formal training, in order."
        />

        <div className="edu-list">
          {profile.education.map((item, index) => (
            <Reveal key={item.school} delay={index * 80}>
              <div className="edu-row">
                <span className="edu-row__period">{item.period}</span>
                <div className="edu-row__main">
                  <h3>{item.school}</h3>
                  <p>{item.degree}</p>
                  <p className="muted">{item.note}</p>
                </div>
                <span className="edu-row__location">{item.location}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell">
        <SectionHead
          index="04"
          label="Certifications"
          title="Extra coursework"
          aside="Short programmes that filled gaps."
        />

        <div className="cert-grid">
          {profile.certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 60}>
              <div className="cert">
                <span className="tag">{cert.tag}</span>
                <h3>{cert.title}</h3>
                {cert.issuer && <p>{cert.issuer}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell about__end">
        <div>
          <p className="eyebrow">Languages</p>
          <ul className="language-list">
            {profile.languages.map((language) => (
              <li key={language.name}>
                <span>{language.name}</span>
                <span className="language-list__dots" aria-hidden="true" />
                <span className="muted">{language.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Elsewhere</p>
          <div className="about__links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
            <a href={profile.resume} download>
              Resume ↓
            </a>
          </div>
        </div>
      </section>

      <section className="section shell about__now">
        <div>
          <p className="eyebrow">Now</p>
          <p className="about__now-text">
            Finishing my B.Tech, building projects I can benchmark, and looking
            for a team where backend systems matter.
          </p>
        </div>
        <Link className="link-arrow" to="/contact">
          Get in touch <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
