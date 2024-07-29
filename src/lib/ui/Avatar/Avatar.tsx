import Image from "next/image";
import { AvatarProps } from "./AvatarTypes";
import clsx from "clsx";

export const Avatar = ({ className, ...imageProps }: AvatarProps) => {
  return (
    <div className={clsx("rounded-full overflow-hidden", className)}>
      <Image {...imageProps} alt={imageProps.alt} />
    </div>
  );
};
