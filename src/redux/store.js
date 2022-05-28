import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import reducer from './reducers';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['reducer'],
}

export const rootReducer = combineReducers({
    reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(createLogger())
);


export default store