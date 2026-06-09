/* ===== Refined v2 layout (recommended) ===== */

/* honest, milestone-driven career graph */
function rng2(seed) { let x = Math.sin(seed) * 10000; return x - Math.floor(x); }
function yrAct(year) {
  const m = { 2026: 0.92, 2025: 0.95, 2024: 0.88, 2023: 0.7, 2022: 0.78, 2021: 0.6, 2020: 0.64, 2019: 0.5, 2018: 0.42, 2017: 0.44, 2016: 0.4 };
  return m[year] ?? 0.5;
}
function CareerGraph({ milestones }) {
  const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const [year, setYear] = useState(2025);
  const base = yrAct(year);
  const cells = useMemo(() => {
    const arr = [];
    for (let w = 0; w < 52; w++) {
      const col = [];
      for (let d = 0; d < 7; d++) {
        const r = rng2(year * 1000 + w * 7 + d);
        const weekend = d === 0 || d === 6 ? 0.45 : 1;
        const v = r * base * weekend + (r > 0.82 ? 0.25 : 0);
        let lvl = 0;
        if (v > 0.62) lvl = 4; else if (v > 0.45) lvl = 3; else if (v > 0.28) lvl = 2; else if (v > 0.12) lvl = 1;
        col.push(lvl);
      }
      arr.push(col);
    }
    return arr;
  }, [year]);
  const months = ["Jan", "", "Feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "Jul", "", "Aug", "", "Sep", "", "Oct", "", "Nov", "", "Dec"];
  const evts = milestones[year] || [];
  return (
    <div>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 0, overflowX: "auto" }}>
          <div style={{ display: "flex", gap: "3px", marginBottom: 4, paddingLeft: 2, fontSize: 10, color: "var(--fg-muted)" }}>
            {months.map((m, i) => <span key={i} style={{ width: 14, flex: "none" }}>{m}</span>)}
          </div>
          <div style={{ display: "flex", gap: "3px" }}>
            {cells.map((col, w) => (
              <div key={w} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {col.map((lvl, d) => <div key={d} style={{ width: 11, height: 11, borderRadius: 2, background: `var(--g${lvl})`, outline: "1px solid rgba(27,31,36,0.06)", outlineOffset: -1 }} />)}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 8, fontSize: 11, color: "var(--fg-muted)" }}>
            Activity is illustrative — <strong style={{ color: "var(--fg)", fontWeight: 600 }}>pick a year</strong> to see what actually shipped.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: "none" }}>
          {years.map(y => (
            <button key={y} onClick={() => setYear(y)} style={{
              fontFamily: "var(--sans)", fontSize: 12, textAlign: "right", cursor: "pointer",
              border: "1px solid transparent", borderRadius: 6, padding: "3px 10px",
              background: y === year ? "var(--accent-subtle)" : "transparent",
              color: y === year ? "var(--accent)" : "var(--fg-muted)",
              fontWeight: y === year ? 600 : 400, minWidth: 56,
            }}>{y}</button>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--fg-muted)", marginBottom: 10 }}>{year} · what shipped</div>
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
          {evts.map((e, i) => (
            <li key={i} style={{ display: "flex", gap: 10, fontSize: 13, lineHeight: 1.5 }}>
              <span className="dot" style={{ width: 8, height: 8, background: "var(--g3)", marginTop: 6, flex: "none" }} />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* case study (flagship deep-dive) */
function CaseStudy({ cs, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const Field = ({ label, children }) => (
    <div style={{ display: "grid", gridTemplateColumns: "92px 1fr", gap: 14, padding: "12px 0", borderTop: "1px solid var(--border-muted)" }}>
      <div className="mono" style={{ fontSize: 11.5, color: "var(--fg-subtle)", textTransform: "uppercase", letterSpacing: 0.4, paddingTop: 1 }}>{label}</div>
      <div style={{ fontSize: 13.5, lineHeight: 1.55 }}>{children}</div>
    </div>
  );
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "16px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--sans)" }}>
        <span style={{ color: "var(--fg-muted)" }}><I.repo /></span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontWeight: 600, fontSize: 15.5, color: "var(--accent)" }}>{cs.name}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--fg-muted)" }}><span className="dot" style={{ background: cs.langColor }} />{cs.lang}</span>
          </div>
          <div style={{ fontSize: 12.5, color: "var(--fg-muted)", marginTop: 3 }}>{cs.tagline}</div>
        </div>
        <span style={{ color: "var(--fg-muted)", transform: open ? "rotate(0)" : "rotate(-90deg)", transition: "transform .18s" }}><I.chevron /></span>
      </button>
      {open && (
        <div style={{ padding: "0 18px 16px" }}>
          <Field label="Problem">{cs.problem}</Field>
          <Field label="What I built">{cs.build}</Field>
          <Field label="Stack">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {cs.stack.map((s, i) => <span key={i} className="mono" style={{ fontSize: 11, padding: "2px 8px", borderRadius: 999, background: "var(--accent-subtle)", color: "var(--accent)" }}>{s}</span>)}
            </div>
          </Field>
          <Field label="Result"><strong style={{ fontWeight: 600 }}>{cs.result}</strong></Field>
        </div>
      )}
    </div>
  );
}

