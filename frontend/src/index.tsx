import { ConfigProvider, theme } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Router from "./layout/Router";
import { persistor, store } from "./store";
import "./styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const { darkAlgorithm } = theme;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00b894",
              colorInfo: "#00b894",
              colorTextBase: "#fbfbfb",
              colorBgBase: "#18222d",
            },
            algorithm: darkAlgorithm,
          }}
        >
          <div className="bg-main text-main-text">
            <Router />
          </div>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
