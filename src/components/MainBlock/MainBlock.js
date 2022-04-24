import { Sidebar } from "./Sidebar/Sidebar";
import "./MainBlock.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { POSTS_URL } from "../../Utils/constants";
import { useFetchPosts } from "../../Utils/hooks";
import { BlogPage } from "../../pages/BlogPage/BlogPage";
import { NoMatch } from "../../pages/NoMatch/NoMatch";

export const MainBlock = ({ setIsLoggedIn }) => {
  const postsData = useFetchPosts(POSTS_URL);

  return (
    <>
      <Sidebar setIsLoggedIn={setIsLoggedIn} />
      <main className="mainBlock">
        <Switch>
          <Route path="/blog">
            <BlogPage title="Posts" {...postsData} />
          </Route>

          <Route path="/favourite">
            <BlogPage title="Favourite posts" {...postsData} isLikedPosts />
          </Route>

          <Route exact path='/'>
          <Redirect to='/blog' />
        </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </main>
    </>
  );
};
