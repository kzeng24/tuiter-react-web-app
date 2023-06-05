import React from "react";
// import components that will take in and apply reducer data
import HelloReduxExampleComponent from "./hello-redux-example-component";
import Todos from "./todos-component";
// import reducer that generates the data (contains json)
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
// import createStore/configureStore
import { configureStore } from "@reduxjs/toolkit";
// import Provider to deliver content of the store to all its child components
import { Provider } from "react-redux";

// create data storage
// reducers must collate their collective states into a common store through configureStore
const store = configureStore({reducer: {hello, todos}});

// REDUX allows maintaining state of an application (state changes over time)
// great for working with APPLICATION LEVEL STATE
const ReduxExamples = () => {
    return (
      // Provider delivers data to child elements
      <Provider store={store}>
        <div>
          <h2>Redux Examples</h2>
          {/* component consumes the data and performs logic/styling to it*/}
          <HelloReduxExampleComponent />
          <Todos />
        </div>
      </Provider>
    );
};

export default ReduxExamples;