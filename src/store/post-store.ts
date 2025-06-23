import { create } from 'zustand';

export interface PostType {
  id: string;
  name: number;
  isSelected: boolean;
}

export interface PostStore {
  posts: PostType[];
  onChange: (id: string) => void;
  onDelete: (id: string) => void;
  addPost : (newPost: PostType) => void
}

const INITIAL_POSTS = Array.from({ length: 10 }, (_, idx) => ({
  name: idx,
  isSelected: false,
  id: Math.random().toString(),
}));

export const usePost = create<PostStore>((set) => ({
  posts: INITIAL_POSTS,
  onChange: (id) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id ? { ...post, isSelected: !post.isSelected } : post
      ),
    })),
  onDelete: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
  addPost : (newPost) => set((state) => ({posts: [newPost,...state.posts ]}))
}));
