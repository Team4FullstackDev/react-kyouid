import React, { useState, useEffect, useRef } from 'react';
import DescImageCarousel from '../../atoms/DescImageCorousel';
import Slider from 'react-slick';
import UseMediaQuery from '../../atoms/MediaQuery';
import ImageCarousel from '../../atoms/ImageCarousel';

const ImageCarouselsWithSpan = (props) => {
	const { data } = props;

	const sliderRef = useRef(null);

	const settingMobile = {
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		infinite: true,
		dosts: false,
	};
	const settingDesktop = {
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		infinite: true,
		dosts: false,
	};

	const mobile = UseMediaQuery('(min-width: 426px)');

	console.log(mobile);

	return (
		<>
			{mobile ? (
				<>
					<Slider ref={sliderRef} {...settingDesktop}>
						{data.map((item, index) => {
							return (
								<>
									<div key={index} className="overlay_image_section_6">
										<ImageCarousel
											src={item.src}
											alt={item.alt}
											className={item.className}
										/>
										<div className="container_overlay_section_6">
											<DescImageCarousel
												to="/"
												className="image_overlay_text_section_6"
											>
												{item.description}
											</DescImageCarousel>
										</div>
									</div>
								</>
							);
						})}
					</Slider>
				</>
			) : (
				<Slider {...settingMobile}>
					{data.map((item, index) => {
						return (
							<>
								<div key={index} className="overlay_image_section_6">
									<ImageCarousel
										src={item.src}
										alt={item.alt}
										className={item.className}
									/>
									<div className="container_overlay_section_6">
										<DescImageCarousel
											to="/"
											className="image_overlay_text_section_6"
										>
											{item.description}
										</DescImageCarousel>
									</div>
								</div>
							</>
						);
					})}
				</Slider>
			)}
		</>
	);
};

export default ImageCarouselsWithSpan;
