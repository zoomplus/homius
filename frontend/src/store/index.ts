//api
import { combineReducers, configureStore } from "@reduxjs/toolkit";
//libs
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authenticateApi } from "./api/authenticateApi";
import { cameraApi } from "./api/cameraApi";
import { intercomApi } from "./api/intercomApi";
//slices
import reducerCommon from "./slices/common";
import reducerUser from "./slices/user";

//Конфигурируем персистор, указываем какие редьюсеры идут в локалсторадж а какие нет
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["common"], // What you don't wanna to persist
  whitelist: ["user"], // What you want to persist
};

//Выделяем редьюсеры, чтоб сделать слияние с конфигурацией выше
const rootReducer = combineReducers({
  common: reducerCommon,
  user: reducerUser,
  [authenticateApi.reducerPath]: authenticateApi.reducer,
  [intercomApi.reducerPath]: intercomApi.reducer,
  [cameraApi.reducerPath]: cameraApi.reducer,
});

//Редьюсер соединенный с локалсторадж, который содержит все редьюсеры
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Прокидываем персист как обычный редьюсер
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //Игнорируем ненужные экшены от персистора
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authenticateApi.middleware,
      intercomApi.middleware,
      cameraApi.middleware,
    ),
});

//Экспортируем для компонента провайдера PersistGate
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
