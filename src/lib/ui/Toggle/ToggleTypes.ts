import { Option } from "../types";

export interface ToggleProps {
  option1: Option;
  option2: Option;
  value: Option;
  name: string;
  className?: string;
  onChange?: (o: Option) => void;
}
