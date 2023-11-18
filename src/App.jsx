import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from 'react';
import Section10 from './components/organism/Section10';
import Section2 from './components/organism/Section2';
import Section4 from './components/organism/Section4';
import Section6 from './components/organism/Section6';
import Section7 from './components/organism/Section7';
import Section8 from './components/organism/Section8';
import Section9 from './components/organism/Section9';
import { section__1Settings } from './components/js-slicks/section1';
import Section__1 from './components/organism/Section1';
import { Section1 } from './utils/constant/DataSection1';
import Section3 from './components/organism/Section3';

function App() {
	const sliderRef = useRef(null);
	const [selectedCategory, setSelectedCategory] = useState(null);

	const nextSlide = () => {
		console.log('test');
		sliderRef.current.slickNext();
	};

	const prevSlide = () => {
		sliderRef.current.slickPrev();
	};

	const handleFilterClick = (e) => {
		setSelectedCategory(e.target.value);
	};
	return (
		<>
			<main>
				{/* <!-- section 1 By Harymahayana07 --> */}
				<Section__1 data={Section1} sliderSetting={section__1Settings} />
				{/* <!-- End Section --> */}

				{/* <!-- section 2 By Mujahid Ansori Majid --> */}
				<Section2
					sliderRef={sliderRef}
					nextSlide={nextSlide}
					prevSlide={prevSlide}
				/>
				{/* <!-- End Section 2--> */}

				{/* <!-- container for section 3 through 10 --> */}
				<div className="container">
					<Section3 />

					<Section4
						sliderRef={sliderRef}
						nextSlide={nextSlide}
						prevSlide={prevSlide}
					/>
					{/* Effenril Agung Section 6 */}
					<Section6 />
					{/* End Section 6 Effenril Agung */}

					{/* section 7 */}
					<Section7 />
					<Section8 />
					<Section9 />
					{/* <!-- Section 10 created by Endri Nastiar --> */}
					<Section10
						handleClick={handleFilterClick}
						selectedCategory={selectedCategory}
					/>
					{/* <!-- End Section 10 by Endri Nastiar --> */}
				</div>
			</main>
		</>
	);
}

export default App;
