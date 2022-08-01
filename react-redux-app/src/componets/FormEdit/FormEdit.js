import React, { useState } from "react";
import bucet from "../../img/bucet.svg";
import { updateTheme, toggleEdit } from "../../store/listSlice";
import "./FormEdit.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";

const FormEdit = ({ ...theme }) => {
  const editTitle = theme.title;
  const editDescription = theme.description;
  const editId = theme.id;

  const [title, setTitle] = useState(editTitle);
  const [id] = useState(editId);
  const [description, setDescription] = useState(editDescription);

  const [modalActive, setModalActive] = useState(false);
  const editMode = useSelector((state) => state.themes.editMode);
  const dispatch = useDispatch();
  const toggleEditeForm = () => dispatch(toggleEdit());

  const EditTheme = (e) => {
    e.preventDefault();
    dispatch(updateTheme({ title, description, id }));
    setTitle("");
    setDescription("");
    toggleEditeForm();
  };

  const inputChange = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <form className={editMode ? "form-edit" : "form-edit-hidden"}>
        <img
          className="img-bucet"
          src={bucet}
          alt="bucet"
          onClick={() => setModalActive(!modalActive)}
        />
        <div className="title-edit">Title</div>
        <input
          className="input-title-edit"
          type="text"
          name="title"
          maxLength="120"
          value={title}
          onKeyDown={inputChange}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="form-discription-edit">Discription</div>
        <div className="textarea-edit">
          <textarea
            className="form-textarea-edit"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength="500"
            row="25"
          ></textarea>
        </div>
        <button className="save-edit" onClick={(e) => EditTheme(e)}>
          Update
        </button>
      </form>
      <Modal active={modalActive} setActive={setModalActive} id={id} />
    </div>
  );
};

export default FormEdit;
