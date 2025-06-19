import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
export const Route = createFileRoute('/(home)/about')({
  component: About,
  beforeLoad({ context }) {
    console.log(context.auth);
  },
});

function About() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (isShow) {
      console.log('show');
    }
  }, [isShow]);
  return (
    <div className='p-2'>
      Hello from About!
      <Button onClick={() => setIsShow((prev) => !prev)}>GP</Button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={'outline'}>
            Open
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
<p className="tabular-nums text-indigo-500 font-semibold">12121</p>
<p className="text-shadow-fuchsia-300 text-custom-50 font-bold">90909</p>
    </div>
  );
}
