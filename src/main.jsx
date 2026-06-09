// Production entry — bundles the resume and mounts <App> (formerly the in-browser-Babel
// inline script). jsxInject (see vite.config.js) gives this module `React`; we pull prod
// react-dom here.
import { createRoot } from "react-dom/client";

// Styles + data + the resume photo, bundled & hashed by Vite.
import "./styles.css";
import "./data.js"; // sets window.RESUME
import photoUrl from "./jordan.jpeg";

// Side-effecting modules — each assigns its components onto `window`.
// Order matters only in that all must run before <App> renders (imports do that).
import "./components.jsx";              // window.I, Avatar, RepoCard, ...
import "./directions/refined.jsx";     // window.RefinedDirection
import "./directions/classic.jsx";     // window.ClassicDirection
import "./directions/readme.jsx";      // window.ReadmeDirection
import "./directions/dashboard.jsx";   // window.DashboardDirection
import "./tweaks-panel.jsx";           // window.useTweaks, TweaksPanel, Tweak* controls

// data.js hardcodes a relative "jordan.jpeg"; point it at the hashed bundle asset.
window.RESUME.profile.photo = photoUrl;

// These live on `window` (set by the imports above). In a module they aren't in
// lexical scope, so pull them in explicitly — same as the original used window.*.
const { useTweaks, TweaksPanel, TweakSection, TweakSelect, TweakToggle, TweakColor } = window;

const TWEAK_DEFAULTS = {
  direction: "refined",
  dark: false,
  accent: "#0969da",
};

const DIRECTIONS = {
  refined: (d) => <window.RefinedDirection data={d} />,
  classic: (d) => <window.ClassicDirection data={d} />,
  readme: (d) => <window.ReadmeDirection data={d} />,
  dashboard: (d) => <window.DashboardDirection data={d} />,
};
const DIR_LABELS = { refined: "Refined", classic: "Classic", readme: "README", dashboard: "Dashboard" };

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const data = window.RESUME;
  const theme = t.dark ? "dark" : "light";
  const render = DIRECTIONS[t.direction] || DIRECTIONS.refined;

  return (
    <div className="resume-root" data-theme={theme} style={{ "--accent": t.accent }}>
      <header className="gh-topbar">
        <div className="brand">
          <window.I.repo />
          <span>{data.profile.login}</span>
          <span className="mono"> / resume</span>
        </div>
        <div className="spacer"></div>
        <button className="btn icon" aria-label="Toggle theme" onClick={() => setTweak("dark", !t.dark)} title="Toggle theme">
          {t.dark ? <window.I.sun /> : <window.I.moon />}
        </button>
      </header>

      <div key={t.direction} className="fade-in">
        {render(data)}
      </div>

      <TweaksPanel>
        <TweakSection label="Layout" />
        <TweakSelect label="Direction" value={t.direction}
          options={Object.keys(DIRECTIONS).map((k) => ({ value: k, label: DIR_LABELS[k] }))}
          onChange={(v) => setTweak("direction", v)} />
        <TweakSection label="Theme" />
        <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak("dark", v)} />
        <TweakColor label="Accent" value={t.accent}
          options={["#0969da", "#1a7f37", "#8250df", "#59636e"]}
          onChange={(v) => setTweak("accent", v)} />
      </TweaksPanel>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
