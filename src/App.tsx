import React from "react";

import StoreProvider from "@providers/store-provider";

export default function App() {
  return (
    <StoreProvider>
      <div>App</div>
    </StoreProvider>
  );
}
