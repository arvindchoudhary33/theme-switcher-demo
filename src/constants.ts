export const THEMES = {
  BLACKWHITE: "blackwhite",
  DARK: "dark",
  GRUVBOX: "gruvbox",
  GRUVBOX_DARK: "gruvbox-dark",
  TOKYONIGHT: "tokyonight",
  ROSEPINE: "rosepine",
  ROSEPINE_DARK: "rosepine-dark",
  NORD: "nord",
  DRACULA: "dracula",
  SOLARIZED_DARK: "solarized-dark",
  CATPPUCCIN_MOCHA: "catppuccin-mocha",
  ONE_DARK: "one-dark",
  NIGHTOWL: "nightowl",
  MIDNIGHT: "midnight-gray",
} as const;

export type ThemeName = (typeof THEMES)[keyof typeof THEMES];

export const themeNames: ThemeName[] = Object.values(THEMES);

export const themeLabels: Record<ThemeName, string> = {
  [THEMES.BLACKWHITE]: "Black & White",
  [THEMES.DARK]: "Dark",
  [THEMES.GRUVBOX]: "Gruvbox",
  [THEMES.GRUVBOX_DARK]: "Gruvbox Dark",
  [THEMES.TOKYONIGHT]: "Tokyo Night",
  [THEMES.ROSEPINE]: "Rosé Pine",
  [THEMES.ROSEPINE_DARK]: "Rosé Pine Dark",
  [THEMES.NORD]: "Nord",
  [THEMES.DRACULA]: "Dracula",
  [THEMES.SOLARIZED_DARK]: "Solarized Dark",
  [THEMES.CATPPUCCIN_MOCHA]: "Catppuccin Mocha",
  [THEMES.ONE_DARK]: "One Dark",
  [THEMES.NIGHTOWL]: "Night Owl",
  [THEMES.MIDNIGHT]: "Mid Night",
};
