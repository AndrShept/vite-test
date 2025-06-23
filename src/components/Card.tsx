import { cn } from '@/lib/utils';
import { usePost, type PostType } from '@/store/post-store';
import React, {
  memo,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface Props {
  post: PostType;
}

export const Card = memo(function Card({ post }: Props) {
  console.log('card');
  const onChange = usePost((state) => state.onChange);
  const onDelete = usePost((state) => state.onDelete);
  // const { onChange, onDelete } = usePost(state => state);

  return (
    <article
      onClick={() => onChange(post.id)}
      className={cn('border p-10 hover:bg-secondary/30 ', {
        'border-green-500': post.isSelected,
      })}
    >
      {post.name}
      <button
        onClick={() => onDelete(post.id)}
        className='text-red-500 hover:bg-secondary rounded-md border size-7 flex items-center justify-center   '
      >
        X
      </button>
    </article>
  );
});
