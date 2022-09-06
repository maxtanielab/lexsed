import React from "react";
import "./NosPartenaires.scss";
import Slider from "react-slick";

var settings = {
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
	loop: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	initialSlide: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

const NosPartenaires = () => {
	return (
		<section id="nos-partenaires" className="section-content">
			<div className="container">
				<h2 className="title-section ta-center ">Nos partenaires</h2>
				<div className="cards-container">
					<Slider {...settings}>
						<div className="card">
							<img src="./images/logo-lexsed-last-version.png" alt="" />
						</div>
						<div className="card">
							<img src="./images/logo-lexsed-last-version.png" alt="" />
						</div>
						<div className="card">
							<img src="./images/logo-lexsed-last-version.png" alt="" />
						</div>
						<div className="card">
							<img src="./images/logo-lexsed-last-version.png" alt="" />
						</div>
						<div className="card">
							<img src="./images/logo-lexsed-last-version.png" alt="" />
						</div>
						<div className="card">
							<img src="./images/logo-lexsed-last-version.png" alt="" />
						</div>
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default NosPartenaires;
