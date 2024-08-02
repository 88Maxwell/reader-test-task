import { useState } from "react";

export const useToggle = (defaultValue?: boolean) => {
  const [v, setV] = useState(defaultValue || false);
  const onToggle = () => setV((v) => !v);
  const on = () => setV(true);
  const off = () => setV(false);

  return [v, { onToggle, on, off }] as const;
};
