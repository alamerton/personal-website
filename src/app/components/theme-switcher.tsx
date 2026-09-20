"use client";

import { useEffect, useState } from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY, themes } from "../themes";

// Development-only control for comparing looks. Remove once a theme is chosen.
const ThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    setActiveTheme(document.documentElement.dataset.theme ?? DEFAULT_THEME);
  }, []);

  const selectTheme = (themeId: string) => {
    document.documentElement.dataset.theme = themeId;
    setActiveTheme(themeId);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themeId);
    } catch {
      // Storage can be unavailable (private windows); the theme still applies.
    }
  };

  return (
    <div className="theme-switcher" role="group" aria-label="Theme">
      {themes.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          aria-pressed={activeTheme === id}
          onClick={() => selectTheme(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
