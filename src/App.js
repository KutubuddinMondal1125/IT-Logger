import React, { Fragment, useEffect } from "react";
import SearchBar from "./layout/SearchBar";
import Logs from "./logs/Logs";
import AddBtn from "./layout/AddBtn";
import AddLogModal from "./logs/AddLogModal";
import EditLogModal from "./logs/EditLogModal";
import AddTechModal from "./techs/AddTechModal";
import TechListModal from "./techs/TechListModal";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // initialize materialize-js
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
