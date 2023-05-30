import React from "react";
import {Link, useLocation} from "react-router-dom";
import {BsTwitter} from "react-icons/bs";
import {BsFillHouseDoorFill} from "react-icons/bs";
import { RiNotification4Fill } from "react-icons/ri";
import {MdEmail} from "react-icons/md";
import {BsFillBookmarkFill} from "react-icons/bs";
import {GoListUnordered} from "react-icons/go";
import { GoPerson } from "react-icons/go";
import {FiMoreHorizontal} from "react-icons/fi";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = [
      { text: "home", icon: <BsTwitter size={20} /> },
      { text: "explore", icon: <BsFillHouseDoorFill size={20} /> },
      { text: "notifications", icon: <RiNotification4Fill size={20} /> },
      { text: "messages", icon: <MdEmail size={20} /> },
      { text: "bookmarks", icon: <BsFillBookmarkFill size={20} /> },
      { text: "lists", icon: <GoListUnordered size={20} /> },
      { text: "profile", icon: <GoPerson size={25} /> },
      { text: "more", icon: <FiMoreHorizontal size={20} /> },
    ];

  return (
    <>
      <div className="list-group">
        {links.map((link) => (
          <Link
            to={`/tuiter/${link.text}`}
            className={`list-group-item text-capitalize d-inline-flex ${
              active === link.text ? "active" : ""
            }`}
          >
            <span className="pe-2">{link.icon}</span>
            <span className="d-none d-xl-block">{link.text}</span>
          </Link>
        ))}
        <button className="btn btn-primary mt-2 p-2 rounded-pill">Tweet</button>
      </div>
    </>
  );
};
export default NavigationSidebar;
