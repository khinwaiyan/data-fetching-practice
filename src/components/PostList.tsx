import type { Post } from '../utils/types';
type PostListProps = {
  selectedPostId?: number;
  posts: Post[];
  onClickPost: (id: number) => void;
};
export const PostList: React.FC<PostListProps> = ({
  selectedPostId,
  posts,
  onClickPost,
}) => {
  return (
    <div className="PostWrapper bg-pink-50 w-1/3 p-4 h-screen overflow-y-auto">
      <h1 className="text-3xl pb-4">포스트 목록</h1>
      <div className="PostList">
        {posts.map((post) => (
          <h3
            key={post.id}
            className={`p-4 rounded-lg my-4 hover:bg-gray-50 active:bg-white active:py-4 cursor-pointer ${
              selectedPostId === post.id ? 'bg-white' : ''
            }`}
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
