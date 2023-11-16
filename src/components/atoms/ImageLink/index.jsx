export default function ImageLink({ src, classNameLink , className, alt , href }) {
  return (
    <div className={classNameLink}>
      <a href={href} target="_blank" rel="noreferrer">
        <img className={className} src={src} alt={alt} />
      </a>
    </div>
  );
}
