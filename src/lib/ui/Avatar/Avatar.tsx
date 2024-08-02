import clsx from "clsx";
import Image from "next/image";
import type { AvatarProps } from "./AvatarTypes";

export function Avatar({ className, ...imageProps }: AvatarProps) {
  return (
    <div className={clsx("rounded-full overflow-hidden", className)}>
      <Image {...imageProps} alt={imageProps.alt} />
    </div>
  );
}
