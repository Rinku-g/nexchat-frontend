import { Field } from "formik";

const InputField = ({
  label,
  id,
  name,
  error,
  touched,
  type = "text",
  placeholder,
  handleChange,
}) => {
  return (
    <div className="form-group">
      <label
        htmlFor={id}
        className="mb-0.5 block text-11-5 font-light text-[rgba(255,255,255,0.42)] tracking-[0.3px]"
      >
        {label}
      </label>

      <Field
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-white outline-none transition-all duration-300 placeholder:text-gray-500 text-13 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
      />
      {error && touched && (
        <span className="text-11 text-red-500 font-bold">{error}</span>
      )}
    </div>
  );
};

export default InputField;
