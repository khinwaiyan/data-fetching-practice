export const Comment = () => {
  return (
    <div className="CommentWrapper">
      <h1 className="text-3xl">댓글</h1>
      <div className="CommentList divide-y-2 divide-solid">
        <div className="Comment">
          <h3 className="CommentWriter pt-4">작성자: Eliseo@gardner.biz</h3>
          <div className="CommentContent py-4">
            laudantium enim quasi est quidem magnam voluptate ipsam eos tempora
            quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente
            accusantium
          </div>
        </div>
        <div className="Comment">
          <h3 className="CommentWriter pt-4">작성자: Eliseo@gardner.biz</h3>
          <div className="CommentContent py-4">
            laudantium enim quasi est quidem magnam voluptate ipsam eos tempora
            quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente
            accusantium
          </div>
        </div>
      </div>
    </div>
  );
};
