export type ThemeName =
  | "light"
  | "dark"
  | "gruvbox"
  | "gruvbox-dark"
  | "everforest-dark"
  | "tokyonight"
  | "rosepine"
  | "nord"
  | "dracula"
  | "solarized-dark"
  | "rosepine-dark"
  | "catppuccin-mocha"
  | "one-dark"
  | "nightowl"
  | "midnight";

export const THEME_NAMES: ThemeName[] = [
  "light",
  "dark",
  "gruvbox",
  "gruvbox-dark",
  "everforest-dark",
  "tokyonight",
  "rosepine",
  "nord",
  "dracula",
  "solarized-dark",
  "rosepine-dark",
  "catppuccin-mocha",
  "one-dark",
  "nightowl",
  "midnight",
];

export const THEME_LABELS: Record<ThemeName, string> = {
  light: "Light",
  dark: "Dark",
  gruvbox: "Gruvbox Light",
  "gruvbox-dark": "Gruvbox Dark",
  "everforest-dark": "Everforest Dark",
  tokyonight: "Tokyo Night",
  rosepine: "Rosé Pine",
  nord: "Nord",
  dracula: "Dracula",
  "solarized-dark": "Solarized Dark",
  "rosepine-dark": "Rosé Pine Dark",
  "catppuccin-mocha": "Catppuccin Mocha",
  "one-dark": "One Dark",
  nightowl: "Night Owl",
  midnight: "Midnight",
};

export const THEMES = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "gruvbox", label: "Gruvbox Light" },
  { value: "gruvbox-dark", label: "Gruvbox Dark" },
  { value: "everforest-dark", label: "Everforest Dark" },
  { value: "tokyonight", label: "Tokyo Night" },
  { value: "rosepine", label: "Rosé Pine" },
  { value: "nord", label: "Nord" },
  { value: "dracula", label: "Dracula" },
  { value: "solarized-dark", label: "Solarized Dark" },
  { value: "rosepine-dark", label: "Rosé Pine Dark" },
  { value: "catppuccin-mocha", label: "Catppuccin Mocha" },
  { value: "one-dark", label: "One Dark" },
  { value: "nightowl", label: "Night Owl" },
  { value: "midnight", label: "Midnight" },
];