function SeniorRole({ job, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: 12, padding: "16px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--sans)" }}>
        <span style={{ color: "var(--fg-muted)", marginTop: 2 }}><I.repo /></span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.4 }}>{job.headline}</div>
          <div style={{ fontSize: 12.5, color: "var(--fg-muted)", marginTop: 4, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ color: "var(--fg)", fontWeight: 500 }}>{job.role}</span>
            <span>· {job.org} ·</span>
            <span className="mono">{job.start} – {job.end}</span>
            {job.current && <span className="label green" style={{ fontSize: 10.5 }}><span className="dot" style={{ width: 6, height: 6, background: "var(--success)" }} />Current</span>}
          </div>
        </div>
        <span style={{ color: "var(--fg-muted)", marginTop: 2, transform: open ? "rotate(0)" : "rotate(-90deg)", transition: "transform .18s" }}><I.chevron /></span>
      </button>
      {open && (
        <div style={{ padding: "0 18px 16px 42px" }}>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {job.points.map((pt, i) => (
              <li key={i} style={{ display: "flex", gap: 10, fontSize: 13, lineHeight: 1.55 }}>
                <span style={{ color: "var(--success)", marginTop: 2, flex: "none" }}><I.check width="15" height="15" /></span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
            {job.tags.map((t, i) => <span key={i} className="mono" style={{ fontSize: 11, padding: "2px 8px", borderRadius: 999, background: "var(--accent-subtle)", color: "var(--accent)" }}>{t}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileSidebarV2({ p }) {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Avatar size={280} />
      <div>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600, lineHeight: 1.25 }}>{p.name}</h1>
        <div className="mono" style={{ fontSize: 18, color: "var(--fg-muted)", fontWeight: 300 }}>@{p.login}</div>
      </div>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>{p.bio}</p>
      <a className="btn primary" href={p.linkedin} target="_blank" style={{ justifyContent: "center", width: "100%" }} rel="noreferrer">Connect on LinkedIn</a>
      <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 13 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: "var(--fg-muted)" }}><I.org /></span><strong style={{ fontWeight: 600 }}>{p.title}</strong></div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-muted)" }}><I.pin /><span style={{ color: "var(--fg)" }}>{p.location}</span></div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-muted)" }}><I.mail /><a href={`mailto:${p.email}`}>{p.email}</a></div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-muted)" }}><I.link /><a href={`https://${p.website}`} target="_blank" rel="noreferrer">{p.website}</a></div>
      </div>
    </aside>
  );
}

function MiniRepo({ r }) {
  return (
    <div className="card" style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 8, height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--fg-muted)", flex: "none" }}><I.repo width="15" height="15" /></span>
        {r.link
          ? <a href={r.link} target="_blank" rel="noreferrer" style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</a>
          : <a href="#" onClick={e => e.preventDefault()} style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</a>}
        {r.status && <span className="label" style={{ fontSize: 10.5, borderColor: "var(--attention)", color: "var(--attention)" }}>{r.status}</span>}
        {r.kind === "side" && <span className="label" style={{ fontSize: 10.5, borderColor: "var(--done)", color: "var(--done)" }}>side</span>}
        <span style={{ flex: 1 }} />
        <span className="mono" style={{ fontSize: 11, color: "var(--fg-subtle)" }}>{r.year}</span>
      </div>
      <p style={{ margin: 0, color: "var(--fg-muted)", fontSize: 12.5, lineHeight: 1.5, flex: 1 }}>{r.desc}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 12, color: "var(--fg-muted)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><span className="dot" style={{ width: 9, height: 9, background: r.langColor }} />{r.lang}</span>
        {r.impact && <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><I.star width="12" height="12" />{r.impact}</span>}
        {r.link && <a href={r.link} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12 }}><I.link width="12" height="12" />App Store</a>}
      </div>
    </div>
  );
}

