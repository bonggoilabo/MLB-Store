import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer";
import { persistStore } from "redux-persist";

let store = createStore(rootReducer);
export const persistor = persistStore(store);

export default store;
