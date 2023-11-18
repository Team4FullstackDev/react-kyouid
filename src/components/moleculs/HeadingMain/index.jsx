import React from 'react';
import './';
import LinkSeeAll from '../../atoms/LinkSeeAll';
import MainTitle from '../../atoms/MainTitle';
import RightArrow from '../../../assets/right-arrow.svg';

const HeadingMain = (props) => {
	const { descTitle, to, className, parentClassName, classTitle } = props;
	return (
		<React.Fragment>
			<MainTitle className={classTitle}>{descTitle}</MainTitle>
			<div className={parentClassName}>
				<LinkSeeAll className={className} to={to}>
					Lihat Semua
				</LinkSeeAll>
				<img src={RightArrow} alt="arrow Right" width="14px" height="10px" />
			</div>
		</React.Fragment>
	);
};

export default HeadingMain;