function Shipped({ data }) {
  const [cat, setCat] = useState("All");
  const [kind, setKind] = useState("all"); // all | work | side
  const [q, setQ] = useState("");
  const [showAll, setShowAll] = useState(false);
  const LIMIT = 6;
  const cats = data.repoCategories;
  const ql = q.trim().toLowerCase();
  const list = data.repositories
    .filter(r =>
      (cat === "All" || r.category === cat) &&
      (kind === "all" || r.kind === kind) &&
      (!ql || (r.name + " " + r.desc + " " + r.lang + " " + r.category).toLowerCase().includes(ql)))
    .sort((a, b) => b.year - a.year);
  const visible = showAll ? list : list.slice(0, LIMIT);
  const hidden = list.length - visible.length;
  return (
    <section>
      <SectionTitle icon={<I.dot width="15" height="15" />} count={data.repositories.length}
        right={
          <div className="seg" style={{ padding: 2 }}>
            {[["all", "All"], ["work", "Work"], ["side", "Side"]].map(([k, l]) => (
              <button key={k} data-active={kind === k} onClick={() => { setKind(k); setShowAll(false); }} style={{ fontSize: 12 }}>{l}</button>
            ))}
          </div>
        }>Shipped</SectionTitle>
      <p style={{ margin: "-8px 0 16px", fontSize: 13, color: "var(--fg-muted)" }}>Projects I've built and put into production.</p>

      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, flex: 1, minWidth: 200 }}>
          {cats.map(c => {
            const n = c === "All" ? data.repositories.length : data.repositories.filter(r => r.category === c).length;
            const on = cat === c;
            return (
              <button key={c} onClick={() => { setCat(c); setShowAll(false); }} style={{
                fontFamily: "var(--sans)", fontSize: 12.5, fontWeight: on ? 600 : 400, cursor: "pointer",
                padding: "4px 12px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 6,
                border: "1px solid " + (on ? "var(--accent)" : "var(--border)"),
                background: on ? "var(--accent-subtle)" : "transparent",
                color: on ? "var(--accent)" : "var(--fg-muted)",
              }}>{c}<span style={{ opacity: 0.7 }}>{n}</span></button>
            );
          })}
        </div>
        <input value={q} onChange={e => { setQ(e.target.value); setShowAll(false); }} placeholder="Search projects…"
          style={{ fontFamily: "var(--sans)", fontSize: 13, padding: "6px 12px", borderRadius: 7, border: "1px solid var(--border)", background: "var(--canvas)", color: "var(--fg)", width: 180 }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="pin-grid">
        {visible.map((r, i) => <MiniRepo key={r.name} r={r} />)}
      </div>

      {hidden > 0 && (
        <button className="btn" onClick={() => setShowAll(true)} style={{ width: "100%", justifyContent: "center", marginTop: 12 }}>
          Show {hidden} more {hidden === 1 ? "project" : "projects"}
        </button>
      )}
      {showAll && list.length > LIMIT && (
        <button className="btn" onClick={() => setShowAll(false)} style={{ width: "100%", justifyContent: "center", marginTop: 12 }}>Show less</button>
      )}
      {list.length === 0 && <div className="card" style={{ padding: 20, textAlign: "center", color: "var(--fg-muted)" }}>No projects match “{q}”.</div>}
    </section>
  );
}

