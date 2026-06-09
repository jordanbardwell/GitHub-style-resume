/* ===== Direction 2: README-forward ===== */
function MdH2({ children, id }) {
  return (
    <h2 id={id} style={{ fontSize: 22, fontWeight: 600, margin: "32px 0 16px", paddingBottom: 8, borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 8 }}>
      {children}
    </h2>
  );
}

function ReadmeDirection({ data }) {
  const p = data.profile;
  const fileTabs = ["README.md", "experience.md", "skills.json", "impact.csv"];
  const [active, setActive] = useState("README.md");
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "24px 24px 80px" }}>
      {/* repo header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
        <span style={{ color: "var(--fg-muted)" }}><I.repo /></span>
        <span style={{ fontSize: 18 }}>
          <a href="#" onClick={e => e.preventDefault()} style={{ fontWeight: 400 }}>{p.login}</a>
          <span style={{ color: "var(--fg-muted)" }}> / </span>
          <a href="#" onClick={e => e.preventDefault()} style={{ fontWeight: 600 }}>resume</a>
        </span>
        <span className="label" style={{ fontSize: 11 }}>Public</span>
        <div style={{ flex: 1 }} />
        <a className="btn" href={p.linkedin} target="_blank" rel="noreferrer"><I.star width="14" height="14" />Connect</a>
        <a className="btn" href={`mailto:${p.email}`}>Email</a>
      </div>

      {/* description line */}
      <p style={{ margin: "0 0 16px", color: "var(--fg-muted)", fontSize: 14 }}>
        {p.title} · {p.bio}
      </p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 12.5, color: "var(--fg-muted)", marginBottom: 16 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><I.pin width="14" height="14" />{p.location}</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><I.link width="14" height="14" /><a href={`https://${p.website}`} target="_blank" rel="noreferrer">{p.website}</a></span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><I.verified width="14" height="14" />Microsoft Customer Success Story</span>
      </div>

      {/* file shell */}
      <div className="card" style={{ overflow: "hidden" }}>
        {/* file tabs */}
        <div style={{ display: "flex", gap: 0, background: "var(--canvas-subtle)", borderBottom: "1px solid var(--border)", overflowX: "auto" }}>
          {fileTabs.map(f => (
            <button key={f} onClick={() => setActive(f)} className="mono" style={{
              padding: "10px 16px", fontSize: 12.5, border: "none", cursor: "pointer", whiteSpace: "nowrap",
              background: active === f ? "var(--canvas)" : "transparent",
              color: active === f ? "var(--fg)" : "var(--fg-muted)",
              borderBottom: active === f ? "2px solid #fd8c73" : "2px solid transparent",
              fontWeight: active === f ? 600 : 400,
            }}>{f}</button>
          ))}
        </div>

        {/* readme content */}
        <div style={{ padding: "8px 40px 40px" }}>
          {active === "README.md" && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 0", borderBottom: "1px solid var(--border)", color: "var(--fg-muted)", fontSize: 13 }}>
                <I.read width="15" height="15" /><span className="mono">README.md</span>
              </div>
              <div style={{ display: "flex", gap: 24, alignItems: "flex-start", margin: "28px 0 8px", flexWrap: "wrap" }}>
                <Avatar size={104} round={false} />
                <div style={{ flex: 1, minWidth: 220 }}>
                  <h1 style={{ margin: "0 0 4px", fontSize: 30, fontWeight: 700, letterSpacing: "-0.01em" }}># {p.name}</h1>
                  <div className="mono" style={{ color: "var(--fg-muted)", fontSize: 15 }}>@{p.login} · {p.title}</div>
                </div>
              </div>
              <blockquote style={{ margin: "20px 0", padding: "2px 18px", borderLeft: "4px solid var(--border)", color: "var(--fg-muted)" }}>
                <p style={{ margin: "8px 0", fontSize: 15.5, lineHeight: 1.6 }}>{data.readme.headline}</p>
              </blockquote>
              {data.readme.body.map((para, i) => (
                <p key={i} style={{ fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}><MD text={para} /></p>
              ))}

              <MdH2>📊 Impact at a glance</MdH2>
              <ImpactTable stats={data.stats} />

              <MdH2>📌 Pinned work</MdH2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="pin-grid">
                {data.pinned.slice(0, 4).map((r, i) => <RepoCard key={i} {...r} />)}
              </div>

              <MdH2>🟩 A decade of shipping</MdH2>
              <ContribGraph compact />

              <MdH2>🛠️ Skills</MdH2>
              <SkillBars skills={data.skills} />
            </div>
          )}

          {active === "experience.md" && (
            <div style={{ paddingTop: 8 }}>
              {data.experience.map((job, i) => (
                <div key={i} style={{ marginBottom: 28 }}>
                  <h3 style={{ margin: "0 0 2px", fontSize: 18, fontWeight: 600 }}>
                    <span style={{ color: "var(--fg-muted)", fontWeight: 400 }}>## </span>{job.role}
                  </h3>
                  <div className="mono" style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 12 }}>{job.org} · {job.start} – {job.end}{job.current ? " · current" : ""}</div>
                  <ul style={{ margin: 0, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 8 }}>
                    {job.points.map((pt, j) => <li key={j} style={{ fontSize: 14, lineHeight: 1.6 }}>{pt}</li>)}
                  </ul>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, fontSize: 14, color: "var(--fg-muted)" }}>
                <strong style={{ color: "var(--fg)", fontWeight: 600 }}>Education:</strong> {data.education.school} · {data.education.year}
              </div>
            </div>
          )}

          {active === "skills.json" && (
            <pre className="mono" style={{ background: "var(--canvas-inset)", borderRadius: 8, padding: 20, overflowX: "auto", fontSize: 13, lineHeight: 1.7, margin: "16px 0 0", border: "1px solid var(--border)" }}>
{`{`}
{data.skills.map((s, i) => (
  <div key={i} style={{ paddingLeft: 16 }}>
    <span style={{ color: "var(--done)" }}>"{s.group}"</span>: [
    <div style={{ paddingLeft: 16 }}>
      {s.items.map((it, j) => <span key={j} style={{ color: "var(--success)" }}>"{it}"{j < s.items.length - 1 ? ", " : ""}</span>)}
    </div>
    ]{i < data.skills.length - 1 ? "," : ""}
  </div>
))}
{`}`}
            </pre>
          )}

          {active === "impact.csv" && (
            <div style={{ paddingTop: 16 }}>
              <ImpactTable stats={data.stats} full pinned={data.pinned} />
            </div>
          )}
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "var(--fg-subtle)" }} className="mono">
        Updated June 2026 · {p.email}
      </div>
    </div>
  );
}

function ImpactTable({ stats, full, pinned }) {
  const cell = { padding: "10px 14px", borderBottom: "1px solid var(--border)", fontSize: 13.5, textAlign: "left" };
  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "var(--canvas-subtle)" }}>
            <th style={{ ...cell, fontWeight: 600 }}>Metric</th>
            <th style={{ ...cell, fontWeight: 600 }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((s, i) => (
            <tr key={i}>
              <td style={cell}>{s.label}</td>
              <td style={{ ...cell, fontWeight: 700, fontFamily: "var(--mono)" }}>{s.value}</td>
            </tr>
          ))}
          {full && pinned && pinned.map((r, i) => (
            <tr key={"p" + i}>
              <td style={cell}><span className="mono" style={{ color: "var(--accent)" }}>{r.name}</span></td>
              <td style={{ ...cell, fontWeight: 600, fontFamily: "var(--mono)" }}>{r.stars}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

window.ReadmeDirection = ReadmeDirection;
