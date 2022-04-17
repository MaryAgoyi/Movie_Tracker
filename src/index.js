import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./features/store";
import { Provider } from "react-redux";
import App from "./App";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <>
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </Provider>
  </Router>
  <ToastContainer/>
  </>
);
