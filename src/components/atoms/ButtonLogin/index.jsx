export default function ButtonLogin({ type, src, tittle, className }) {
  return (
    <button className={className} type={type}>
      <img className="login_fb" src={src} alt="" />
      <span className="login_button_tittle_fb">{tittle}</span>
    </button>
  );
}
