import type { Post } from '../utils/types';
type PostListProps = {
  posts: Post[];
  onClickPost: (id: number) => void;
};
export const PostList: React.FC<PostListProps> = ({ posts, onClickPost }) => {
  return (
    <div className="PostWrapper w-1/3 p-4 h-screen overflow-y-auto">
      <h1 className="text-3xl">포스트 목록</h1>
      <div className="PostList">
        {posts.map((post) => (
          <h3
            key={post.id}
            className="py-4 hover:bg-pink-50 focus:bg-pink-300"
            onClick={() => {
              onClickPost(post.id);
            }}
          >
            <span className="font-bold">{post.id}. </span>
            {post.title}
          </h3>
        ))}
      </div>
    </div>
  );
};
