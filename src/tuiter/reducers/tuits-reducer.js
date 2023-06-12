import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";
import {
  findTuitsThunk,
  deleteTuitThunk,
  createTuitThunk,
  updateTuitThunk,
} from "../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  // define asynchronous reducers
  extraReducers: {
    // Each thunk has various states that track their lifecycle while requests are in flight
    // if request is not yet fulfilled …
    [findTuitsThunk.pending]: (state) => {
      state.loading = true; // set loading true so UI can display spinner
      state.tuits = []; // empty tuits since we are still fetching them
    },
    // when we get response, request is fulfilled
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      // we extract/destruct payload from action object
      state.loading = false;
      state.tuits = payload; // payload has tuits from server and update redux state
    },
    // if request times out, or responds with error
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((tuit) => tuit._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((tuit) => tuit._id === payload._id);
      state.tuits[tuitNdx] = {...state.tuits[tuitNdx],...payload };
    }
  },
  // we're not going to use the old reducers anymore:
  reducers: {},
});

export default tuitsSlice.reducer;
// export reducer function
export const { updateLikes, createTuit, deleteTuit } = tuitsSlice.actions;
