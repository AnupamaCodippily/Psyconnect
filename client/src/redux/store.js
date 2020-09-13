import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {};
const middleware = [thunk];

// const store = createStore(rootReducer,
//      initialState,
//      compose(
//          applyMiddleware(...middleware),
//          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//      )
//      );

 
const persistConfig = { 
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore
    (
        persistedReducer,
        initialState,
        compose(
            applyMiddleware(...middleware)
            // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
  let persistor = persistStore(store)
  return { store, persistor }
}

// export default store;