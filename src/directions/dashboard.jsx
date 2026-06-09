/* ===== Direction 3: Career Dashboard ===== */
const TAG_COLORS = {
  "Copilot Studio": "#0969da", "Jira": "#2f81f7", "SAP": "#bf8700", "Azure": "#0969da",
  "Microsoft Fabric": "#1a7f37", "Azure Data Factory": "#3178c6", "Power Platform": "#742774",
  "Power Automate": "#742774", "Power Apps": "#8250df", "Intune": "#1a7f37",
  "Power Automate Desktop": "#742774", "ServiceNow": "#6cc24a", "PowerShell": "#012456",
  "O365": "#d83b01", "SCCM": "#bf8700", "Windows": "#0969da", "Support": "#59636e",
};
function tagColor(t) { return TAG_COLORS[t] || "#59636e"; }

function LangBar({ tags }) {
  return (
    <div>
      <div style={{ display: "flex", height: 8, borderRadius: 999, overflow: "hidden", gap: 2 }}>
        {tags.map((t, i) => <div key={i} style={{ flex: 1, background: tagColor(t) }} />)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 10 }}>
        {tags.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--fg-muted)" }}>
            <span className="dot" style={{ width: 9, height: 9, background: tagColor(t) }} />{t}
          </span>
        ))}
      </div>
    </div>
  );
}

function RoleRepo({ job, idx }) {
  const [open, setOpen] = useState(false);
  const slug = job.org.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return (
    <div className="card" style={{ padding: "18px 20px" }}>
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ color: "var(--fg-muted)" }}><I.repo /></span>
            <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: 17, fontWeight: 600 }}>{slug}</a>
            <span className="mono" style={{ fontSize: 12, color: "var(--fg-muted)" }}>/{job.role.split(",")[0].toLowerCase().replace(/[^a-z0-9]+/g, "-")}</span>
            {job.current ? <span className="label green" style={{ fontSize: 11 }}><span className="dot" style={{ width: 7, height: 7, background: "var(--success)" }} />current</span>
              : <span className="label" style={{ fontSize: 11 }}>archived</span>}
          </div>
          <p style={{ margin: "10px 0 0", fontSize: 13.5, color: "var(--fg-muted)", lineHeight: 1.55 }}>{job.summary}</p>
        </div>
        <div style={{ flex: "none", textAlign: "right", fontSize: 12, color: "var(--fg-muted)" }}>
          <div className="mono">{job.start} – {job.end}</div>
        </div>
      </div>

      <div style={{ margin: "16px 0 14px" }}><LangBar tags={job.tags} /></div>

      <button onClick={() => setOpen(!open)} style={{
        display: "flex", alignItems: "center", gap: 6, background: "transparent", border: "none",
        color: "var(--accent)", cursor: "pointer", fontFamily: "var(--sans)", fontSize: 13, padding: 0, fontWeight: 500,
      }}>
        <span style={{ transform: open ? "rotate(0)" : "rotate(-90deg)", transition: "transform .18s", display: "inline-flex" }}><I.chevron /></span>
        {open ? "Hide" : `${job.points.length} commits`}
      </button>
      {open && (
        <ul style={{ margin: "14px 0 0", paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
          {job.points.map((pt, i) => (
            <li key={i} style={{ display: "flex", gap: 12, fontSize: 13, lineHeight: 1.55, padding: "12px 0", borderBottom: i < job.points.length - 1 ? "1px solid var(--border-muted)" : "none" }}>
              <span className="mono" style={{ color: "var(--fg-subtle)", flex: "none", fontSize: 12 }}>{(idx + 1) + "." + (i + 1)}</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function DashboardDirection({ data }) {
  const p = data.profile;
  const [q, setQ] = useState("");
  const filtered = data.experience.filter(j =>
    (j.role + j.org + j.tags.join(" ")).toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "24px 24px 80px" }}>
      {/* hero */}
      <div className="card" style={{ padding: 0, overflow: "hidden", marginBottom: 24 }}>
        <div style={{ padding: "28px 32px", display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", borderBottom: "1px solid var(--border)" }}>
          <Avatar size={96} />
          <div style={{ flex: 1, minWidth: 240 }}>
            <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: "-0.01em" }}>{p.name}</h1>
            <div style={{ color: "var(--fg-muted)", fontSize: 15, marginTop: 2 }}>{p.title}</div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 10, fontSize: 12.5, color: "var(--fg-muted)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><I.pin width="14" height="14" />{p.location}</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><I.mail width="14" height="14" /><a href={`mailto:${p.email}`}>{p.email}</a></span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><I.verified width="14" height="14" />MS Success Story</span>
            </div>
          </div>
          <a className="btn primary" href={p.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
        </div>
        <div style={{ padding: "20px 32px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="stat-grid">
          {data.stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* contribution hero */}
      <div className="card" style={{ padding: "22px 28px", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
          <h2 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>10 years of shipping</h2>
          <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>career activity, as a contribution graph</span>
        </div>
        <ContribGraph />
      </div>

      {/* pinned strip */}
      <div style={{ marginBottom: 24 }}>
        <SectionTitle icon={<I.star width="15" height="15" />} count={data.pinned.length}>Pinned projects</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="pin3-grid">
          {data.pinned.map((r, i) => <RepoCard key={i} {...r} />)}
        </div>
      </div>

      {/* repositories (roles) with filter */}
      <SectionTitle icon={<I.repo width="15" height="15" />} count={data.experience.length}
        right={
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Find a role…"
              style={{ fontFamily: "var(--sans)", fontSize: 13, padding: "5px 12px", borderRadius: 6, border: "1px solid var(--border)", background: "var(--canvas)", color: "var(--fg)", width: 160 }} />
          </div>
        }>Career repositories</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {filtered.map((job, i) => <RoleRepo key={i} job={job} idx={i} />)}
        {filtered.length === 0 && <div className="card" style={{ padding: 24, textAlign: "center", color: "var(--fg-muted)" }}>No roles match “{q}”.</div>}
      </div>

      {/* skills + education footer */}
      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
        <div className="card" style={{ padding: 24 }}>
          <SectionTitle icon={<I.dot width="15" height="15" />}>Languages & tools</SectionTitle>
          <SkillBars skills={data.skills} />
          <hr className="divider" />
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--fg-muted)" }}>
            <I.cal width="15" height="15" /><span><strong style={{ color: "var(--fg)", fontWeight: 600 }}>{data.education.school}</strong> · {data.education.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

window.DashboardDirection = DashboardDirection;
