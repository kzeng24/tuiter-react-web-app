// library to programmatically send and receive HTTP requests
import axios from "axios";

// location of HTTP service
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

// send HTTP requests asynchronously and notify our functions when responses eventually resolve
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);
    return response.data;
}

export const findTuits = async () => {
    const response = await axios.get(TUITS_API); // send HTTP GET request to TUITS_API
    const tuits = response.data; // extra JSON array from node server response (from findTuits in tuits-controller.js)
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`); // send HTTP DELETE request to server
    return response.data; //data contains response's status we'll ignore
}

export const updateTuit = async (tuit) => {
  const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit; // return tuit update to update in reducer's state's store
}