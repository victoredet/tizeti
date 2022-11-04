import React from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";
import "h8k-components";
import { Provider } from "react-redux";
import store from "./app/store";

const title = "Tizeti";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
          <Search />
          <Error />
          <ResidentsList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
