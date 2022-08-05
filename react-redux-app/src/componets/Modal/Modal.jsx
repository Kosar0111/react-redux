import React from "react";
import "./Modal.css";
import { deleteTheme, toggleEdit } from "../../store/listSlice";
import { useDispatch } from "react-redux";

import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");
const Modal = ({ active, setActive, id }) => {
  const dispatch = useDispatch();
  const toggleEditeForm = () => dispatch(toggleEdit());

  const removeTheme = () => {
    dispatch(deleteTheme({ id }));
    setActive(!active);
    toggleEditeForm();
  };

  if (active) {
    return createPortal(
      <div className="modal">
        <div className="modal__content">
          <div className="delete" onClick={() => setActive(!active)}>
            {" "}
            Х
          </div>
          <div className="content_text">
            <h2>Are you really sure to delete this theme?</h2>
          </div>
          <div className="button">
            <button
              className="button_cancel"
              onClick={() => setActive(!active)}
            >
              Cancel
            </button>
            <button className="button_confirm" onClick={removeTheme}>
              Confirm
            </button>
          </div>
        </div>
      </div>,
      modalRoot
    );
  }
  return '';
};

export default Modal;
