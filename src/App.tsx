import './reset.css';
import './styles/tailwind.css';

import { PostDetail } from './components/PostDetail';
import { PostList } from './components/PostList';

export const App = () => {
  return (
    <div className="Wrapper flex divide-x-2 divide-solid">
      <PostList />
      <PostDetail />
    </div>
  );
};
