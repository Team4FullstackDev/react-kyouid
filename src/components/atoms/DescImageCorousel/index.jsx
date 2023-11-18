import React from 'react';
import { Link } from 'react-router-dom';

const DescImageCarousel = (props) => {
	const { className, children, to } = props;
	return (
		<>
			<Link to={to} className={className}>
				{children}
			</Link>
		</>
	);
};

export default DescImageCarousel;
