import _React from "react";

import { NextUiProvider, RouteProvider, StoreProvider } from "@/presentation/providers";

export default function App() {
  return (
    <StoreProvider>
      <NextUiProvider>
        <RouteProvider />
      </NextUiProvider>
    </StoreProvider>
  );
}
