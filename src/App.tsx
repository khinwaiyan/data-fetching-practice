import './reset.css';
import './styles/tailwind.css';

export const App = () => {
  return (
    <div className="Wrapper flex divide-x-2 divide-solid">
      <div className="PostWrapper w-1/3 p-4">
        <h1 className="text-3xl">포스트 목록</h1>
        <div className="PostList">
          <h3 className="py-4 hover:bg-pink-50 focus:bg-pink-300">
            <span className="font-bold">1. </span>quia et suscipit suscipit
            recusandae consequuntur expedita et cum
          </h3>
          <h3 className="py-4 hover:bg-pink-50 focus:bg-pink-300">
            <span className="font-bold">2. </span>quia et suscipit suscipit
            recusandae consequuntur expedita et cum
          </h3>
          <h3 className="py-4 hover:bg-pink-50 focus:bg-pink-300">
            <span className="font-bold">3. </span>quia et suscipit suscipit
            recusandae consequuntur expedita et cum
          </h3>
        </div>
      </div>
      <div className="PostDetailWrapper w-2/3 p-4">
        <div className="ContentWrapper pb-4">
          <h1 className="text-3xl">내용</h1>
          <div className="Content py-4">
            quia et suscipit suscipit recusandae consequuntur expedita et cum
            reprehenderit molestiae ut ut quas totam nostrum rerum est autem
            sunt rem eveniet architecto
          </div>
        </div>
        <div className="CommentWrapper">
          <h1 className="text-3xl">댓글</h1>
          <div className="CommentList divide-y-2 divide-solid">
            <div className="Comment">
              <h3 className="CommentWriter pt-4">작성자: Eliseo@gardner.biz</h3>
              <div className="CommentContent py-4">
                laudantium enim quasi est quidem magnam voluptate ipsam eos
                tempora quo necessitatibus dolor quam autem quasi reiciendis et
                nam sapiente accusantium
              </div>
            </div>
            <div className="Comment">
              <h3 className="CommentWriter pt-4">작성자: Eliseo@gardner.biz</h3>
              <div className="CommentContent py-4">
                laudantium enim quasi est quidem magnam voluptate ipsam eos
                tempora quo necessitatibus dolor quam autem quasi reiciendis et
                nam sapiente accusantium
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
