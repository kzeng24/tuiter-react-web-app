import React from "react";
import {BsChat} from "react-icons/bs";
import {AiOutlineRetweet} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {updateLikes} from "../reducers/tuits.reducer";

// renders a row of four columns as shown below each tuit here on the right. The first column displays the number of replies next to a message bubble icon. The second column displays the number of retuits next to a retuits icon. The third column displays the number of likes next to a heart icon. If the tuit has been liked, the heart should render in red or empty otherwise. If users like a tuit, the likes count increases by one and the heart turns red. If they unlike the tuit, the likes count decreases by one and the heart is not red. The last column displays a share icon.
function TuitStats({tuit}) {
    const dispatch = useDispatch();
    return (
      <div className="row p-2">
        <div className="col-3">
          <BsChat /> {tuit.replies}
        </div>
        <div className="col-3">
          <AiOutlineRetweet /> {tuit.retuits}
        </div>
        <div className="col-3">
          <span onClick={() => {dispatch(updateLikes({...tuit, liked: !tuit.liked}))}}>
            {tuit.liked ? (
              <AiFillHeart color="red" size={18} />
            ) : (
              <AiOutlineHeart size={18} />
            )}
          </span>

          {tuit.likes}
        </div>
        <div className="col-3">
          <FiShare />
        </div>
      </div>
    );
}

export default TuitStats;
