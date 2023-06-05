import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json";

// create an object that represents the currently logged in user
// Later this will come from users login in
const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "nasa.jpeg",
};

// create a template tuit object with some default values and copy over the fields userName, handle and image from the currentUser
const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: { tuits: tuits },
  reducers: {
    updateLikes: (state, action) => {
      state.tuits = state.tuits.map((tuit) => {
        if (tuit._id === action.payload._id) {
          tuit.liked = !tuit.liked;
          if (tuit.liked) {
            tuit.likes += 1;
          } else {
            tuit.likes -= 1;
          }
          console.log(tuit.liked + " " + tuit.likes);
        }
        return tuit;
      });
    },
    // createTuit reducer function which appends the new tuit in the payload at the beginning of the array of tuits contained in the state.
    // Initialize the unique identifier with a timestamp
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload, // add new tuit
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    deleteTuit(state, action) {
        // look up tuit with given id and deletes it from list
        const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
        state.tuits.splice(index, 1);
    }
  },
});

export default tuitsSlice.reducer;
// export reducer function
export const {updateLikes, createTuit, deleteTuit} = tuitsSlice.actions;