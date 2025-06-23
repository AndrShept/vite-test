import { client } from '@/main';

export const deletePost = async (id: string) => {
  const res = await client.post[':id'].delete.$delete({ param: { id } });
  return res.json();
};
 export const likePost = async (id: string) => {
  const res = await client.post[':id'].like.$put({
    param: { id },
  });
  return res.json();
};