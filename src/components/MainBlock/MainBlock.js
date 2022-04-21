import { Sidebar } from "./Sidebar/Sidebar";
import "./MainBlock.css";
import { Route } from "react-router-dom";
import { POSTS_URL } from "../../Utils/constants";
import { useFetchPosts } from "../../Utils/hooks";
import { BlogPage } from '../../pages/BlogPage/BlogPage';

export const MainBlock = ({ setIsLoggedIn }) => {
  const postsData = useFetchPosts(POSTS_URL);

  return (
    <>
      <Sidebar setIsLoggedIn={setIsLoggedIn} />
      <main className="mainBlock">
        <Route exact path="/blog">
          <BlogPage title="Posts" {...postsData} />
        </Route>

        <Route exact path='/favourite'>
          <BlogPage title="Favourite posts" {...postsData} isLikedPosts />
        </Route>

      </main>
    </>
  );
};
