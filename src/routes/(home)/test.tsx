import { Button } from '@/components/ui/button';
import { useGetPost } from '@/hooks/useGetPost';
import { client } from '@/main';
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import type { Post } from '@/shared/types';
import type { InferResponseType } from 'hono';
import { NewPostCard } from '@/components/NewPostCard';
import { useEffect, useMemo } from 'react';
import { HeartIcon } from 'lucide-react';
import { likePost } from '@/api/post-api';
import { getPostsOptions } from '@/api/get-posts';
export const Route = createFileRoute('/(home)/test')({
  component: RouteComponent,
});

const getPost = async () => {
  const res = await client.post.$get();
  return res.json();
};
const createPost = async () => {
  const res = await client.post.create.$post();
  return res.json();
};
function RouteComponent() {
  const queryClient = useQueryClient();
  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts2'],
    queryFn: getPost,
    staleTime: 60_000,
    placeholderData: keepPreviousData,
  });
  type PostResponse = InferResponseType<typeof client.post.$get>;

  const createPostMutation = useMutation({
    mutationFn: createPost,
    async onSuccess(data, variables, context) {
      queryClient.setQueryData<PostResponse>(['posts2'], (oldData) => {
        if (!oldData) return;
        return {
          ...oldData,
          data: [...oldData.data, data.data],
        };
      });
      // await queryClient.invalidateQueries({
      //   queryKey: ['posts'],
      // });
    },
  });
  const likePostMutation = useMutation({
    mutationFn: likePost,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: getPostsOptions().queryKey,
      });
    },
  });

  if (isLoading) return '..............';
  console.log('{PAGE}');

  return (
    <div className='flex flex-col'>
      <Button
        className='w-fit'
        disabled={createPostMutation.isPending}
        onClick={() => createPostMutation.mutate()}
      >
        create
      </Button>
      <Button
        disabled={false}
        onClick={() => likePostMutation.mutate(`427`)}
        variant={'secondary'}
        size={'icon'}
      >
        <HeartIcon />
      </Button>
      <ul className='flex flex-col gap-2'>
        {posts?.data.map((post, idx) => (
          <NewPostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
