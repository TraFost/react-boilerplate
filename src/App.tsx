import _React from "react";

import { RouteProvider, StoreProvider } from "@providers/index";

export default function App() {
  return (
    <StoreProvider>
      <RouteProvider />
    </StoreProvider>
  );
}
