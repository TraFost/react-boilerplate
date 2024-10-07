import _React from "react";

import { NextUiProvider, RouteProvider, StoreProvider } from "@providers/index";

export default function App() {
  return (
    <StoreProvider>
      <NextUiProvider>
        <RouteProvider />
      </NextUiProvider>
    </StoreProvider>
  );
}
