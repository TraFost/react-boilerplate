import { Icon, type IconProps } from "@iconify/react";
import React from "react";

interface IconCompProps extends Omit<IconProps, "icon"> {
  icon: string;
}

export default function IconComp({ icon, ...props }: IconCompProps) {
  return <Icon icon={icon} {...props} />;
}
