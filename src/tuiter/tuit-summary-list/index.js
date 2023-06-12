import React, {useEffect} from 'react';
import TuitSummaryItem from "./tuit-summary-item";
import { useSelector, useDispatch } from 'react-redux';
import { findTuitsThunk } from "../services/tuits-thunks";

const TuitSummaryList = () => {
    // destruct tuits from the state in the store
    const {tuits, loading} = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk());
    }, [dispatch]);
    return (
      <ul className="list-group">
        {loading && <li className="list-group-item">Loading...</li>}
        {tuits.map((tuit) => (
          <TuitSummaryItem key={tuit._id} tuit={tuit} />
        ))}
      </ul>
    );
}

export default TuitSummaryList;