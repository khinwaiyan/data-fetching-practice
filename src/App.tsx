import './styles/reset.css';
import './styles/tailwind.css';

import { useEffect, useState } from 'react';

import { PostDetail } from './components/PostDetail';
import { PostList } from './components/PostList';
import { getPosts } from './utils/postApi';
import type { Post } from './utils/types';

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number>(1);
  useEffect(() => {
    let ignore = false;
    getPosts()
      .then((data: Post[]) => {
        if (!ignore) setPosts(data);
      })
      .catch((error: unknown) => {
        if (!ignore) {
          console.error(error);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);
  const selectedPost = posts.find((post) => post.id === selectedPostId);
  return (
    <div className="Wrapper flex divide-x-2 divide-solid">
      <PostList
        selectedPostId={selectedPostId}
        posts={posts}
        onClickPost={setSelectedPostId}
      />
      <PostDetail selectedPost={selectedPost} />
    </div>
  );
};
