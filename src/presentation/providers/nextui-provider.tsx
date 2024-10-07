import { NextUIProvider } from "@nextui-org/react";
import type { PropsWithChildren } from "react";

export default function NextUiProvider({ children }: PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
