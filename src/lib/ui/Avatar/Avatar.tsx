import Image from "next/image";
import clsx from "clsx";
import { AvatarProps } from "./AvatarTypes";

export function Avatar({ className, ...imageProps }: AvatarProps) {
  return (
    <div className={clsx("rounded-full overflow-hidden", className)}>
      <Image {...imageProps} alt={imageProps.alt} />
    </div>
  );
}
