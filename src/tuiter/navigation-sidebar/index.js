import React from "react";
import { useSelector } from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {BsTwitter} from "react-icons/bs";
import {BsFillHouseDoorFill} from "react-icons/bs";
import { RiNotification4Fill } from "react-icons/ri";
import {MdEmail} from "react-icons/md";
import {BsFillBookmarkFill} from "react-icons/bs";
import {GoListUnordered} from "react-icons/go";
import { GoPerson } from "react-icons/go";
import {FiMoreHorizontal} from "react-icons/fi";
import {IoMdLogIn } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";


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
      { text: "more", icon: <FiMoreHorizontal size={20} /> },
    ];
    const { currentUser } = useSelector((state) => state.user);

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
        {currentUser && (
          <Link
            to={"/tuiter/profile"}
            className={`list-group-item text-capitalize d-inline-flex ${
              active === "profile" ? "active" : ""
            }`}
          >
            <span className="pe-2">
              <GoPerson size={25} />
            </span>
            <span className="d-none d-xl-block">Profile</span>
          </Link>
        )}
        {!currentUser && (
          <Link
            to={"/tuiter/login"}
            className={`list-group-item text-capitalize d-inline-flex ${
              active === "login" ? "active" : ""
            }`}
          >
            <span className="pe-2">
              <IoMdLogIn size={25} />
            </span>
            <span className="d-none d-xl-block">Login</span>
          </Link>
        )}
        {!currentUser && (
          <Link
            to={"/tuiter/register"}
            className={`list-group-item text-capitalize d-inline-flex ${
              active === "register" ? "active" : ""
            }`}
          >
            <span className="pe-2">
              <RiLoginCircleFill size={25} />
            </span>
            <span className="d-none d-xl-block">Register</span>
          </Link>
        )}
        <button className="btn btn-primary mt-2 p-2 rounded-pill">Tweet</button>
      </div>
    </>
  );
};
export default NavigationSidebar;
