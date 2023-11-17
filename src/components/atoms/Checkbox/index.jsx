export default function Checkbox({
  handlechange,
  className,
  htmlFor,
  type,
  name,
  id,
  title,
}) {
  return (
    <label className={className} htmlFor={htmlFor}>
      <input onClick={handlechange} type={type} name={name} id={id} />
      <span>{title}</span>
    </label>
  );
}
