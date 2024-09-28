import type { Comment, Post } from './types';
export type PostApi = {
  getPosts: () => Promise<Post[]>;
  getPostComments: (postId: number) => Promise<Comment[]>;
};

// 모든 포스트 받아오기
export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!response.ok) {
      throw new Error('포스트 리스트 받아오기 실패했습니다.');
    }
    const data: Post[] = (await response.json()) as Post[];
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; // Re-throw the error to handle it in the caller function
  }
};

//특정 포스트의 댓글 받아오기
export const getPostComments = async (postId: number): Promise<Comment[]> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    );
    if (!response.ok) {
      throw new Error('댓글 리스트 받아오기 실패했습니다.');
    }
    const data: Comment[] = (await response.json()) as Comment[];
    return data;
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    throw error;
  }
};
