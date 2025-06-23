import React, { memo } from 'react';
import { getPostsOptions } from '@/api/get-posts';
import { Loading } from '@/components/Loading';
import { NewPost } from '@/components/NewPost';
import { PostCard } from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const PostList = () => {
  const { data: posts, isLoading } = useQuery(getPostsOptions());
  if (isLoading) return 'LOADING';
  return (
    <ul className='p-2  grid  gap-3 md:grid-cols-3 grid-cols-2'>
      {posts?.map((post) => <PostCard key={post.id} post={post} />)}
    </ul>
  );
}
