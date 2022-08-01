import "./ListItem.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormEdit from "../FormEdit/FormEdit";
import { toggleEdit } from "../../store/listSlice";

const ListItem = ({ ...theme }) => {
  const editMode = useSelector((state) => state.themes.editMode);
  const addTheme = useSelector((state) => state.themes.new);
  const dispatch = useDispatch();

  const click = () => {
    dispatch(toggleEdit());
  };

  return (
    <>
      <div
        className={editMode || !addTheme ? "theme-visible" : "theme"}
        onClick={click}
      >
        {theme.title}
      </div>
      {editMode ? <FormEdit {...theme} /> : ""}
    </>
  );
};

export default ListItem;
