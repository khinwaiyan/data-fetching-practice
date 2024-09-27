import { Comment } from './Comment';
import { Content } from './Content';
export const PostDetail = () => {
  return (
    <div className="PostDetailWrapper w-2/3 p-4">
      <Content />
      <Comment />
    </div>
  );
};
