import Nav from "../nav";
import {Routes, Route} from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import ExploreScreen from "./pages/explore-screen";
import HomeScreen from "./pages/home-screen";
import BookmarksScreen from "./pages/bookmarks-screen";
import ProfileScreen from "./pages/profile-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="col-2">
          <NavigationSidebar />
        </div>
        <div className="col-7">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        <div className="col-3">
          <WhoToFollowList />
        </div>
      </div>
    </div>
  );
}
export default Tuiter;