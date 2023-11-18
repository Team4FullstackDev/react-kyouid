import React from 'react';

const MainTitle = (props) => {
	const { children, className } = props;
	return (
		<>
			<h2 className={className}>{children}</h2>
		</>
	);
};

export default MainTitle;
