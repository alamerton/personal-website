export const themes = [
  { id: "classic", label: "Classic" },
  { id: "mist", label: "Mist" },
  { id: "paper", label: "Paper" },
  { id: "folio", label: "Folio" },
  { id: "octarine", label: "Octarine" },
];

export const DEFAULT_THEME = "folio";
export const THEME_STORAGE_KEY = "site-theme";

// Runs before first paint so a saved theme doesn't flash the default one.
export const restoreThemeScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t)document.documentElement.dataset.theme=t}catch(e){}`;
