import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/(home)/add')({
  component: RouteComponent,
});

function RouteComponent() {
  const [state, setState] = useState(false);
  console.log('page');
  useEffect(() => {
    console.log('effect');
  }, []);

  return (
    <div>
      Hello "/(home)/add"!
      <div></div>
    </div>
  );
}
