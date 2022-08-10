import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getThemes } from "./store/listSlice";
import Form from "./componets/Form/Form";
import "./app.css";
import Sort from "./componets/Sort/Sort";
import List from "./componets/List/List";
import loadingGif from "./img/loading.gif";

const App = () => {
  const [start, setStart] = useState(true);
  const themes = useSelector((state) => state.themes.lists);
  const { loading, error } = useSelector((state) => state.themes);
  const [searchTitle, setSearchTitle] = useState("");
  const dispatch = useDispatch();
  const toggle = (start) => setStart(!start);

  useEffect(() => {
    dispatch(getThemes());
  }, [dispatch]);
  return (
    <div className="all-app">
      <div className={start ? "add-btn" : "add-btn-done"}>
        <button onClick={toggle} className="add-themes">
          Add themes
        </button>
      </div>
      <div className={start ? "content" : "content-done"}>
        <div className={themes.length >= 2 ? "sort-main" : "sort-main-hiden"}>
          <Sort setSearchTitle={setSearchTitle} />
        </div>
        {error && <h2 className="error-api">An error occured: {error}</h2>}
        {loading ? (
          <img className="loading" src={loadingGif} alt="loadingGif" />
        ) : (
          <div className="main">
            <div className="content-list">
              <List searchTitle={searchTitle} />
            </div>
            <div className="content-form">
              <Form />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
