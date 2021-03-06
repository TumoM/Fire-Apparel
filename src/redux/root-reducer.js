import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReduccer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer"

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart'] // Whitelist reducers to persist with defined storage
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReduccer,
    shop: shopReducer,
})

export default persistReducer(persistConfig,rootReducer); // layers persistence on the rootReducer
