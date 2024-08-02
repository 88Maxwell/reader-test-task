import type { Option } from "../types";

export interface ToggleProps<L extends React.ReactNode, V extends string> {
  option1: Option<L, V>;
  option2: Option<L, V>;
  value?: Option<L, V>;
  name: string;
  className?: string;
  onChange?: (o: Option<L, V>) => void;
}
