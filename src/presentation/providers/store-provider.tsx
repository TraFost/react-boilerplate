import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function StoreProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

const queryClient = new QueryClient();
