export default function Checkbox({
  handlechange,
  className,
  htmlFor,
  type,
  name,
  id,
  title,
  handlechecked,
}) {
  const handleChecked = (title, name) => {
    if (handlechecked) {
      handlechecked(title, name);
    }
  };
  return (
    <label className={className} htmlFor={htmlFor}>
      <input
        onChange={() => handleChecked(title, name)}
        type={type}
        name={name}
        title={title}
        id={id}
      />
      <span>{title}</span>
    </label>
  );
}
