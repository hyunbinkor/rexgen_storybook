export const iconBtnSize = ["small", "medium", "large"] as const;
export const iconBtnVariant = ["contained", "text"] as const;
export const iconBtnColor = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
] as const;

export type iconBtnSize = (typeof iconBtnSize)[number];
export type iconBtnVariant = (typeof iconBtnVariant)[number];
export type iconBtnColor = (typeof iconBtnColor)[number];
