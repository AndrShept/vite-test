import type { Post } from '@/shared/types';
import React, { memo } from 'react';
import { Button } from './ui/button';
import { client } from '@/main';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getPostsOptions } from '@/api/get-posts';
import { HeartIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { deletePost, likePost } from '@/api/post-api';

export const NewPostCard = memo(
  ({ post }: { post: Post }) => {
    console.log('render-card');
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
      mutationFn: deletePost,
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: getPostsOptions().queryKey,
        });
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
    return (
      <div key={post.id} className='flex items-center gap-1'>
        <p>{post.name}</p>
        <Button
          disabled={isPending || likePostMutation.isPending}
          onClick={() => mutate(post.id.toString())}
          variant={'secondary'}
          size={'icon'}
        >
          X
        </Button>

        <Button
          disabled={isPending || likePostMutation.isPending}
          onClick={() => likePostMutation.mutate(post.id.toString())}
          variant={'secondary'}
          size={'icon'}
        >
          <HeartIcon className={cn(post.isLiked &&'fill-white')} />
        </Button>
        <p>{post.id}</p>
      </div>
    );
  }
);
