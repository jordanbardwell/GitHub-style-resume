import { defineConfig } from "vite";

// The resume source files (components.jsx, direction*.jsx, tweaks-panel.jsx) were
// written for in-browser Babel: they read `React` from a global and assign their
// components onto `window`. We keep that pattern untouched and let esbuild handle it:
//   - jsxInject injects `import React from 'react'` into every JSX module, so the
//     existing `const { useState } = React` / JSX calls resolve to bundled prod React.
//   - classic JSX runtime (esbuild default) matches the React.createElement style.
export default defineConfig({
  esbuild: {
    // Inject React + the hooks into every JSX module. The originals ran in one
    // shared browser-global scope where components.jsx's `const { useState } = React`
    // was visible everywhere; as bundled ES modules each file is isolated, so we
    // recreate those bindings per-module here.
    jsxInject: `import React from 'react'; const { useState, useMemo, useEffect, useRef, useCallback } = React;`,
  },
  build: {
    outDir: "dist",
    target: "es2018",
  },
});
