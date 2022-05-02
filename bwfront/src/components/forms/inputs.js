import { useField, Field, ErrorMessage } from "formik";
import "./inputs.css";

export function TextInput({ label, showErrorMessage, ...props }) {
  const [field, meta] = useField(props);
  const { className, ...inputProps } = props;
  const classAttributes = `${
    meta.touched && meta.error && "is-invalid"
  } ${className}`;
  return (
    <div className="form_input form-floating">
      <Field
        className={classAttributes + " form-control"}
        {...field}
        {...inputProps}
        autoComplete="off"
      />
      {label && <label>{label}</label>}

      <ErrorMessage
        component="div"
        name={field.name}
        className="input_error_message"
      />
    </div>
  );
}

export function SelectInput({ label, showErrorMessage, ...props }) {
  const [field, meta] = useField(props);
  const { className, options, placeholder, ...inputProps } = props;
  const classAttributes = `${
    meta.touched && meta.error && "is-invalid"
  } ${className}`;

  const selectOptions = options.map((option) => (
    <option
      key={typeof options[0] == "string" ? option : option.value}
      value={typeof options[0] == "string" ? option : option.value}
    >
      {typeof options[0] == "string" ? option : option.label}
    </option>
  ));

  return (
    <div>
      <select className={classAttributes} {...field} {...inputProps}>
        <option value="">{placeholder}</option>
        {selectOptions}
      </select>
      {showErrorMessage && (
        <ErrorMessage
          component="div"
          name={field.name}
          className="input-error-message"
        />
      )}
    </div>
  );
}
