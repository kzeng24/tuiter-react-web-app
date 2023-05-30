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
        <div className="col-sm-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col-sm-10 col-lg-7 col-xl-7">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        <div className="d-sm-none d-lg-block col-lg-4 col-xl-3">
          <WhoToFollowList />
        </div>
      </div>
    </div>
  );
}
export default Tuiter;
