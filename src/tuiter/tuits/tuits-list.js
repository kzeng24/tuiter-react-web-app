import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../services/tuits-thunks";

function TuitsList() {
  // destruct tuits from the state in the store
  const { tuits, loading } = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  // declares function callback (retrieving tuits) to be invoked when component first loads
  useEffect(() => {
    dispatch(findTuitsThunk());
    // invoke find-tuits-thunk to fetch tuits and
    // put them in the reducer's store so we can
    // extract them with useSelector() and render
    // the tuits here
  }, [dispatch]);
  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
}

export default TuitsList;