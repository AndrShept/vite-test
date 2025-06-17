import { ThemeProvider } from '@/components/ThemeProvider';
import { createFileRoute, Link, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/(home)')({
  component: RouteComponent,

});

function RouteComponent() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='p-2 flex gap-2 '>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>{' '}
        <Link to='/about' className='[&.active]:font-bold'>
          About
        </Link>
        <hr />
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
      </div>
    </ThemeProvider>
  );
}
