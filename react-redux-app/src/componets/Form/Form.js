import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
import { saveTheme, newTheme } from "../../store/listSlice";
import * as yup from "yup";
import { useFormik } from "formik";

const Form = () => {
  const newThemes = useSelector((state) => state.themes.new);
  const dispatch = useDispatch();

  const hiddenForm = () => dispatch(newTheme());
  const onSubmit = (values) => {
    dispatch(saveTheme(values));
    formik.resetForm();
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
      title: "",
      description: "",
    },
    onSubmit,
    validationSchema,
  });

  return (
    <form
      className={newThemes ? "form-hidden" : "form"}
      onSubmit={formik.handleSubmit}
    >
      <label className="title">Title</label>
      <input
        className="input-title"
        type="text"
        name="title"
        placeholder="Title the questions"
        maxLength="120"
        onBlur={formik.handleBlur}
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      {formik.errors.title ? (
        <div className="error">{formik.errors.title}</div>
      ) : null}

      <label className="form-discription">Description</label>
      <div className="textarea">
        <textarea
          className="form-textarea"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          maxLength="500"
          row="25"
        ></textarea>
        {formik.errors.description ? (
          <div className="error">{formik.errors.description}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className={"save"}
        onClick={hiddenForm}
        disabled={!formik.isValid}
      >
        Save
      </button>
    </form>
  );
};

export default Form;
