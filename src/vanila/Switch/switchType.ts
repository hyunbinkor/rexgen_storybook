export const switchSize = ["small", "medium", "large"] as const;
export const switchColor = [
  "primaryWhite",
  "secondaryWhite",
  "primaryGray",
  "secondaryGray",
] as const;

export type switchSize = (typeof switchSize)[number];
export type switchColor = (typeof switchColor)[number];
