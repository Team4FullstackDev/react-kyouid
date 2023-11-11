export default function ImageCarousel({ src, className, alt }) {
    return (
      <img
        src={src}
        style={{ objectFit: "cover" }}
        className={className}
        alt={alt}
      />
    );
}