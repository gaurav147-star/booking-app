import { applyMiddleware, createStore } from "redux";
// import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { UserReducer } from "./reducers/userReducer";
import { combineReducers } from "redux";
import { isAdminReducer } from "./reducers/isadmin";

const reducers = combineReducers({
  admin: isAdminReducer,
  UserReducer: UserReducer,
});
const persistConfig = {
  key: "persist-key",
  storage,
  blacklist:[UserReducer]
};
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(
  // persistedReducer,
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { persistor };
export default store;
