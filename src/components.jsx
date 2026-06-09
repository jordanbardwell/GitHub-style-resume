/* ===== Shared components & icons ===== */
/* React + hooks (useState, useMemo, ...) are provided by the Vite jsxInject prelude. */

/* ---------- icons (simple, original line glyphs) ---------- */
const I = {
  pin: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M8 0a5 5 0 0 0-5 5c0 3.2 4.2 9.4 4.6 9.9a.5.5 0 0 0 .8 0C8.8 14.4 13 8.2 13 5a5 5 0 0 0-5-5Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/></svg>,
  mail: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M1.5 3h13A1.5 1.5 0 0 1 16 4.5v7A1.5 1.5 0 0 1 14.5 13h-13A1.5 1.5 0 0 1 0 11.5v-7A1.5 1.5 0 0 1 1.5 3Zm.3 1.3 6.2 4.1 6.2-4.1H1.8Z"/></svg>,
  link: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M7.8 4.6a3 3 0 0 1 4.2 0l.4.4a3 3 0 0 1 0 4.2l-1.8 1.8a3 3 0 0 1-4.2 0 .75.75 0 0 1 1.06-1.06 1.5 1.5 0 0 0 2.12 0l1.8-1.8a1.5 1.5 0 0 0 0-2.12l-.4-.4a1.5 1.5 0 0 0-2.12 0l-.6.6A.75.75 0 0 1 7.2 5.2l.6-.6Zm-3.6 6.8a3 3 0 0 1-4.2 0l-.4-.4a3 3 0 0 1 0-4.2L1.4 5a3 3 0 0 1 4.2 0 .75.75 0 0 1-1.06 1.06 1.5 1.5 0 0 0-2.12 0L.62 7.86a1.5 1.5 0 0 0 0 2.12l.4.4a1.5 1.5 0 0 0 2.12 0l.6-.6A.75.75 0 1 1 4.8 10.8l-.6.6Z"/></svg>,
  org: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .78.78 0 1.75 0h8.5C11.22 0 12 .78 12 1.75v12.5c0 .09 0 .17-.02.25h2.27a.25.25 0 0 0 .25-.25V8.5h-1.5a.75.75 0 0 1 0-1.5h1.5A1.5 1.5 0 0 1 16 8.5v5.75A1.75 1.75 0 0 1 14.25 16ZM1.5 1.75v12.5c0 .14.11.25.25.25H4v-2.25c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V14.5h1.75a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3 4.75A.75.75 0 0 1 3.75 4h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 4.75ZM7.75 4a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM3 8.75A.75.75 0 0 1 3.75 8h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 8.75ZM7.75 8a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"/></svg>,
  star: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M8 .25a.75.75 0 0 1 .67.42l1.94 3.93 4.34.63a.75.75 0 0 1 .42 1.28l-3.14 3.06.74 4.32a.75.75 0 0 1-1.08.79L8 12.85l-3.88 2.04a.75.75 0 0 1-1.08-.79l.74-4.32L.63 6.71a.75.75 0 0 1 .41-1.28l4.34-.63L7.33.67A.75.75 0 0 1 8 .25Z"/></svg>,
  repo: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H4.5a1 1 0 0 0 0 2h8.75a.75.75 0 0 1 0 1.5H4.5A2.5 2.5 0 0 1 2 14.5Zm10.5 10V1.5H4.5a1 1 0 0 0-1 1v9.04A2.5 2.5 0 0 1 4.5 11.5Z"/></svg>,
  fork: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 2.12a2.25 2.25 0 1 0-1.5 0v1.255A2.25 2.25 0 0 0 5.75 8.75h1.5v2.13a2.25 2.25 0 1 0 1.5 0V8.75h1.5a2.25 2.25 0 0 0 2.25-2.25V5.37a2.25 2.25 0 1 0-1.5 0v1.13a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75ZM8 13.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm4-9a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"/></svg>,
  cal: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2h1A1.75 1.75 0 0 1 16 3.75v10.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V3.75A1.75 1.75 0 0 1 1.75 2h1V.75A.75.75 0 0 1 4.75 0ZM1.5 6.5v7.75c0 .14.11.25.25.25h12.5a.25.25 0 0 0 .25-.25V6.5Z"/></svg>,
  sun: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-9.5a.75.75 0 0 1 .75.75V3.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 8 1.5Zm0 11a.75.75 0 0 1 .75.75v1.25a.75.75 0 0 1-1.5 0V13.25A.75.75 0 0 1 8 12.5ZM14.5 8a.75.75 0 0 1-.75.75H12.5a.75.75 0 0 1 0-1.5h1.25A.75.75 0 0 1 14.5 8Zm-11 0a.75.75 0 0 1-.75.75H1.5a.75.75 0 0 1 0-1.5h1.25A.75.75 0 0 1 3.5 8Zm9.04-4.54a.75.75 0 0 1 0 1.06l-.88.88a.75.75 0 1 1-1.06-1.06l.88-.88a.75.75 0 0 1 1.06 0ZM5.4 10.6a.75.75 0 0 1 0 1.06l-.88.88a.75.75 0 0 1-1.06-1.06l.88-.88a.75.75 0 0 1 1.06 0Zm7.14 1.94a.75.75 0 0 1-1.06 0l-.88-.88a.75.75 0 1 1 1.06-1.06l.88.88a.75.75 0 0 1 0 1.06ZM5.4 5.4a.75.75 0 0 1-1.06 0l-.88-.88a.75.75 0 0 1 1.06-1.06l.88.88a.75.75 0 0 1 0 1.06Z"/></svg>,
  moon: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M9.6 1.3a6.5 6.5 0 1 0 5.1 8.9.5.5 0 0 0-.62-.66 4.8 4.8 0 0 1-6.2-6.1.5.5 0 0 0-.66-.62 6.5 6.5 0 0 0 2.38-1.52Z"/></svg>,
  check: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L6.25 10.69l6.47-6.47a.75.75 0 0 1 1.06 0Z"/></svg>,
  dot: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><circle cx="8" cy="8" r="4"/></svg>,
  chevron: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" {...p}><path d="M12.78 6.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.22 7.28a.75.75 0 0 1 1.06-1.06L8 9.94l3.72-3.72a.75.75 0 0 1 1.06 0Z"/></svg>,
  read: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"/></svg>,
  verified: (p) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" {...p}><path d="m9.585.52.929.68c.153.112.331.186.518.215l1.138.175a2.25 2.25 0 0 1 1.872 1.872l.175 1.138c.029.187.103.365.215.518l.68.929a2.25 2.25 0 0 1 0 2.664l-.68.929a1.25 1.25 0 0 0-.215.518l-.175 1.138a2.25 2.25 0 0 1-1.872 1.872l-1.138.175a1.25 1.25 0 0 0-.518.215l-.929.68a2.25 2.25 0 0 1-2.664 0l-.929-.68a1.25 1.25 0 0 0-.518-.215L4.84 13.78a2.25 2.25 0 0 1-1.872-1.872l-.175-1.138a1.25 1.25 0 0 0-.215-.518l-.68-.929a2.25 2.25 0 0 1 0-2.664l.68-.929c.112-.153.186-.331.215-.518l.175-1.138A2.25 2.25 0 0 1 4.84 2.342l1.138-.175c.187-.029.365-.103.518-.215l.929-.68a2.25 2.25 0 0 1 2.664 0ZM11.28 6.28a.75.75 0 0 0-1.06-1.06L7 8.44 5.78 7.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0Z"/></svg>,
};

