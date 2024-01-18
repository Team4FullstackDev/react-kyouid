export default function ButtonLogin({ type, src, title, className, onClick }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      <img className="login_fb" src={src} alt="" />
      <span className="login_button_tittle_fb">{title}</span>
    </button>
  );
}
