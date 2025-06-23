import { getPostsOptions } from '@/api/get-posts';
import { CustomSearch } from '@/components/CustomSearch';
import { Loading } from '@/components/Loading';
import { NewPost } from '@/components/NewPost';
import { PostCard } from '@/components/PostCard';
import { PostList } from '@/components/PostList';
import { TestDropDown } from '@/components/TestDropDown';
import { Button } from '@/components/ui/button';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(home)/about')({
  component: About,
  beforeLoad({ context }) {
    console.log(context.auth);
  },
});

function About() {
  console.log('about');
  return (
    <div className='flex flex-col gap-2'>
      <CustomSearch />
      <TestDropDown />
      <NewPost />
      <PostList />
    </div>
  );
}
