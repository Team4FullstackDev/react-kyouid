import React from 'react';
import HeadingMain from '../../moleculs/HeadingMain';
import ImageCarouselsWithSpan from '../../moleculs/ImageCarouselsWithSpan';
import { section6 } from '../../../utils/constant/DataSection6';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

const Section6 = () => {
	return (
		<React.Fragment>
			{/* Section 6 Effenril Agung */}
			<section className="container__section_6">
				<div className="container_title_section_6">
					<HeadingMain
						classTitle="items_showcase_header_section_6 "
						descTitle="Prototype Showcase | New Product Announcement"
						to="/"
						parentClassName="container__section_6_see_all"
						className="section__6_link_see_all"
					/>
				</div>
				<div className="container__section_6_lazyload">
					<div>
						<ImageCarouselsWithSpan data={section6} />
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Section6;
