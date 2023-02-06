import handleCart from "./handleCart";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cartShopMB",
  storage,
};
const rootReducers = combineReducers({
  cart: persistReducer(cartPersistConfig, handleCart),
});

export default rootReducers;
