import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./List.css";
import ListItem from "../ListItem/ListItem";
import { newTheme } from "../../store/listSlice";

const List = ({ searchTitle }) => {
  const themes = useSelector((state) => state.themes.lists);
  const dispatch = useDispatch();
  const sortTitle = themes.filter((theme) =>
    theme.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  console.log(sortTitle);
  const hiddenForm = () => dispatch(newTheme());
  const addTheme = useSelector((state) => state.themes.new);
  const editMode = useSelector((state) => state.themes.editMode);

  return (
    <div className="list">
      <button
        onClick={hiddenForm}
        className={!addTheme || editMode ? "new-visible" : "new"}
      >
        + New
      </button>
      {sortTitle.map((theme) => {
        console.log(theme);
        return <ListItem key={theme.id} {...theme} />;
      })}
    </div>
  );
};

export default List;
