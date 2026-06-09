/* ===== Direction 1: Classic Profile ===== */
function ProfileSidebar({ p }) {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Avatar size={280} />
      <div>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600, lineHeight: 1.25 }}>{p.name}</h1>
        <div className="mono" style={{ fontSize: 18, color: "var(--fg-muted)", fontWeight: 300 }}>@{p.login}</div>
      </div>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>{p.bio}</p>
      <a className="btn" href={p.linkedin} target="_blank" style={{ justifyContent: "center", width: "100%" }} rel="noreferrer">Connect on LinkedIn</a>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: "var(--fg-muted)" }}><I.org /></span><span><strong style={{ fontWeight: 600 }}>{p.title}</strong></span></div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-muted)" }}><I.pin /><span style={{ color: "var(--fg)" }}>{p.location}</span></div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-muted)" }}><I.mail /><a href={`mailto:${p.email}`}>{p.email}</a></div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-muted)" }}><I.link /><a href={`https://${p.website}`} target="_blank" rel="noreferrer">{p.website}</a></div>
      </div>
      <hr className="divider" style={{ margin: "4px 0" }} />
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Highlights</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span className="label green" style={{ alignSelf: "flex-start" }}><I.verified width="14" height="14" /> Microsoft Customer Success Story</span>
          <span className="label" style={{ alignSelf: "flex-start" }}><I.star width="13" height="13" /> Power Platform CoE Founder</span>
        </div>
      </div>
    </aside>
  );
}

function CollapsibleRepo({ job, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
        background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--sans)",
      }}>
        <span style={{ color: "var(--fg-muted)" }}><I.repo /></span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontWeight: 600, fontSize: 15, color: "var(--accent)" }}>{job.org.toLowerCase().replace(/[^a-z]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")}/{job.role.split(",")[0].toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "")}</span>
            {job.current && <span className="label green" style={{ fontSize: 11 }}><span className="dot" style={{ width: 7, height: 7, background: "var(--success)" }} />Active</span>}
          </div>
          <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 3 }}>{job.role} · {job.start} – {job.end}</div>
        </div>
        <span style={{ color: "var(--fg-muted)", transform: open ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.18s" }}><I.chevron /></span>
      </button>
      {open && (
        <div style={{ padding: "0 16px 16px 16px", borderTop: "1px solid var(--border)" }}>
          <p style={{ fontSize: 13, color: "var(--fg-muted)", margin: "14px 0 14px", lineHeight: 1.55 }}>{job.summary}</p>
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

function ClassicDirection({ data }) {
  const [tab, setTab] = useState("overview");
  const tabs = [
    { id: "overview", label: "Overview", icon: <I.read width="15" height="15" /> },
    { id: "experience", label: "Experience", icon: <I.repo width="15" height="15" />, count: data.experience.length },
    { id: "skills", label: "Skills", icon: <I.dot width="15" height="15" />, count: data.skills.reduce((a, s) => a + s.items.length, 0) },
  ];
  return (
    <div className="gh-wrap">
      <div className="gh-grid">
        <ProfileSidebar p={data.profile} />
        <main style={{ minWidth: 0 }}>
          {/* tab bar */}
          <div style={{ display: "flex", gap: 4, borderBottom: "1px solid var(--border)", marginBottom: 24, overflowX: "auto" }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", background: "transparent",
                border: "none", borderBottom: tab === t.id ? "2px solid #fd8c73" : "2px solid transparent",
                marginBottom: -1, cursor: "pointer", fontFamily: "var(--sans)", fontSize: 14,
                fontWeight: tab === t.id ? 600 : 400, color: "var(--fg)", whiteSpace: "nowrap",
              }}>
                <span style={{ color: "var(--fg-muted)" }}>{t.icon}</span>{t.label}
                {t.count != null && <span className="counter">{t.count}</span>}
              </button>
            ))}
          </div>

          {tab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* README card */}
              <div className="card">
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: "1px solid var(--border)", background: "var(--canvas-subtle)", borderRadius: "12px 12px 0 0" }}>
                  <I.read width="15" height="15" /><span className="mono" style={{ fontSize: 13 }}>{data.profile.login}/README.md</span>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <h2 style={{ margin: "0 0 16px", fontSize: 22, fontWeight: 600, lineHeight: 1.3 }}>{data.readme.headline}</h2>
                  {data.readme.body.map((para, i) => (
                    <p key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--fg-muted)", margin: "0 0 14px" }}><MD text={para} /></p>
                  ))}
                  <div style={{ marginTop: 8, marginBottom: 4 }}><StatBadges stats={data.stats} /></div>
                </div>
              </div>

              {/* pinned */}
              <div>
                <SectionTitle icon={<I.star width="15" height="15" />} count={data.pinned.length}>Pinned</SectionTitle>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="pin-grid">
                  {data.pinned.map((r, i) => <RepoCard key={i} {...r} />)}
                </div>
              </div>

              {/* contribution graph */}
              <div className="card" style={{ padding: "20px 24px" }}>
                <div style={{ fontSize: 14, marginBottom: 16, color: "var(--fg-muted)" }}>
                  <strong style={{ color: "var(--fg)", fontWeight: 600 }}>A decade of shipping.</strong> Career activity, reimagined as a contribution graph.
                </div>
                <ContribGraph />
              </div>
            </div>
          )}

          {tab === "experience" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <SectionTitle icon={<I.repo width="15" height="15" />} count={data.experience.length}>Experience repositories</SectionTitle>
              {data.experience.map((job, i) => <CollapsibleRepo key={i} job={job} defaultOpen={i < 2} />)}
              <div className="card" style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
                <span style={{ color: "var(--fg-muted)" }}><I.cal /></span>
                <span style={{ fontSize: 13 }}><strong style={{ fontWeight: 600 }}>{data.education.school}</strong> · {data.education.year}</span>
              </div>
            </div>
          )}

          {tab === "skills" && (
            <div>
              <SectionTitle icon={<I.dot width="15" height="15" />}>Languages & tools</SectionTitle>
              <div className="card" style={{ padding: 24 }}><SkillBars skills={data.skills} /></div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

window.ClassicDirection = ClassicDirection;
