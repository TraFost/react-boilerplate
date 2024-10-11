import { cn } from "@/utils/merge-classname";
import type { ComponentPropsWithoutRef } from "react";

type BaseButtonProps = ComponentPropsWithoutRef<"button">;

interface ButtonProps extends BaseButtonProps {
  type?: BaseButtonProps["type"];
}

export default function Button({ type = "button", children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn("px-4 py-2 text-white bg-blue-500 rounded-md", className)}
      type={type}
    >
      {children}
    </button>
  );
}
