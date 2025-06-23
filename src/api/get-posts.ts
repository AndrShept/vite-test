import { keepPreviousData, queryOptions } from '@tanstack/react-query';

export interface PostPlaceHolder {
    
  id: number,
  title: string,
  body: string,
  userId: number

}

export const getPosts = async() =>  {
    // await new Promise(r => setTimeout(r, 2000))
    const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json() as PostPlaceHolder[]
  return data

}
 

export const getPostsOptions = () => queryOptions({
  queryKey: ['posts2'],
  queryFn: getPosts,
  placeholderData: keepPreviousData,
  staleTime: 60_000,
});