function RefinedDirection({ data }) {
  const d = data;
  const seniors = d.experience.filter(j => j.tier === "senior");
  const earlier = d.experience.filter(j => j.tier === "earlier");
  return (
    <div className="gh-wrap">
      <div className="gh-grid">
        <ProfileSidebarV2 p={d.profile} />
        <main style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 28 }}>
          {/* hero: positioning + impact + proof */}
          <div className="card" style={{ overflow: "hidden" }}>
            <div style={{ padding: "26px 28px 22px" }}>
              <h2 style={{ margin: "0 0 14px", fontSize: 23, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em" }}>{d.readme.headline}</h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--fg-muted)", margin: 0 }}><MD text={d.readme.body[0]} /></p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--border)" }} className="stat-grid">
              {d.stats.map((s, i) => (
                <div key={i} style={{ padding: "18px 24px", borderLeft: i ? "1px solid var(--border)" : "none" }}>
                  <div style={{ fontSize: 27, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: "10px 28px", borderTop: "1px solid var(--border)", fontSize: 12, color: "var(--fg-muted)", display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ color: "var(--fg-subtle)", flex: "none" }}><I.star width="12" height="12" /></span>{d.provenance}
            </div>
            <a href={d.badgeUrl} target="_blank" rel="noreferrer" style={{
              display: "flex", alignItems: "center", gap: 12, padding: "14px 28px",
              borderTop: "1px solid var(--border)", background: "var(--success-subtle)", color: "var(--fg)", textDecoration: "none",
            }}>
              <span style={{ color: "var(--success)", flex: "none" }}><I.verified /></span>
              <span style={{ fontSize: 13.5, lineHeight: 1.4 }}><strong style={{ fontWeight: 600 }}>Microsoft Customer Success Story</strong> — published on Epiq's Copilot Studio, Power Platform & AI automation work.</span>
              <span style={{ marginLeft: "auto", color: "var(--accent)", fontSize: 13, fontWeight: 500, whiteSpace: "nowrap" }}>Read →</span>
            </a>
          </div>

          {/* leadership scope */}
          <section>
            <SectionTitle icon={<I.org width="15" height="15" />}>Leadership</SectionTitle>
            <div className="card" style={{ overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }} className="stat-grid">
                {[
                  { v: d.leadership.reports, l: "people led, across two teams" },
                  { v: "4", l: "direct reports (2 leaders, architect, advisor)" },
                  { v: "2", l: "platform orgs owned" },
                ].map((s, i) => (
                  <div key={i} style={{ padding: "18px 24px", borderLeft: i ? "1px solid var(--border)" : "none" }}>
                    <div style={{ fontSize: 27, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.v}</div>
                    <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "16px 24px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: 0.4 }}>Owns</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {d.leadership.owns.map((o, i) => <span key={i} style={{ fontSize: 12.5, padding: "3px 10px", borderRadius: 999, border: "1px solid var(--border)", background: "var(--canvas-subtle)" }}>{o}</span>)}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--fg-muted)" }}>
                  <span style={{ color: "var(--success)", flex: "none" }}><I.verified width="15" height="15" /></span>
                  <span><strong style={{ color: "var(--fg)", fontWeight: 600 }}>Fast trajectory:</strong> {d.leadership.trajectory}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--fg-muted)" }}>
                  <span style={{ color: "var(--success)", flex: "none" }}><I.check width="16" height="16" /></span>
                  <span><strong style={{ color: "var(--fg)", fontWeight: 600 }}>Capability, not dependency:</strong> {d.leadership.effect}</span>
                </div>
              </div>
            </div>
          </section>

          {/* operating thesis */}
          <div className="card" style={{ padding: "22px 26px", background: "var(--canvas-subtle)" }}>
            <div className="mono" style={{ fontSize: 11.5, color: "var(--fg-subtle)", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 10 }}>How I work</div>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, fontWeight: 500, letterSpacing: "-0.005em" }}>{d.pov}</p>
          </div>

          {/* case studies */}
          <section>
            <SectionTitle icon={<I.star width="15" height="15" />} count={d.caseStudies.length}>Flagship case studies</SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {d.caseStudies.map((cs, i) => <CaseStudy key={i} cs={cs} defaultOpen={i === 0} />)}
            </div>
          </section>

          {/* shipped (long tail) */}
          <Shipped data={d} />

          {/* experience */}
          <section>
            <SectionTitle icon={<I.repo width="15" height="15" />} count={d.experience.length}>Experience</SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {seniors.map((job, i) => <SeniorRole key={i} job={job} defaultOpen={i < 2} />)}
            </div>
            <div className="card" style={{ marginTop: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--fg-muted)", marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.4 }}>Earlier career</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {earlier.map((job, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--fg-subtle)", marginTop: 1, flex: "none" }}><I.dot width="14" height="14" /></span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{job.headline}</div>
                      <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 2 }}><span style={{ color: "var(--fg)" }}>{job.role}</span> · {job.org} · <span className="mono">{job.start} – {job.end}</span></div>
                    </div>
                  </div>
                ))}
                <div style={{ display: "flex", gap: 10, alignItems: "center", paddingTop: 10, borderTop: "1px solid var(--border-muted)", fontSize: 12.5, color: "var(--fg-muted)" }}>
                  <span style={{ flex: "none" }}><I.cal width="14" height="14" /></span>
                  <span><strong style={{ color: "var(--fg)", fontWeight: 600 }}>{d.education.school}</strong> · {d.education.year}</span>
                </div>
              </div>
            </div>
          </section>

          {/* career graph */}
          <section>
            <SectionTitle icon={<I.dot width="15" height="15" />}>A decade of delivery</SectionTitle>
            <div className="card" style={{ padding: "22px 24px" }}><CareerGraph milestones={d.milestones} /></div>
          </section>

          {/* how I operate */}
          <section>
            <SectionTitle icon={<I.check width="15" height="15" />}>How I operate</SectionTitle>
            <div className="card" style={{ padding: "20px 24px", display: "flex", flexWrap: "wrap", gap: 8 }}>
              {d.competencies.map((c, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, padding: "6px 12px", borderRadius: 999, border: "1px solid var(--border)", background: "var(--canvas)" }}>
                  <span style={{ color: "var(--success)", flex: "none" }}><I.check width="14" height="14" /></span>{c}
                </span>
              ))}
            </div>
          </section>

          {/* skills */}
          <section>
            <SectionTitle icon={<I.dot width="15" height="15" />}>Languages & tools</SectionTitle>
            <div className="card" style={{ padding: 24 }}><SkillBars skills={d.skills} /></div>
          </section>
        </main>
      </div>
    </div>
  );
}

window.RefinedDirection = RefinedDirection;
