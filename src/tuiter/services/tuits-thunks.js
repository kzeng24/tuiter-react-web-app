import {createAsyncThunk} from '@reduxjs/toolkit';
// import all exported functions as service
import * as service from "./tuits-service";

// Redux createAsyncThunk function can wrap an asynchronous HTTP function so
// that it can interact with a Redux reducer to store data from a remote server
// into a local redux store
export const findTuitsThunk = createAsyncThunk(
  "tuits/findTuits", // unique thunk identifier
  // loads data from service function and returned data goes in redux action's payload
  async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
    "tuits/deleteTuit",
    async (tuitId) => {
      await service.deleteTuit(tuitId);
      return tuitId; // return tuit ID so we can remove tuit from reducer's store
    }
);

export const createTuitThunk = createAsyncThunk(
  "tuits/createTuit",
  async (tuit) => {
    const newTuit = await service.createTuit(tuit);
    return newTuit;
  }
);

export const updateTuitThunk = createAsyncThunk(
  "tuits/updateTuit",
  async (tuit) => {
    await service.updateTuit(tuit);
    return tuit;
  }
);