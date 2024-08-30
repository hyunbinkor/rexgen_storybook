export const iconType = ["person", "dashboard", " camera"] as const;
export const iconRole = [
  "button",
  "presentation",
  "alert",
  "search",
  "navigation",
] as const;
export const iconColor = [
  "primary",
  "secondary",
  "grayscale",
  "black",
  "white",
] as const;

export type iconType = (typeof iconType)[number];
export type iconRole = (typeof iconRole)[number];
export type iconColor = (typeof iconColor)[number];
