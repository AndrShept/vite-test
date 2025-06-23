import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// Import the generated route tree
import { routeTree } from './routeTree.gen';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {hc} from 'hono/client'
import type {AppType} from '../../server/index'
// Create a new router instance

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
export interface MyRouterContext {
  queryClient: QueryClient;
  auth: string;
}
 export const client = hc<AppType>("/").api;

const queryClient = new QueryClient({});
// Render the app
const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: '',
  },
});
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} context={{ auth: 'sadasd' }} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
}
