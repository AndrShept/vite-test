import { ThemeProvider } from '@/components/ThemeProvider';
import {
  createRootRoute,
  createRootRouteWithContext,
  Link,
  Outlet,
  redirect,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type { QueryClient } from '@tanstack/react-query';
import type { MyRouterContext } from '@/main';

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => {
    return (
      <>
        <Outlet />
      </>
    );
  },
});
