export const btnSize = ["small", "medium", "large"] as const;
export const btnVariant = ["contained", "text"] as const;
export const btnColor = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
] as const;

export type btnSize = (typeof btnSize)[number];
export type btnVariant = (typeof btnVariant)[number];
export type btnColor = (typeof btnColor)[number];
