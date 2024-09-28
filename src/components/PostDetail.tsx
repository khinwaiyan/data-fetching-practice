import { useEffect, useState } from 'react';

import { getPostComments } from '../utils/postApi';
import type { Comment, Post } from '../utils/types';
type PostDetailProps = {
  selectedPost: Post | undefined;
};
export const PostDetail: React.FC<PostDetailProps> = ({ selectedPost }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    let ignore = false;
    if (selectedPost !== undefined) {
      setLoadingComments(true);
      getPostComments(selectedPost.id)
        .then((data: Comment[]) => {
          if (!ignore) {
            setComments(data);
            setLoadingComments(false);
          }
        })
        .catch((error: unknown) => {
          if (!ignore) {
            console.error(error);
            setLoadingComments(false);
          }
        });
    }
    return () => {
      ignore = true;
    };
  }, [selectedPost]);

  return (
    <div className="PostDetailWrapper w-2/3 p-4">
      <div className="ContentWrapper pb-4">
        <h1 className="text-3xl">내용</h1>
        <div className="Content py-4">{selectedPost?.body}</div>
      </div>
      <div className="CommentWrapper">
        <h1 className="text-3xl">댓글</h1>
        {loadingComments ? (
          <div className="CommentList flex justify-center items-center h-96">
            <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="CommentList divide-y-2 divide-solid">
            {comments.map((comment) => (
              <div className="Comment" key={comment.id}>
                <h3 className="CommentWriter pt-4">작성자: {comment.email}</h3>
                <div className="CommentContent py-4">{comment.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