/* ---------- markdown-ish bold ---------- */
function MD({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return <>{parts.map((p, i) => p.startsWith("**") && p.endsWith("**")
    ? <strong key={i} style={{ fontWeight: 600, color: "var(--fg)" }}>{p.slice(2, -2)}</strong>
    : <React.Fragment key={i}>{p}</React.Fragment>)}</>;
}

/* ---------- avatar (real photo, monogram fallback) ---------- */
function Avatar({ size = 280, round = true, src }) {
  const photo = src || (window.RESUME && window.RESUME.profile && window.RESUME.profile.photo);
  if (photo) {
    return (
      <img src={photo} alt="Jordan Bardwell" style={{
        width: size, height: size, borderRadius: round ? "50%" : 16,
        objectFit: "cover", border: "1px solid var(--border)", flex: "none", display: "block",
      }} />
    );
  }
  return (
    <div className="gh-avatar" style={{
      width: size, height: size, borderRadius: round ? "50%" : 16,
      border: "1px solid var(--border)", background: "var(--canvas-inset)",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", flex: "none",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(135deg, var(--canvas-subtle) 0 14px, transparent 14px 28px)",
        opacity: 0.7,
      }} />
      <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: size * 0.3, color: "var(--fg-muted)", zIndex: 1 }}>JB</span>
      <span style={{ position: "absolute", bottom: size * 0.07, fontFamily: "var(--mono)", fontSize: 10, color: "var(--fg-subtle)", letterSpacing: 0.5, zIndex: 1 }}>your photo</span>
    </div>
  );
}

/* ---------- repo card ---------- */
function RepoCard({ name, desc, lang, langColor, stars, metric, login = "jordanbardwell" }) {
  return (
    <div className="repo-card card" style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--fg-muted)" }}><I.repo /></span>
        <a href="#" style={{ fontWeight: 600, fontSize: 15 }} onClick={(e) => e.preventDefault()}>{name}</a>
        <span className="label" style={{ fontSize: 11, padding: "0 7px" }}>Public</span>
      </div>
      <p style={{ margin: 0, color: "var(--fg-muted)", fontSize: 13, lineHeight: 1.5 }}>{desc}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 2, color: "var(--fg-muted)", fontSize: 12 }}>
        {lang && <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><span className="dot" style={{ background: langColor }} />{lang}</span>}
        {stars && <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><I.star width="13" height="13" />{stars}</span>}
        {metric && <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><I.fork width="13" height="13" />{metric}</span>}
      </div>
    </div>
  );
}

