export const PageHeader = ({ index, label, title, lede, meta, children }) => (
  <header className="page-header">
    <div className="shell">
      <div className="page-header__meta">
        <span className="eyebrow">
          {index} — {label}
        </span>
        {meta && <span className="page-header__meta-right">{meta}</span>}
      </div>

      <h1 className="display page-header__title">{title}</h1>

      {lede && <p className="page-header__lede">{lede}</p>}
      {children}
    </div>
  </header>
);

export const SectionHead = ({ index, label, title, aside }) => (
  <div className="section-head">
    <div>
      <p className="eyebrow">
        {index} — {label}
      </p>
      {title && <h2 className="h2">{title}</h2>}
    </div>
    {aside && <p className="section-head__aside">{aside}</p>}
  </div>
);
