import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent= () => {
  // component uses redux's useSelector hook to extract the message from the reducer (reducers/hello.js)
  const hello = useSelector((state) => state.hello);
  return <h3>{hello.message}</h3>;
};
export default HelloReduxExampleComponent;