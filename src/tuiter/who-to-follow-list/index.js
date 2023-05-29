import React from "react";
// get array from json
import whoArray from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";
const WhoToFollowList = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <h3>Who to follow</h3>
      </li>
      {whoArray.map((who) => (
        <WhoToFollowListItem key={who._id} who={who} />
      ))}
    </ul>
  );
};
export default WhoToFollowList;
