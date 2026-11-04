import { Link } from "react-router-dom";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { profile } from "../data/profile";

export default function Skills() {
  usePageMeta(
    "Skills — Chirag P Shetty",
    "Languages, backend, data, frontend, and workflow — with the work that proves each one."
  );

  return (
    <>
      <PageHeader
        index="04"
        label="Skills"
        title={
          <>
            Tools, and
            <br />
            <em>where I used them.</em>
          </>
        }
        lede="No percentage bars. Each group links to the work that proves it."
        meta="Five groups"
      />

      <section className="section shell">
        <div className="skill-groups">
          {profile.skills.map((group, index) => (
            <Reveal key={group.label} delay={index * 60}>
              <div className="skill-group">
                <div className="skill-group__head">
                  <span className="skill-group__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{group.label}</h2>
                </div>

                <p className="skill-group__note">{group.note}</p>

                <ul className="skill-group__items">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {group.usedIn && (
                  <Link className="link-arrow" to={group.usedIn.href}>
                    Seen in {group.usedIn.label}{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section shell skills-note">
        <p className="eyebrow">Currently</p>
        <p className="skills-note__text">
          Finishing my B.Tech and looking for a team where I can work on
          backend systems at real scale.
        </p>
        <Link className="link-arrow" to="/contact">
          Get in touch <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
