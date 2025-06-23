import { usePost, type PostType } from '@/store/post-store';
import React, { memo, useState } from 'react';
import { Button } from './ui/button';

export const CreatePostFrom = memo(function CreatePostFrom() {
  const [name, setName] = useState(Math.random());
  const addPost = usePost(state => state.addPost)
  const onClick = () => {

addPost({
    id: Math.random().toString(),
    isSelected: false,
    name
})
  }
  return (
    <div>
      <input
        className='border p-4'
        value={name}
        type='number'
        onChange={(e) => setName(+e.target.value)}
      />
      <Button onClick={onClick}>Submit</Button>
    </div>
  );
});
