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

export function SelectInput({
  label,
  showErrorMessage,
  options,
  optionValue,
  optionLabel,
  ...props
}) {
  const [field, meta] = useField(props);

  const { className, ...inputProps } = props;

  const classAttributes = `${
    meta.touched && meta.error && "is-invalid"
  } ${className}`;

  const selectOptions = options?.map((option, index) => (
    <option
      key={index}
      value={
        typeof option[0] == "string" || !optionValue
          ? JSON.stringify(option)
          : option[optionValue]
      }
    >
      {typeof options[0] == "string" ? option : option[optionLabel]}
    </option>
  ));

  return (
    <div className="form_input form-floating">
      <select
        className={classAttributes + " form-control"}
        {...field}
        {...inputProps}
      >
        <option value="">{props.placeholder}</option>
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
