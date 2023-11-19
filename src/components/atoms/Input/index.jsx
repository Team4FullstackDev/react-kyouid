export default function Input({ label, type, htmlFor, value, name, onChangeHandler }) {
  return (
    <label htmlFor={htmlFor}>
      <span className="login_name">{label}</span>
      <input
        className="login_box"
        type={type}
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
    </label>
  );
}
