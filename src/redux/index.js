import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { logger } from "redux-logger";

const persistConfig = {
  key: "primary",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(
  persistedReducer,
  {},
  applyMiddleware(thunk, logger)
);

export let persistor = persistStore(store);