/* ---------- contribution graph (career heatmap, interactive years) ---------- */
function rng(seed) { let x = Math.sin(seed) * 10000; return x - Math.floor(x); }
function yearActivity(year) {
  // career ramp: more senior/active in recent years
  const map = { 2026: 0.92, 2025: 0.95, 2024: 0.88, 2023: 0.7, 2022: 0.74, 2021: 0.6, 2020: 0.62, 2019: 0.5, 2018: 0.42, 2017: 0.44, 2016: 0.4 };
  return map[year] ?? 0.5;
}
function ContribGraph({ compact = false }) {
  const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const [year, setYear] = useState(2025);
  const weeks = 52;
  const base = yearActivity(year);
  const cells = useMemo(() => {
    const arr = [];
    for (let w = 0; w < weeks; w++) {
      const col = [];
      for (let d = 0; d < 7; d++) {
        const r = rng(year * 1000 + w * 7 + d);
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
  const total = useMemo(() => cells.flat().filter(l => l > 0).length * 7 + Math.round(base * 380), [cells, base]);
  const months = ["Jan", "", "Feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "Jul", "", "Aug", "", "Sep", "", "Oct", "", "Nov", "", "Dec"];
  const gap = compact ? 2 : 3, cs = compact ? 9 : 11;
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <div style={{ flex: 1, minWidth: 0, overflowX: "auto" }}>
        <div style={{ display: "flex", gap: `${gap}px`, marginBottom: 4, paddingLeft: 2, fontSize: 10, color: "var(--fg-muted)" }}>
          {months.map((m, i) => <span key={i} style={{ width: cs + gap, flex: "none" }}>{m}</span>)}
        </div>
        <div style={{ display: "flex", gap: `${gap}px` }}>
          {cells.map((col, w) => (
            <div key={w} style={{ display: "flex", flexDirection: "column", gap: `${gap}px` }}>
              {col.map((lvl, d) => (
                <div key={d} title={`Level ${lvl}`} style={{
                  width: cs, height: cs, borderRadius: 2,
                  background: `var(--g${lvl})`,
                  outline: "1px solid rgba(27,31,36,0.06)", outlineOffset: -1,
                }} />
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8, fontSize: 11, color: "var(--fg-muted)" }}>
          <span><strong style={{ color: "var(--fg)", fontWeight: 600 }}>{total.toLocaleString()}</strong> contributions in {year}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>Less
            {[0, 1, 2, 3, 4].map(l => <span key={l} style={{ width: cs, height: cs, borderRadius: 2, background: `var(--g${l})`, outline: "1px solid rgba(27,31,36,0.06)", outlineOffset: -1 }} />)}
            More</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: "none" }}>
        {years.map(y => (
          <button key={y} onClick={() => setYear(y)} className="yr-btn" data-active={y === year}
            style={{
              fontFamily: "var(--sans)", fontSize: 12, textAlign: "right", cursor: "pointer",
              border: "1px solid transparent", borderRadius: 6, padding: "3px 10px",
              background: y === year ? "var(--accent-subtle)" : "transparent",
              color: y === year ? "var(--accent)" : "var(--fg-muted)",
              fontWeight: y === year ? 600 : 400, minWidth: 56,
            }}>{y}</button>
        ))}
      </div>
    </div>
  );
}

/* ---------- skill bars ---------- */
function SkillBars({ skills }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {skills.map((s, i) => (
        <div key={i}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
            <span className="dot" style={{ background: s.color }} />
            <span style={{ fontWeight: 600, fontSize: 13 }}>{s.group}</span>
            <span className="counter">{s.items.length}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {s.items.map((it, j) => (
              <span key={j} className="mono" style={{
                fontSize: 12, padding: "3px 9px", borderRadius: 999,
                border: "1px solid var(--border)", background: "var(--canvas-subtle)", color: "var(--fg-muted)",
              }}>{it}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- stat row ---------- */
function StatBadges({ stats, big = false }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: big ? 16 : 1, background: big ? "transparent" : "var(--border)", border: big ? "none" : "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
      {stats.map((s, i) => (
        <div key={i} style={{ background: "var(--canvas)", padding: big ? 0 : "16px 18px", textAlign: big ? "left" : "center" }}>
          <div style={{ fontSize: big ? 30 : 22, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--fg)" }}>{s.value}</div>
          <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 2 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- section header ---------- */
function SectionTitle({ icon, children, count, right }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid var(--border)" }}>
      {icon && <span style={{ color: "var(--fg-muted)" }}>{icon}</span>}
      <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{children}</h2>
      {count != null && <span className="counter">{count}</span>}
      <div style={{ flex: 1 }} />
      {right}
    </div>
  );
}

Object.assign(window, { I, MD, Avatar, RepoCard, ContribGraph, SkillBars, StatBadges, SectionTitle });
