import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { MdFormatListBulleted } from "react-icons/md";
import { BsFiletypeGif, BsEmojiSmile } from "react-icons/bs";
import { TbCalendarStats } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { createTuitThunk } from "../../services/tuits-thunks";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();

  const tuitClickHander = () => {
    // create new tuit from value in textarea
    const newTuit = {
      tuit: whatsHappening,
    };
    // send tuit as action payload
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");
  };

  return (
    <div className="row">
      <div className="col-auto">
        <img src="/images/stitch1.jpg" width={70} className="rounded-circle" />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div className="text-primary fs-2">
          <AiOutlinePicture className="me-3" />
          <BsFiletypeGif className="me-3" />
          <MdFormatListBulleted className="me-3" />
          <BsEmojiSmile className="me-3" />
          <TbCalendarStats className="me-3" />
          <CiLocationOn className="me-3" />
        </div>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHander}
          >
            Tuit
          </button>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};

export default WhatsHappening;
