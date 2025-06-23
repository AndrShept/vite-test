import React, { memo, useCallback, useMemo } from 'react';
import { Button } from './ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addPost } from '@/api/add-post';
import type { PostPlaceHolder } from '@/api/get-posts';

export const NewPost = memo(() => {
  const queryClient = useQueryClient();

    const addPostMutation = useMutation({
      mutationFn: addPost,

      onSuccess: async (data) => {
        console.log(data);

        queryClient.setQueryData(['posts'], (oldData: PostPlaceHolder[] = []) => {
          return [data, ...oldData];
        });
      },
    });
  const onMutate = (newPost: PostPlaceHolder) => {
    queryClient.setQueryData(['posts'], (data: PostPlaceHolder[]) => {
      return [newPost, ...data];
    });
  };
  return (
    <div>
      <Button
        onClick={() =>
          onMutate({
            id: Math.random(),
            body: 'dsa',
            title: 'dasdsadsa',
            userId: Math.random(),
          })
        }
        // onClick={() => addPostMutation.mutate()}
        // disabled={ addPostMutation.isPending}
      >
        add
      </Button>
    </div>
  );
})
