import { Icon, type IconProps } from "@iconify/react";
import _React from "react";

interface IconCompProps extends Omit<IconProps, "icon"> {
  name: string;
  size?: number;
}

export default function IconComp({ name, size = 30, ...props }: IconCompProps) {
  return <Icon icon={name} fontSize={size} {...props} />;
}
