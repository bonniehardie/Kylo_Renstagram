import {
  createStore,
  // applyMiddleware,
  combineReducers,
  // compose
} from "redux";
// import thunk from "redux-thunk";
import auth from "./reducers/auth";
// import comments from "./reducers/comments";
// import likes from "./reducers/likes";
// import photo from "./reducers/photo";
// import photos from "./reducers/photos";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  auth
});

const configureStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    // composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;
