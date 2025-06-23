import { getPost } from '@/api/get-post';
import type { PostPlaceHolder } from '@/api/get-posts';
import { useEffect, useState } from 'react';

export const useGetPost = () => {
  const [post, setPost] = useState<null | PostPlaceHolder>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [startInterval, setStartInterval] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const data = async () => {
      try {
        setIsLoading(true);
        const post = await getPost();
        setPost(post);
      } catch (error) {
        setError(error as string);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    if (startInterval) {
      timer = setInterval(() => {
        data();
      }, 1000);
    }  else   {
      data();
    }
    return () => clearInterval(timer);
  }, [startInterval]);

  return {
    isLoading,
    post,
    error,
    startInterval,
    setStartInterval,
  };
};
