import React, { useState } from "react";
import bucet from "../../img/bucet.svg";
import { updateTheme, toggleEdit } from "../../store/listSlice";
import "./FormEdit.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import * as yup from "yup";
import { useFormik } from "formik";

const FormEdit = () => {
  const [modalActive, setModalActive] = useState(false);
  const allTheme = useSelector((state) => state.themes.lists);
  const editMode = useSelector((state) => state.themes.editMode);
  const findId = useSelector((state) => state.themes.editThemeId);
  const dispatch = useDispatch();
  const toggleEditeForm = () => dispatch(toggleEdit());
  const editTheme = allTheme.find((el) => el.id === findId);
  const onSubmit = (values) => {
    dispatch(updateTheme({ ...values }));
    toggleEditeForm();
  };

  const validationSchema = yup.object({
    title: yup
      .string()
      .min(5, "Must be 5 characters at least")
      .max(30, "Too long title")
      .required("Title is reqield!"),
    description: yup
      .string()
      .min(25, "Must be 25 characters at least")
      .max(120, "Too long title")
      .required("Description is required field!"),
  });

  const formik = useFormik({
    initialValues: {
      title: editTheme.title,
      description: editTheme.description,
      id: editTheme.id,
    },
    onSubmit,
    validationSchema,
  });

  return (
    <div className="edit-all">
      <form
        onSubmit={formik.handleSubmit}
        className={editMode ? "form-edit" : "form-edit-hidden"}
      >
        <img
          className="img-bucet-edit"
          src={bucet}
          alt="bucet"
          onClick={() => setModalActive(!modalActive)}
        />
        <label className="title-edit">Title</label>
        <input
          className="input-title-edit"
          type="text"
          name="title"
          maxLength="120"
          onBlur={formik.handleBlur}
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.errors.title ? (
          <div className="error-edit">{formik.errors.title}</div>
        ) : null}

        <label className="form-discription-edit">Discription</label>
        <div className="textarea-edit">
          <textarea
            className="form-textarea-edit"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            maxLength="500"
            row="25"
          ></textarea>
          {formik.errors.description ? (
            <div className="error-edit">{formik.errors.description}</div>
          ) : null}
        </div>

        <button type="submit" className="save-edit" disabled={!formik.isValid}>
          Update
        </button>
      </form>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        id={editTheme.id}
      />
    </div>
  );
};

export default FormEdit;
