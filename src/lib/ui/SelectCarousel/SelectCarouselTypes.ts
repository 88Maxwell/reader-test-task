import type { Option } from "../types";

export interface SelectCarouselProps {
  options: Option[];
  value?: Option;
  name: string;
  className?: string;
  onChange?: (o: Option) => void;
}
