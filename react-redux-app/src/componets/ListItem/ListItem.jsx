import "./ListItem.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleEdit, findEditThemeId } from "../../store/listSlice";

const ListItem = ({ ...theme }) => {
  const editMode = useSelector(state => state.themes.editMode);
  const newTheme = useSelector(state => state.themes.newItemMode);
  const id = theme.id;
  const dispatch = useDispatch();

  const click = () => {
    dispatch(toggleEdit());
    dispatch(findEditThemeId({ id }));
  };

  return (
    <div
      className={editMode || !newTheme ? "theme-visible" : "theme"}
      onClick={click}
    >
      {theme.title}
    </div>
  );
};

export default ListItem;
