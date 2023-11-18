export default function ImageCarousel({ src, className, alt, width, height }) {
	return (
		<img
			src={src}
			style={{ objectFit: 'cover' }}
			className={className}
			alt={alt}
			width={width}
			height={height}
		/>
	);
}
