import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
import { saveTheme, newTheme } from "../../store/listSlice";
import { useFormik } from "formik";
import FormEdit from "../FormEdit/FormEdit";
import validationSchema from '../../helpers/validation'

const Form = () => {
  const newThemes = useSelector(state => state.themes.newItemMode);
  const editMode = useSelector(state => state.themes.editMode);
  const dispatch = useDispatch();

  const hiddenForm = () => dispatch(newTheme());
  const onSubmit = (values) => {
    dispatch(saveTheme(values));
    hiddenForm();
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit,
    validationSchema,
  });

  if (!newThemes) {
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
        {formik.errors.title && (
          <div className="error">{formik.errors.title}</div>
        )}

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
          {formik.errors.description &&(
            <div className="error">{formik.errors.description}</div>
          )}
        </div>

        <button type="submit" className={"save"} disabled={!formik.isValid}>
          Save
        </button>
      </form>
    );
  } else if (editMode) {
    return <FormEdit />;
  } else return '';
};
export default Form;
