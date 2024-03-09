import { combineReducers, compose, legacy_createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { applyMiddleware } from "redux";
import { authReducer } from "../reducer/authReducer";
import { thunk } from "redux-thunk";
import { watchReducer } from "../reducer/watchReducer";
import { filterReducer } from "../reducer/filterReducer";
import { wishlistReducer } from "../reducer/wishlistReducer";
import { bagReducer } from "../reducer/bagReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  watches: watchReducer,
  filters: filterReducer,
  wishlist: wishlistReducer,
  bag: bagReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
