import type { PostPlaceHolder } from '@/api/get-posts';
import { cn } from '@/lib/utils';
import { useQueryClient } from '@tanstack/react-query';
import React, { memo } from 'react';

interface Props {
  post: PostPlaceHolder;
}

export const PostCard = memo(
  function PostCard({ post }: Props) {
    const queryClient = useQueryClient();
    console.log('card-POST');
    const onSelected = () => {
      queryClient.setQueryData(['posts'], (oldData: PostPlaceHolder[]) => {
        return oldData.map((old) =>
          old.id === post.id ? { ...old, userId: 1000 } : old
        );
      });
    };
    return (
      <article onClick={onSelected} className={cn('border  hover:bg-secondary p-3 ', {
        'border-green-500' : post.userId === 1000
      })}>
        <p className='line-clamp-4 '>{post.body}</p>
        <img src='/test.jpg' alt='' />
      </article>
    );
  },
  
);
