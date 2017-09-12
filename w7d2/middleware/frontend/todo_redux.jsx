import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

import Root from "./components/root";

// const addLoggingToDispatch = store => {
//   const storeDisp = store.dispatch;
//   return action => {
//     console.log(store.getState());
//     console.log(action);
//     storeDisp(action);
//     console.log(store.getState());
//   };
// };

// function addLoggingToDispatch(store) {
//   return function(next) {
//     return function(action) {
//       // your code here
//     };
//   };
// }

// const addLoggingToDispatch = store => next => action => {
//   console.log(store.getState());
//   console.log(action);
//   next(action);
//   console.log(store.getState());
// };

// const applyMiddleware = (store, ...middlewares) => {
//   let dispatch = store.dispatch;
//   middlewares.forEach(middleware => {
//     dispatch = middleware(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch });
// };

document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = localStorage.state
    ? JSON.parse(localStorage.state)
    : {};
  let store = configureStore(preloadedState);
  // store = applyMiddleware(store, addLoggingToDispatch);
  // store.dispatch = addLoggingToDispatch(store);
  const root = document.getElementById("content");
  ReactDOM.render(<Root store={store} />, root);
});
