import React from 'react';
import { Link } from 'react-router-dom';
const LinkSeeAll = (props) => {
	const { children, to, className } = props;
	return (
		<React.Fragment>
			<Link to={to} className={className}>
				{children}
			</Link>
		</React.Fragment>
	);
};

export default LinkSeeAll;
