import type { ReactNode } from "react";

export type Option<Label = ReactNode, Value = string> = {
  value: Value;
  label: Label;
};
