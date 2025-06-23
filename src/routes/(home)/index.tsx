import { Card } from '@/components/Card';
import { ChangeButton } from '@/components/ChangeButton';
import { CreatePostFrom } from '@/components/CreatePostFrom';
import { CustomSearch } from '@/components/CustomSearch';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePost } from '@/store/post-store';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { useCallback, useState } from 'react';

const Index = () => {
  const posts = usePost((state) => state.posts);
  const [change, setChange] = useState(false);
  console.log('Index');

  return (
    <div
      className={cn('flex flex-col ', {
        'bg-indigo-800': change,
      })}
    >
      <CustomSearch/>
      <ChangeButton setChange={setChange} />
      <CreatePostFrom />
      <div className='p-2 grid gap-1 md:grid-cols-4 grid-cols-2 '>
        {posts.map((post, idx) => (
          <Card key={post.id} post={post} />
        ))}
        <p>sdasd</p>
        <Button>GO</Button>
      </div>
    </div>
  );
};
export const Route = createFileRoute('/(home)/')({
  component: Index,
});
