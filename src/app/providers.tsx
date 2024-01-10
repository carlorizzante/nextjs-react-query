'use client';

import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export const Providers = ({ children }: React.PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
)